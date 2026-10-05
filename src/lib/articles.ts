export type Article = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  body: string;
  related: string[];
};

const files = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function field(block: string, key: string) {
  const match = block.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));
  if (!match) return "";
  return match[1].trim().replace(/^"(.*)"$/, "$1");
}

function parse(raw: string): Article {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = match?.[1] ?? "";
  const markdown = (match?.[2] ?? raw).trim();
  const slug = field(meta, "slug");
  const lines = markdown.split("\n");
  const title = (lines.find((line) => line.startsWith("# ")) ?? "").replace(/^# /, "").trim();
  const withoutTitle = lines.filter((line) => !line.startsWith("# ")).join("\n").trim();
  const relatedBlock = withoutTitle.split(/^## Suggested internal links\s*$/m)[1] ?? "";
  const body = withoutTitle.split(/^## Suggested internal links\s*$/m)[0].trim();
  const related = [...relatedBlock.matchAll(/\/articles\/([a-z0-9-]+)/g)].map((item) => item[1]);
  const lede = body
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith("#") && !part.startsWith(">")) ?? "";
  return {
    slug,
    seoTitle: field(meta, "title_tag"),
    seoDescription: field(meta, "meta_description"),
    title,
    lede,
    image: `/media/articles/${slug}.png`,
    imageAlt: field(meta, "hero_alt"),
    body,
    related,
  };
}

export const articles: Article[] = Object.values(files)
  .map(parse)
  .sort((a, b) => a.title.localeCompare(b.title));
