# 다이브팀 스머프 사이트

geo-site 로 지은 사이트예요. Astro 로 만들어져 있어요.

| 하고 싶은 것 | 명령 |
|---|---|
| 내 컴퓨터에서 보기 | `npm run dev` → 화면에 나온 주소를 열어요 |
| 올리기 전 만들어 보기 | `npm run build` |
| 파비콘 · 공유 카드 다시 그리기 | `public/` 의 그림을 지우고 `npm run icons` |

- 문구는 `src/site.json` 에 모여 있어요. 바꾼 뒤 Claude Code 에서 「내 사이트 점검해 줘」로 다시 재요.
- 글은 `src/content/blog/` 에 `.md` 로 넣어요. 파일 이름이 주소가 돼요 (영문 소문자 · 하이픈).
- 로고 · 공유 카드가 따로 있으면 `public/` 에 같은 이름(favicon.svg · og.png)으로 넣어요.
