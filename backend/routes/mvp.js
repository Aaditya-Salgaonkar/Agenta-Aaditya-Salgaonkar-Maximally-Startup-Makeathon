const express = require("express");
const router = express.Router();

const {
  generateMVP,
  streamGenerateMVP,
  downloadZip
} = require("../controllers/mvpController");

// POST route to trigger MVP generation
router.post("/generate", generateMVP);

// SSE stream route for live progress updates
router.get("/generate-stream", streamGenerateMVP);

// ZIP download route
router.get("/download/:projectName", downloadZip);

module.exports = router;
