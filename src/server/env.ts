/**
 * Fail-fast environment validation (TASKS 1.2).
 * MVP dry-run mode: analysis runs against the local mock engine.
 * Missing or invalid configuration must throw at request time, never silently default.
 */
const ANALYSIS_MODES = ["mock"] as const;
export type AnalysisMode = (typeof ANALYSIS_MODES)[number];

export interface AppConfig {
  analysisMode: AnalysisMode;
  freeCheckEnabled: boolean;
  deepCheckEnabled: boolean;
}

let cachedConfig: AppConfig | null = null;

export function getConfig(): AppConfig {
  if (cachedConfig) return cachedConfig;
  const mode = process.env.ANALYSIS_PROVIDER_MODE ?? "mock";
  if (!ANALYSIS_MODES.includes(mode as AnalysisMode)) {
    throw new Error(
      "Invalid configuration: ANALYSIS_PROVIDER_MODE must be one of: " +
        ANALYSIS_MODES.join(", "),
    );
  }
  cachedConfig = {
    analysisMode: mode as AnalysisMode,
    freeCheckEnabled: process.env.FREE_CHECK_ENABLED !== "false",
    deepCheckEnabled: process.env.DEEP_CHECK_ENABLED !== "false",
  };
  return cachedConfig;
}
