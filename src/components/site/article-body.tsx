import { Link } from "@tanstack/react-router";

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      if (href.startsWith("/articles/")) {
        const slug = href.replace("/articles/", "");
        return (
          <Link key={index} to="/articles/$slug" params={{ slug }} className="text-blue">
            {link[1]}
          </Link>
        );
      }
      return (
        <a key={index} href={href} className="text-blue" target="_blank" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function ArticleBody({ markdown }: { markdown: string }) {
  const blocks = markdown.trim().split(/\n\s*\n/);
  return (
    <div className="article-copy">
      {blocks.map((block, index) => {
        const text = block.trim();
        if (!text) return null;
        if (text.startsWith("### ")) return <h3 key={index}>{inline(text.slice(4))}</h3>;
        if (text.startsWith("## ")) return <h2 key={index}>{inline(text.slice(3))}</h2>;
        if (text.startsWith("> ")) return <blockquote key={index}>{inline(text.replace(/^> /gm, ""))}</blockquote>;
        const lines = text.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index}>
              {lines.map((line) => (
                <li key={line}>{inline(line.slice(2))}</li>
              ))}
            </ul>
          );
        }
        if (lines.every((line) => /^\d+\.\s/.test(line))) {
          return (
            <ol key={index}>
              {lines.map((line) => (
                <li key={line}>{inline(line.replace(/^\d+\.\s/, ""))}</li>
              ))}
            </ol>
          );
        }
        return <p key={index}>{inline(text.replace(/\n/g, " "))}</p>;
      })}
    </div>
  );
}
