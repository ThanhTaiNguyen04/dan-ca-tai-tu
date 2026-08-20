'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { repertoireGroups } from '@/data/repertoire'
import { RepertoireCard } from '@/components/RepertoireCard'

const ALL = 'all'

export default function RepertoirePage() {
  const [selected, setSelected] = useState<string>(ALL)

  const filters = useMemo(
    () => [{ id: ALL, label: 'Tất cả' }, ...repertoireGroups.map((g) => ({ id: g.id, label: g.shortName }))],
    [],
  )

  const groupsToShow = selected === ALL ? repertoireGroups : repertoireGroups.filter((g) => g.id === selected)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <header className="mb-8">
        <p className="font-serif text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Tra cứu
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
          Kho Bài Bản & Làn Điệu
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          20 bài bản Tổ của Đờn ca tài tử Nam Bộ.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside>
          <nav aria-label="Lọc nhóm bài bản" className="lg:sticky lg:top-24">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {filters.map((f) => {
                const active = f.id === selected
                return (
                  <li key={f.id} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      onClick={() => setSelected(f.id)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'w-full whitespace-nowrap rounded-lg border px-4 py-3 text-left text-base font-medium transition-colors lg:whitespace-normal',
                        active
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-card-foreground hover:border-accent hover:bg-secondary',
                      )}
                    >
                      {f.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        <section className="flex flex-col gap-12">
          {groupsToShow.map((group) => {
            const aiHref = `/ai-guide?q=${encodeURIComponent(
              `Nhóm ${group.name} trong Đờn ca tài tử có đặc điểm gì?`,
            )}`
            return (
              <div key={group.id} className="animate-fade-up">
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                        {group.subtitle}
                      </p>
                      <h2 className="mt-1 font-serif text-3xl font-bold text-card-foreground">
                        {group.name}
                      </h2>
                    </div>
                    <Link
                      href={aiHref}
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      Hỏi AI về nhóm này
                    </Link>
                  </div>

                  <p className="mt-4 leading-relaxed text-muted-foreground">{group.intro}</p>
                  <div className="mt-3 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    Sắc thái: {group.mood}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.pieces.map((piece) => (
                    <RepertoireCard key={piece.name} piece={piece} />
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
