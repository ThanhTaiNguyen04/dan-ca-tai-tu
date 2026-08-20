# Bảo tàng Đờn ca tài tử — Digital Heritage Museum

An interactive digital museum dedicated to **Đờn ca tài tử Nam Bộ** — the UNESCO-recognized
traditional chamber music of Southern Vietnam. Explore the instruments, the repertoire
(bài bản & làn điệu), and ask a built-in AI master (**Nghệ nhân AI**) anything about this
living heritage.

## Features

- **Home** — an editorial introduction to the art form and its Mekong Delta origins.
- **Nhạc cụ (Instruments)** — an explorer for the core instruments of the ensemble
  (đàn tranh, đàn kìm, đàn cò, đàn bầu, sáo trúc, guitar phím lõm, song lang) with
  descriptions, roles, and history.
- **Bài bản & Làn điệu (Repertoire)** — the foundational pieces and modal systems,
  filterable by mood (điệu Bắc, điệu Nam, Oán, …).
- **Nghệ nhân AI (AI Guide)** — a chat guide powered by Google Gemini that answers
  questions about the music, instruments, and culture in a warm, knowledgeable voice.
- **Giới thiệu (About)** — the story and mission behind the museum.

## AI Guide setup

The AI Guide calls the Google Gemini API from a server route (`app/api/chat/route.ts`).

1. Get a free API key at [Google AI Studio](https://aistudio.google.com/apikey).
2. Add it to your environment:
   \`\`\`
   GEMINI_API_KEY=your_key_here
   \`\`\`

If no key is present, the AI Guide automatically falls back to a **built-in demo
knowledge base** so the experience still works offline — great for previews.

## Tech stack

- Next.js App Router + React
- Tailwind CSS design tokens (deep green / cream / bronze heritage palette)
- Google Gemini (`gemini-1.5-flash`) via a server route, with a graceful demo fallback

## Development

\`\`\`bash
pnpm install
pnpm dev
\`\`\`

Copy `.env.example` to `.env.local` and add your `GEMINI_API_KEY` to enable the live AI Guide.
