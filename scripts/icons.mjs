// 파비콘 · 공유 카드(og.png) 그리기. 한 번 그린 뒤엔 public/ 의 파일을 쓴다 (다시 그리려면 지우고 실행).
// 로고나 공유 카드 이미지가 따로 있으면 public/ 에 같은 이름으로 넣으면 된다.
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import site from "../src/site.json" with { type: "json" };

const pub = new URL("../public/", import.meta.url);
const at = (f) => fileURLToPath(new URL(f, pub)); // 한글 폴더에서도 깨지지 않게
const has = (f) => fs.existsSync(at(f));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const c = { main: "#2f4a6d", bg: "#fbfaf8", ink: "#1f1f24", ...(site.design.colors || {}) };
const FONT = "Pretendard, Apple SD Gothic Neo, Malgun Gothic, Noto Sans KR, sans-serif";
const letter = [...(site.name || "?")][0];

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="104" fill="${c.main}"/><text x="256" y="345" text-anchor="middle" font-family="${FONT}" font-size="290" font-weight="700" fill="#fff">${esc(letter)}</text></svg>`;
if (!has("favicon.svg")) fs.writeFileSync(at("favicon.svg"), icon);
const src = fs.readFileSync(at("favicon.svg"));
for (const [f, n] of [["icon-512.png", 512], ["apple-touch-icon.png", 180], ["icon-48.png", 48]]) {
  if (!has(f)) await sharp(src, { density: 300 }).resize(n, n).png().toFile(at(f));
}
// favicon.ico = 48px PNG 한 장을 담은 ICO
if (!has("favicon.ico")) {
  const png = fs.readFileSync(at("icon-48.png"));
  const h = Buffer.alloc(22);
  h.writeUInt16LE(0, 0); h.writeUInt16LE(1, 2); h.writeUInt16LE(1, 4);
  h.writeUInt8(48, 6); h.writeUInt8(48, 7); h.writeUInt16LE(1, 10); h.writeUInt16LE(32, 12);
  h.writeUInt32LE(png.length, 14); h.writeUInt32LE(22, 18);
  fs.writeFileSync(at("favicon.ico"), Buffer.concat([h, png]));
}
// 공유 카드 1200×630 · 이름 + 짧은 소개
if (!has("og.png")) {
  const wrap = (s, n) => { const w = String(s).split(" "); const out = [""]; for (const x of w) { if ((out.at(-1) + " " + x).trim().length > n) out.push(x); else out[out.length - 1] = (out.at(-1) + " " + x).trim(); } return out.slice(0, 2); };
  const lines = wrap(site.introShort || site.oneLine, 26);
  const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${c.bg}"/><rect x="0" y="0" width="16" height="630" fill="${c.main}"/><text x="96" y="${lines.length > 1 ? 260 : 290}" font-family="${FONT}" font-size="76" font-weight="700" fill="${c.ink}">${esc(site.name)}</text>${lines.map((l, i) => `<text x="96" y="${(lines.length > 1 ? 350 : 380) + i * 54}" font-family="${FONT}" font-size="38" fill="${c.ink}" fill-opacity=".7">${esc(l)}</text>`).join("")}</svg>`;
  await sharp(Buffer.from(og)).png().toFile(at("og.png"));
}
console.log("public/ 에 favicon.svg · favicon.ico · apple-touch-icon.png · icon-512.png · og.png");
