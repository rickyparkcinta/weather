import { describe, expect, it } from "vitest";
import { getDocBySlug, getDocGroups, getDocs, getSourceLinks, type DocBlock } from "@/lib/docs/content";

function formulaExpressions(blocks: DocBlock[]) {
  return blocks.flatMap((block) => (block.kind === "formula" ? [block.expression] : []));
}

function blockSearchText(block: DocBlock) {
  if (block.kind === "lead" || block.kind === "paragraph") return block.text;
  if (block.kind === "list") return [block.title, ...block.items].filter(Boolean).join(" ");
  if (block.kind === "flow") return [block.title, ...block.steps].filter(Boolean).join(" ");
  if (block.kind === "table") return [block.title, ...block.columns, ...block.rows.flat()].filter(Boolean).join(" ");
  if (block.kind === "formula") return [block.title, block.description, block.expression].filter(Boolean).join(" ");
  if (block.kind === "callout") return [block.title, block.text].join(" ");
  if (block.kind === "code") return [block.title, block.code].filter(Boolean).join(" ");
  return [block.title, block.description].filter(Boolean).join(" ");
}

function pageSearchText(locale: "en" | "zh-HK", slug: string) {
  const page = getDocBySlug(locale, slug);
  expect(page).toBeTruthy();

  return page!.sections
    .flatMap((section) => [section.title, section.description ?? "", ...section.blocks.map(blockSearchText)])
    .join(" ");
}

describe("docs i18n", () => {
  it("keeps English and zh-HK doc slugs in parity", () => {
    const englishSlugs = getDocs("en").map((page) => page.slug);
    const zhHkSlugs = getDocs("zh-HK").map((page) => page.slug);

    expect(zhHkSlugs).toEqual(englishSlugs);

    for (const slug of englishSlugs) {
      expect(getDocBySlug("zh-HK", slug)?.slug).toBe(slug);
    }
  });

  it("provides localized titles, descriptions, groups, and source labels", () => {
    for (const page of getDocs("zh-HK")) {
      expect(page.title.trim()).toBeTruthy();
      expect(page.shortTitle.trim()).toBeTruthy();
      expect(page.description.trim()).toBeTruthy();
    }

    for (const group of getDocGroups("zh-HK")) {
      expect(group.title.trim()).toBeTruthy();
      expect(group.pages.length).toBeGreaterThan(0);
      for (const page of group.pages) {
        expect(page.shortTitle.trim()).toBeTruthy();
        expect(page.title.trim()).toBeTruthy();
        expect(page.description.trim()).toBeTruthy();
      }
    }

    for (const source of Object.values(getSourceLinks("zh-HK"))) {
      expect(source.label.trim()).toBeTruthy();
      expect(source.publisher.trim()).toBeTruthy();
      expect(source.href).toMatch(/^https:\/\//);
    }
  });

  it("preserves formula expressions across locales", () => {
    for (const englishPage of getDocs("en")) {
      const zhHkPage = getDocBySlug("zh-HK", englishPage.slug);
      expect(zhHkPage).toBeTruthy();

      const englishExpressions = englishPage.sections.flatMap((section) => formulaExpressions(section.blocks));
      const zhHkExpressions = zhHkPage?.sections.flatMap((section) => formulaExpressions(section.blocks));

      expect(zhHkExpressions).toEqual(englishExpressions);
    }
  });

  it("keeps translated docs aligned by section and block kind", () => {
    for (const englishPage of getDocs("en")) {
      const zhHkPage = getDocBySlug("zh-HK", englishPage.slug);
      expect(zhHkPage?.sections).toHaveLength(englishPage.sections.length);

      englishPage.sections.forEach((section, sectionIndex) => {
        const zhHkSection = zhHkPage?.sections[sectionIndex];
        expect(zhHkSection?.blocks).toHaveLength(section.blocks.length);

        section.blocks.forEach((block, blockIndex) => {
          expect(zhHkSection?.blocks[blockIndex]?.kind).toBe(block.kind);
        });
      });
    }
  });

  it("documents the canonical ingestion and map-layer contract in both locales", () => {
    const english = pageSearchText("en", "weather-data-pipeline");
    const zhHk = pageSearchText("zh-HK", "weather-data-pipeline");

    expect(english).toContain("POST /api/ingest/run");
    expect(english).toContain("provider_run_logs");
    expect(english).toContain("GET /api/map-layers");
    expect(english).toContain("rawEdge");
    expect(english).toContain("adjustedEdge");

    expect(zhHk).toContain("POST /api/ingest/run");
    expect(zhHk).toContain("provider_run_logs");
    expect(zhHk).toContain("GET /api/map-layers");
    expect(zhHk).toContain("原始優勢");
    expect(zhHk).toContain("調整後優勢");
  });
});
