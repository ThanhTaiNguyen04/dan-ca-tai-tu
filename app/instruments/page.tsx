'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { instruments } from '@/data/instruments'
import { InstrumentCard } from '@/components/InstrumentCard'

export default function InstrumentsPage() {
  const [selectedId, setSelectedId] = useState(instruments[0].id)
  const selected = instruments.find((i) => i.id === selectedId) ?? instruments[0]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <header className="mb-8">
        <p className="font-serif text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Khám phá
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Nhạc cụ</h1>
        <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Các nhạc cụ tiêu biểu tạo nên âm sắc đặc trưng của Đờn ca tài tử Nam Bộ.
          Chọn một nhạc cụ để xem chi tiết.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside>
          <nav aria-label="Danh sách nhạc cụ" className="lg:sticky lg:top-24">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {instruments.map((instrument) => {
                const active = instrument.id === selectedId
                return (
                  <li key={instrument.id} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      onClick={() => setSelectedId(instrument.id)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'w-full whitespace-nowrap rounded-lg border px-4 py-3 text-left text-base font-medium transition-colors lg:whitespace-normal',
                        active
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-card-foreground hover:border-accent hover:bg-secondary',
                      )}
                    >
                      {instrument.name}
                      {instrument.alias && (
                        <span
                          className={cn(
                            'ml-2 hidden text-sm lg:inline',
                            active ? 'text-primary-foreground/70' : 'text-muted-foreground',
                          )}
                        >
                          · {instrument.alias}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        <section aria-live="polite">
          <InstrumentCard key={selected.id} instrument={selected} />
        </section>
      </div>
    </div>
  )
}
