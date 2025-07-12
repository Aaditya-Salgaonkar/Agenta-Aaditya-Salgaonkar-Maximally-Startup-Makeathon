
## 🚀 Agenta — The AI-Powered SaaS MVP Builder

**Hackathon Submission**: United Hacks V5 
**Built by**: Aaditya Salgaonkar  
**Duration**: 1.5 days | Solo Build  
---

## ❓ The Problem

Thousands of teen founders and indie builders come up with great startup ideas — but most **never get built** due to:

- Lack of coding skills
- Long MVP timelines
- Expensive developer costs
- Complexity of no-code platforms

> ⚠️ There’s a *massive execution gap* in the early startup ecosystem.

---

## 💡 The Solution

**Agenta** is an AI-native platform that lets anyone — even with zero technical background — go from **idea → production-ready SaaS MVP** in minutes.

Just describe your idea in plain English.
Let AI handle the rest.

---

## 🔥 Key Features

### 🎯 Natural Language → Working SaaS App
- Type your idea, e.g. _"an AI co-writing platform for Gen Z content creators"_
- Agenta generates:
  - Full landing page
  - Authentication with Clerk
  - Prisma schema + DB logic
  - API routes + REST endpoints
  - UI components in Next.js + Tailwind
  - Zipped folder structure + deploy-ready code

### 🤖 Agenta AI Co-Pilot (Built on Gemini 1.5)
A conversational assistant inside Agenta that:
- Guides you while refining ideas
- Acts like your personal AI CTO
- Suggests architecture, features, best practices
- Runs on Google Gemini 1.5 Flash API

### 🧠 Smart Multi-Model Generation
- Uses **Mistral 8x7B Instruct** for file-by-file code synthesis
- OpenRouter backend dynamically orchestrates task breakdown
- Intelligent prompt chunking & real-time file streaming
- Generates fully working MVPs with modular file structure


---

## 🧰 Tech Stack

| Layer        | Technology |
|--------------|------------|
| Frontend     | Next.js 14 (App Router, RSC) |
| Backend      | Node.js + Express |
| AI Models    | Mistral 8x7B via OpenRouter + Gemini 1.5 |
| Auth & DB    | Supabase |
| Styling      | TailwindCSS 3 |
| Hosting      | Vercel (frontend) + Render (backend) |

---

**Vercel**: [Frontend](https://agenta-aaditya-salgaonkar-maximally.vercel.app/) <br>
**Render**: [Backend](https://agenta-aaditya-salgaonkar-maximally.onrender.com/)  

---

## 📦 How to Run Locally

### 🔧 Prerequisites
- Node.js v18+
- Supabase Project (Auth + DB)
- OpenRouter API key
- Gemini API key (Google Cloud)
- GitHub & Netlify tokens (for full deployment)

### 🧬 Setup

```bash
git clone https://github.com/your-username/agenta.git
cd agenta
```

Create `.env` with:

```env
SUPABASE_URL=...
SUPABASE_KEY=...
OPENROUTER_API_KEY=...
GEMINI_API_KEY=...
GITHUB_TOKEN=...
NETLIFY_TOKEN=...
```

### 🖥 Backend

```bash
cd backend
npm install
npm run dev
# ➜ Running at http://localhost:5000
```

### 💻 Frontend

```bash
cd frontend
npm install
npm run dev
# ➜ Running at http://localhost:3000
```

---

## 💼 Go-to-Market & Vision

Agenta can revolutionize how startups are built by:
- Empowering teen founders, non-tech entrepreneurs, and designers
- Becoming a platform-as-a-service for startup incubators
- Offering white-label MVP generation for accelerators

### 💰 Revenue Strategy
- Freemium + usage-based billing (OpenRouter token cost)
- Tiered SaaS plans (Basic → Pro → Enterprise)
- Pay-per-MVP or per-deployment billing
- GitHub + Netlify integration as premium features

---

## 🙋 About the Builder

**Aaditya Salgaonkar**  
Full Stack Builder | Goa, India 🇮🇳  
📫 aadityasalgaonkar@gmail.com  

> “Built solo during United Hacks V5. Agenta is my vision of democratizing execution for future founders.”

---


## 🙏 Credits

Thanks to:

- [United Hacks V5]
- Supabase, OpenRouter, Google Gemini
- Netlify, GitHub APIs
- Mentors, judges & builders from the hackathon 💙

---
