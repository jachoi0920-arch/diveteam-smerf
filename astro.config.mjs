// geo-site 가 만든 설정 · 주소(site)를 바꾸면 대표 주소 · 사이트맵이 같이 바뀐다
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://diveteam-smerf.vercel.app",
  trailingSlash: "never",
  build: { format: "file" },
  devToolbar: { enabled: false },
});
