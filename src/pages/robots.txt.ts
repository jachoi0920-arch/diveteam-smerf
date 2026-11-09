// 검색엔진과 AI 봇을 막지 않는다. 사이트맵 주소를 알려 준다.
import site from "../site.json";
export const GET = () => new Response(`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
