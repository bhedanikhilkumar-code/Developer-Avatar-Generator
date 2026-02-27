#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { createAvatarModel } from "./model.js";
import { renderAvatarSvg } from "./svg.js";

const args = Object.fromEntries(
  process.argv.slice(2).map((part) => {
    const [key, ...rest] = part.replace(/^--/, "").split("=");
    return [key, rest.join("=") || "true"];
  })
);

const seed = String(args.seed || "Developer Avatar");
const out = String(args.out || "avatar.svg");
const size = Number(args.size || 256);

const model = createAvatarModel({
  seed,
  size,
  theme: args.theme as any,
  initials: args.initials as string | undefined
});

const svg = renderAvatarSvg(model);
writeFileSync(out, svg, "utf-8");
console.log(`✅ Avatar generated: ${out}`);
