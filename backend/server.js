const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const { PORT } = require("./config");

const app = express();

// ✅ Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:3000", // for local development
  "https://agenta-aaditya-salgaonkar-maximally.vercel.app", // deployed frontend on Vercel
];

// ✅ Use dynamic CORS with credentials
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    credentials: true,
  })
);

// ✅ Handle preflight requests globally (important for POST, SSE, etc.)
app.options("*", cors());

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Agenta backend is running.");
});

// ✅ Route imports
const mvpRoutes = require("./routes/mvp");
const aiRoutes = require("./routes/aiRoutes");
const chatRoutes = require("./routes/chatRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const messageRoutes = require("./routes/messageRoutes");
const githubRoutes = require("./routes/githubRoutes");
const netlifyRoutes = require("./routes/netlifyRoutes");

// ✅ Use routes
app.use("/api/mvp", mvpRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/netlify", netlifyRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
