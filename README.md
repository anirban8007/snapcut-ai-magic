# SnapCut AI ✂️

> **Remove image backgrounds instantly — powered by on-device AI.**

SnapCut AI is a free, browser-based background removal tool. Upload any photo and get a pixel-perfect transparent PNG in seconds. No account, no upload to a server — the AI model runs **entirely in your browser**.

![SnapCut AI](https://img.shields.io/badge/Built%20with-React%2019-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite%207-646CFF?style=flat-square&logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

- 🧠 **On-device AI** — uses `@imgly/background-removal` with ONNX Runtime; your images never leave your device
- ⚡ **Instant results** — real-time progress indicator while the model runs
- 🎨 **Before / After slider** — compare original and cutout side-by-side
- 📥 **One-click download** — exports a clean transparent PNG
- 🌙 **Dark-mode ready** — fully themed UI with Tailwind CSS v4
- 📱 **Responsive** — works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Routing | TanStack Router v1 |
| Bundler | Vite 7 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI) |
| AI Engine | `@imgly/background-removal` + ONNX Runtime Web |
| Animations | Framer Motion |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm `>= 9`

### Install & Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/snapcut-ai.git
cd snapcut-ai

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
snapcut-ai/
├── index.html              # Vite HTML entry point
├── vercel.json             # Vercel SPA rewrite rules
├── vite.config.ts          # Vite + TanStack Router + Tailwind config
├── tsconfig.json           # TypeScript config
├── components.json         # shadcn/ui config
└── src/
    ├── main.tsx            # React app entry (createRoot)
    ├── router.tsx          # TanStack Router setup
    ├── routeTree.gen.ts    # Auto-generated route tree (do not edit)
    ├── styles.css          # Global styles & Tailwind tokens
    ├── routes/
    │   ├── __root.tsx      # Root layout component
    │   └── index.tsx       # Home page (/)
    ├── components/
    │   ├── Navbar.tsx
    │   ├── UploadDemo.tsx  # Core upload & AI processing logic
    │   ├── BeforeAfterSlider.tsx
    │   ├── Features.tsx
    │   ├── HowItWorks.tsx
    │   ├── FAQ.tsx
    │   ├── Footer.tsx
    │   └── ui/             # shadcn/ui primitives
    └── lib/
        └── utils.ts        # Utility helpers
```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Vercel will auto-detect **Vite** — no changes needed
4. Use these settings if asked:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

5. Click **Deploy** ✅

> The `vercel.json` file already handles SPA routing — all paths serve `index.html`.

---

## 🔒 Privacy

SnapCut AI processes images **100% locally in your browser**. The AI model is downloaded once and cached. No image data is ever sent to any server.

---

## 📄 License

MIT © 2024 SnapCut AI
