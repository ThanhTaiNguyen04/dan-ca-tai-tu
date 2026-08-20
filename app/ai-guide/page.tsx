'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { AIChat } from '@/components/AIChat'

function AIGuideContent() {
  const params = useSearchParams()
  const initial = params.get('q') ?? undefined

  return <AIChat initialQuestion={initial} />
}

export default function AIGuidePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <header className="mb-8">
        <p className="font-serif text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Trí tuệ nhân tạo
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Hỏi Nghệ Nhân AI</h1>
        <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Trò chuyện và tìm hiểu về Đờn ca tài tử Nam Bộ.
        </p>
      </header>

      <Suspense fallback={<div className="text-muted-foreground">Đang tải…</div>}>
        <AIGuideContent />
      </Suspense>
    </div>
  )
}
