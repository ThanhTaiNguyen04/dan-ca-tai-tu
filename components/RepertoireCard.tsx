'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Volume2, ChevronDown, Sparkles, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { RepertoirePiece } from '@/data/repertoire'

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/);
  return match ? match[1] : null;
}

export function RepertoireCard({ piece }: { piece: RepertoirePiece }) {
  const [open, setOpen] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const aiHref = `/ai-guide?q=${encodeURIComponent(
    `Bài "${piece.name}" trong Đờn ca tài tử có đặc điểm gì?`,
  )}`

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-bold text-card-foreground">{piece.name}</h3>
        {piece.youtubeUrl && (
          <button
            type="button"
            onClick={() => setShowPlayer(true)}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label={`Nghe nhạc ${piece.name}`}
            title="Nghe nhạc"
          >
            <Volume2 className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{piece.description}</p>

      <div className="mt-3 inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
        Sắc thái: {piece.mood}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
        >
          Chi tiết
          <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
        </button>
        <Link
          href={aiHref}
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-accent-foreground/80 transition-colors hover:text-accent"
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Hỏi AI
        </Link>
      </div>

      {open && (
        <div className="mt-3 rounded-lg bg-secondary/60 p-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Sắc thái:</span> {piece.mood}
          </p>
          <p className="mt-2">{piece.description}</p>
        </div>
      )}

      {mounted && showPlayer && piece.youtubeUrl && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" style={{ pointerEvents: 'auto' }}>
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-card shadow-xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="font-serif text-lg font-bold">Thưởng thức: {piece.name}</h3>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPlayer(false);
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(piece.youtubeUrl)}?autoplay=1`}
                title={`YouTube video player cho ${piece.name}`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm text-muted-foreground">
              Nguồn: YouTube – DiDi Kang
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
