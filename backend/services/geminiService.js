const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_API_KEY } = require("../config"); // Ensure this exists

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Vague prompts to patch automatically
const vaguePrompts = [
  "okay", "ok", "tell", "go on", "more", "continue", "hmm", "yes", "no", "sure", "ready"
];

// Core Gemini chat generation function
const generateFromGemini = async (conversationHistory) => {
  try {
    // Strict system prompt like ChatGPT
    const systemPrompt = `
You are Agenta AI, an intelligent assistant built by Aaditya Salgaonkar.
You are skilled in SaaS, full-stack development, AI, business models, and databases.
Never reply with "Okay", "Sure", or "How can I help?" unless the user says "hello".
Always respond immediately and directly with the best possible answer — no fluff or filler.
`;

    // Sanitize vague messages
    const cleanedHistory = conversationHistory.map(msg => {
      const userText = msg.message.trim().toLowerCase();
      if (msg.sender === 'user' && vaguePrompts.includes(userText)) {
        return {
          sender: 'user',
          message: 'Can you tell me more about Galuxium or one of its services?'
        };
      }
      return msg;
    });

    // Format the conversation into readable dialogue
    const dialogue = cleanedHistory.map(msg => {
      const prefix = msg.sender === 'user' ? 'User' : 'Agenta AI';
      return `${prefix}: ${msg.message}`;
    }).join('\n');

    // Final prompt for Gemini
    const prompt = `${systemPrompt.trim()}\n\n${dialogue}\nAgenta AI:`;

    // Generate Gemini response
    const result = await model.generateContent(prompt);
    const output = result?.response?.text()?.trim();

    if (!output || output.toLowerCase().includes("waiting for user")) {
      throw new Error("Gemini returned no useful output.");
    }

    return output;
  } catch (error) {
    console.error("Gemini API Error:", error?.response?.data || error.message);
    throw new Error("Gemini generation failed.");
  }
};

module.exports = { generateFromGemini };
