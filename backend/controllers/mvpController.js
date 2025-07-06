const fs = require("fs");
const path = require("path");
const supabase = require("../services/supabase");
const { generateSaaSCode } = require("../services/aiService");
const { cleanDirectory, writeFiles, createZip } = require("../services/fileService");

// Helper to auto-generate project name from idea
function generateProjectName(idea) {
  const raw = idea.split(/\s+/).slice(0, 3).join("-");
  return raw.toLowerCase().replace(/[^\w\-]/g, "").replace(/\-+/g, "-");
}

exports.streamGenerateMVP = async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let { userId, prompt, projectName, formData, aiConfig } = req.query;

  if (!userId || !prompt || !formData) {
    res.write(`event: error\ndata: ${JSON.stringify({ error: "Missing fields" })}\n\n`);
    return res.end();
  }

  const parsedFormData = JSON.parse(formData);
  const parsedConfig = aiConfig ? JSON.parse(aiConfig) : {};

  // 🚀 Derive clean project name from idea
  const idea = parsedFormData.idea || "mvp";
  const cleanName = idea
    .split(/\s+/)
    .slice(0, 3)
    .join("-")
    .toLowerCase()
    .replace(/[^\w\-]/g, "")
    .replace(/\-+/g, "-");

  const finalProjectName = projectName || cleanName;

  // Send name early so frontend can display
  res.write(`data: ${JSON.stringify({ projectName: finalProjectName })}\n\n`);

  const outputRoot = path.resolve(__dirname, "../../outputs");
  const projectDir = path.join(outputRoot, finalProjectName);
  const zipFile = path.join(outputRoot, `${finalProjectName}.zip`);

  cleanDirectory(projectDir);

  try {
    const files = await generateSaaSCode(parsedFormData, prompt, parsedConfig, (filename) => {
      res.write(`data: ${JSON.stringify({ filename })}\n\n`);
    });

    writeFiles(files, projectDir);
    await createZip(projectDir, zipFile);

    await supabase.from("mvps").insert([
      {
        user_id: userId,
        name: finalProjectName,
        prompt,
        files,
      },
    ]);

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    console.error("❌ Generation Error:", err);
    res.write(`event: error\ndata: ${JSON.stringify({ error: "Generation failed" })}\n\n`);
    res.end();
  }
};


exports.generateMVP = async (req, res) => {
  res.status(200).json({ message: "Use /generate-stream for streaming MVP generation." });
};

exports.downloadZip = (req, res) => {
  const { projectName } = req.params;
  const zipPath = path.resolve(__dirname, "../../outputs", `${projectName}.zip`);
  if (!fs.existsSync(zipPath)) {
    return res.status(404).json({ message: "File not found" });
  }
  res.download(zipPath);
};
