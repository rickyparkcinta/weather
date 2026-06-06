import { describe, expect, it } from "vitest";
import { getDocBySlug, getDocGroups, getDocs, getSourceLinks, type DocBlock } from "@/lib/docs/content";

function formulaExpressions(blocks: DocBlock[]) {
  return blocks.flatMap((block) => (block.kind === "formula" ? [block.expression] : []));
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
});
