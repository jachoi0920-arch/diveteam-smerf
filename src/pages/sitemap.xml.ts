// 공개 주소만 담는다. 글이 0편이면 글 모음은 빼 둔다(빈 페이지).
import site from "../site.json";
import { getCollection } from "astro:content";

export async function GET() {
  const hasBlog = site.pages.some((p) => p.id === "blog");
  const posts = hasBlog ? (await getCollection("blog")).filter((p) => !p.data.draft) : [];
  const abs = (p: string) => site.url + (p === "/" ? "/" : p);
  const urls = site.pages.filter((p) => p.id !== "blog" || posts.length > 0).map((p) => ({ loc: abs(p.slug) }));
  for (const code of Object.keys(site.locales)) urls.push({ loc: abs("/" + code) });
  for (const p of posts) urls.push({ loc: abs("/blog/" + p.id), lastmod: (p.data.updated || p.data.date).toISOString().slice(0, 10) });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u: any) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
