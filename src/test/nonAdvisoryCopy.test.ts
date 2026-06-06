import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const bannedPhrases = [
  "buy signal",
  "good buy",
  "should buy",
  "sell signal",
  "guaranteed profit",
  "place a trade"
];

const scanRoots = ["src/app", "src/components"];
const excludedSegments = new Set(["docs"]);
const extensions = new Set([".ts", ".tsx"]);

function collectFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) {
      if (excludedSegments.has(entry)) return [];
      return collectFiles(path);
    }
    if (![...extensions].some((ext) => path.endsWith(ext))) return [];
    return [path];
  });
}

describe("non-advisory UI copy", () => {
  it("does not use banned trading-advice phrases in primary UI files", () => {
    const offenders = scanRoots.flatMap((root) =>
      collectFiles(root).flatMap((file) => {
        const text = readFileSync(file, "utf8").toLowerCase();
        return bannedPhrases
          .filter((phrase) => text.includes(phrase))
          .map((phrase) => `${relative(process.cwd(), file)}: ${phrase}`);
      })
    );

    expect(offenders).toEqual([]);
  });
});
