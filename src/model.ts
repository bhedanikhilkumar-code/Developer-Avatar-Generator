import { seededHash, pick } from "./random.js";
import { themes, ThemeName } from "./themes.js";

export interface AvatarOptions {
  seed: string;
  theme?: ThemeName;
  size?: number;
  initials?: string;
}

export interface AvatarModel {
  seed: string;
  size: number;
  theme: ThemeName;
  bg: string;
  accent: string;
  text: string;
  ring: string;
  initials: string;
}

export function createAvatarModel(options: AvatarOptions): AvatarModel {
  const seed = options.seed.trim();
  if (!seed) throw new Error("Seed is required");

  const size = options.size ?? 256;
  const hash = seededHash(seed);
  const theme = options.theme ?? pick(hash, Object.keys(themes) as ThemeName[]);
  const palette = themes[theme];
  const initials = (options.initials || seed)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((x) => x[0]!.toUpperCase())
    .join("");

  return {
    seed,
    size,
    theme,
    bg: palette[0],
    accent: palette[1],
    ring: palette[2],
    text: palette[3],
    initials: initials || "DV"
  };
}
