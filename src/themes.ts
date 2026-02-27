export type ThemeName = "midnight" | "forest" | "sunset" | "matrix";

export const themes: Record<ThemeName, string[]> = {
  midnight: ["#0f172a", "#1e293b", "#38bdf8", "#e2e8f0"],
  forest: ["#052e16", "#166534", "#84cc16", "#dcfce7"],
  sunset: ["#7c2d12", "#ea580c", "#fbbf24", "#ffedd5"],
  matrix: ["#020617", "#14532d", "#22c55e", "#dcfce7"]
};
