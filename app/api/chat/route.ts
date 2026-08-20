import { NextResponse } from 'next/server'
import { SYSTEM_INSTRUCTION, KNOWLEDGE_BASE } from '@/data/knowledge'

export const runtime = 'nodejs'

// Model Gemini sử dụng. Có thể chỉnh nếu cần.
const GEMINI_MODEL = 'gemini-3.6-flash'

interface ChatRequestBody {
  message?: string
  history?: { role: 'user' | 'ai'; content: string }[]
}

export async function POST(req: Request) {
  let body: ChatRequestBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Yêu cầu không hợp lệ.' }, { status: 400 })
  }

  const message = (body.message ?? '').trim()
  if (!message) {
    return NextResponse.json({ error: 'Vui lòng nhập câu hỏi.' }, { status: 400 })
  }

  const apiKey = process.env.GEMINI_API_KEY

  // Nếu chưa cấu hình API key: báo cho client biết để bật DEMO MODE.
  if (!apiKey) {
    return NextResponse.json(
      {
        error: 'missing_api_key',
        message:
          'Chưa cấu hình GEMINI_API_KEY trên máy chủ. Vui lòng thêm khóa API để sử dụng Nghệ nhân AI.',
      },
      { status: 503 },
    )
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`

  const history = body.history ?? []
  const contents = history.map((msg) => ({
    role: msg.role === 'ai' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }))

  contents.push({
    role: 'user',
    parts: [{ text: message }],
  })

  const payload = {
    systemInstruction: {
      parts: [
        {
          text: `${SYSTEM_INSTRUCTION}\n\n=== KNOWLEDGE BASE ===\n${KNOWLEDGE_BASE}`,
        },
      ],
    },
    contents,
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.log('[v0] Gemini API error:', res.status, detail)
      return NextResponse.json(
        {
          error: 'gemini_error',
          message: 'Không thể kết nối tới Nghệ nhân AI lúc này.',
        },
        { status: 502 },
      )
    }

    const data = await res.json()
    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: { text?: string }) => p.text ?? '')
        .join('')
        .trim() ?? ''

    if (!reply) {
      return NextResponse.json(
        {
          error: 'empty_reply',
          message: 'Dữ liệu hiện tại của Bảo tàng số chưa đủ để trả lời chính xác câu hỏi này.',
        },
        { status: 200 },
      )
    }

    return NextResponse.json({ reply })
  } catch (err) {
    console.log('[v0] Gemini fetch failed:', (err as Error).message)
    return NextResponse.json(
      {
        error: 'network_error',
        message: 'Đã xảy ra lỗi mạng khi kết nối tới Nghệ nhân AI.',
      },
      { status: 502 },
    )
  }
}
