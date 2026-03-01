import express from "express";
import { createAvatarModel } from "./model.js";
import { renderAvatarSvg } from "./svg.js";

const app = express();
app.use(express.static("public"));
const port = Number(process.env.PORT || 8787);

app.get("/health", (_, res) => res.json({ ok: true }));

app.get("/avatar.svg", (req, res) => {
  const seed = String(req.query.seed || "Developer Avatar");
  const size = Number(req.query.size || 256);
  const theme = req.query.theme ? String(req.query.theme) : undefined;
  const initials = req.query.initials ? String(req.query.initials) : undefined;

  const model = createAvatarModel({ seed, size, theme: theme as any, initials });
  const svg = renderAvatarSvg(model);
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
});

app.listen(port, () => {
  console.log(`🚀 Developer Avatar Generator running at http://localhost:${port}`);
});
