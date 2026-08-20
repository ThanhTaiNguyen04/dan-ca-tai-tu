'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Send, Sparkles, AlertCircle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DEMO_ANSWERS } from '@/data/knowledge'
import ReactMarkdown from 'react-markdown'

interface Message {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: string
  /** Đánh dấu câu trả lời là fallback demo cục bộ (không phải phản hồi API). */
  isDemo?: boolean
}

const SUGGESTED = [
  'Đờn ca tài tử là gì?',
  '20 bài bản Tổ được chia thành những nhóm nào?',
  'Đàn kìm có vai trò gì?',
  'Đờn ca tài tử khác cải lương như thế nào?',
  'Người trẻ có thể làm gì để bảo tồn Đờn ca tài tử?',
  'Guitar phím lõm có gì đặc biệt?',
]

function now() {
  return new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

function findDemoAnswer(question: string): string | null {
  const q = question.trim().toLowerCase()
  const match = DEMO_ANSWERS.find(
    (d) => d.question.toLowerCase() === q || q.includes(d.question.toLowerCase().replace('?', '')),
  )
  return match ? match.answer : null
}

export function AIChat({ initialQuestion }: { initialQuestion?: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sentInitial = useRef(false)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (initialQuestion && !sentInitial.current) {
      sentInitial.current = true
      void send(initialQuestion)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion])

  async function send(text: string) {
    const question = text.trim()
    if (!question || loading) return

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: question,
      timestamp: now(),
    }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)
    setBanner(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      })
      const data = await res.json()

      if (res.ok && data.reply) {
        setMessages((m) => [
          ...m,
          { id: crypto.randomUUID(), role: 'ai', content: data.reply, timestamp: now() },
        ])
      } else {
        // API không khả dụng → thử fallback DEMO cục bộ.
        const demo = findDemoAnswer(question)
        if (demo) {
          setBanner(
            'Nghệ nhân AI hiện chưa kết nối được API. Đang hiển thị câu trả lời mẫu (fallback demo cục bộ), không phải phản hồi thật từ Gemini.',
          )
          setMessages((m) => [
            ...m,
            {
              id: crypto.randomUUID(),
              role: 'ai',
              content: demo,
              timestamp: now(),
              isDemo: true,
            },
          ])
        } else {
          setBanner(
            data.message ??
              'Không thể kết nối tới Nghệ nhân AI lúc này. Vui lòng thử lại sau.',
          )
        }
      }
    } catch {
      const demo = findDemoAnswer(question)
      if (demo) {
        setBanner(
          'Lỗi mạng khi kết nối API. Đang hiển thị câu trả lời mẫu (fallback demo cục bộ), không phải phản hồi thật từ Gemini.',
        )
        setMessages((m) => [
          ...m,
          { id: crypto.randomUUID(), role: 'ai', content: demo, timestamp: now(), isDemo: true },
        ])
      } else {
        setBanner('Đã xảy ra lỗi mạng. Vui lòng thử lại sau.')
      }
    } finally {
      setLoading(false)
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    void send(input)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      e.preventDefault()
      void send(input)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* LEFT PANEL */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-border bg-card p-6 text-center">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-accent">
            <Image
              src="/images/artists/ai-nghe-nhan.png"
              alt="Ảnh đại diện Nghệ nhân AI"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <h2 className="mt-4 font-serif text-2xl font-bold">Nghệ nhân AI</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tôi là trợ lý AI được xây dựng để hỗ trợ tra cứu và tìm hiểu kiến thức về
            Đờn ca tài tử Nam Bộ.
          </p>
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-secondary/70 p-3 text-left text-xs text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              "Nghệ nhân AI" là nhân vật trợ lý ảo, không phải nghệ nhân có thật. Nội
              dung chỉ mang tính hỗ trợ học tập.
            </span>
          </div>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <section className="flex min-h-[70vh] flex-col rounded-2xl border border-border bg-card">
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6"
          style={{ maxHeight: '60vh' }}
        >
          {messages.length === 0 && !loading && (
            <div className="flex h-full flex-col items-center justify-center gap-6 py-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Sparkles className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-2xl font-bold">Bắt đầu trò chuyện</p>
                <p className="mt-2 text-muted-foreground">
                  Chọn một câu hỏi gợi ý bên dưới hoặc nhập câu hỏi của bạn.
                </p>
              </div>
              <div className="flex max-w-xl flex-wrap justify-center gap-2">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-secondary"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}
            >
              <div
                className={cn(
                  'max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 leading-relaxed',
                  msg.role === 'user'
                    ? 'rounded-br-sm bg-primary text-primary-foreground'
                    : 'rounded-bl-sm bg-secondary text-secondary-foreground',
                )}
              >
                {msg.role === 'ai' ? (
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                      li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                      strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
              <span className="mt-1 flex items-center gap-2 px-1 text-xs text-muted-foreground">
                {msg.role === 'ai' ? 'Nghệ nhân AI' : 'Bạn'} · {msg.timestamp}
                {msg.isDemo && (
                  <span className="rounded bg-accent/20 px-1.5 py-0.5 font-medium text-accent-foreground">
                    Câu trả lời mẫu
                  </span>
                )}
              </span>
            </div>
          ))}

          {loading && (
            <div className="flex items-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-secondary px-4 py-4">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
              </div>
            </div>
          )}
        </div>

        {banner && (
          <div className="mx-4 mb-2 flex items-start gap-2 rounded-lg border border-accent/40 bg-accent/10 p-3 text-sm text-foreground md:mx-6">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{banner}</span>
          </div>
        )}

        {/* Quick suggestions when a conversation exists */}
        {messages.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-border px-4 pt-3 md:px-6">
            {SUGGESTED.slice(0, 4).map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                disabled={loading}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:bg-secondary disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={onSubmit} className="flex items-end gap-2 p-4 md:p-6">
          <label htmlFor="chat-input" className="sr-only">
            Nhập câu hỏi cho Nghệ nhân AI
          </label>
          <textarea
            id="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Nhập câu hỏi của bạn về Đờn ca tài tử..."
            className="max-h-32 min-h-[48px] flex-1 resize-none rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
            aria-label="Gửi câu hỏi"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
      </section>
    </div>
  )
}
