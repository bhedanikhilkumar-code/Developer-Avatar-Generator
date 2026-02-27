<div align="center">

# ⚡ Developer Avatar Generator
### *Generate clean, deterministic, dev-style avatars in seconds*

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node-20+-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge)

</div>

---

## ✨ What this project does

`Developer Avatar Generator` creates **deterministic SVG avatars** from a seed (name, handle, email, ID).
Same seed → same avatar. Perfect for apps, dashboards, teams, and internal tooling.

### ✅ Includes
- **Core generator engine** (TypeScript)
- **CLI tool** (`dev-avatar`)
- **REST API** (`/avatar.svg`)
- **Web UI preview**
- **Tests + documentation**

---

## 🚀 Quick Start

```bash
npm install
npm run build
npm run start
```

Open: `http://localhost:8787`

---

## 🧪 CLI Usage

```bash
npm run cli -- --seed="Nikhil Bheda" --theme=matrix --size=320 --out=nikhil.svg
```

---

## 🌐 API Usage

```http
GET /avatar.svg?seed=Jane%20Doe&theme=sunset&size=256
```

Returns `image/svg+xml`.

---

## 🎨 Themes

- `midnight`
- `forest`
- `sunset`
- `matrix`
- `auto` (theme selected from seed)

---

## 🗂️ Project Structure

```text
src/
  model.ts      # avatar model + deterministic settings
  svg.ts        # SVG renderer
  themes.ts     # built-in palettes
  cli.ts        # command-line interface
  server.ts     # express API + static web app
public/
  index.html    # browser demo
tests/
  avatar.test.ts
```

---

## 🧠 Why deterministic avatars?

- Better identity consistency in products
- No image uploads/storage cost
- Great for privacy-first tools
- Works offline and at scale

---

## 📜 License
MIT
