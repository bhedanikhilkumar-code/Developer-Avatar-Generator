import { AvatarModel } from "./model.js";

export function renderAvatarSvg(model: AvatarModel): string {
  const s = model.size;
  const c = s / 2;
  const r = s * 0.42;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${s}" height="${s}" rx="${Math.round(s * 0.18)}" fill="${model.bg}" />
  <circle cx="${c}" cy="${c}" r="${r}" fill="${model.accent}" />
  <circle cx="${c}" cy="${c}" r="${Math.round(r * 0.88)}" stroke="${model.ring}" stroke-width="${Math.round(s * 0.04)}" fill="transparent" />
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="${Math.round(s * 0.28)}" font-weight="700" fill="${model.text}">${model.initials}</text>
</svg>`;
}
