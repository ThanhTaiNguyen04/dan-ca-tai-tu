import Image from 'next/image'
import Link from 'next/link'
import { Volume2, Music, Sparkles, Waves, Hand } from 'lucide-react'
import type { Instrument } from '@/data/instruments'
import { cn } from '@/lib/utils'

function buildQuestion(name: string) {
  return `${name} có vai trò như thế nào trong Đờn ca tài tử?`
}

export function InstrumentCard({ instrument }: { instrument: Instrument }) {
  const aiHref = `/ai-guide?q=${encodeURIComponent(buildQuestion(instrument.name))}`

  return (
    <article className="animate-fade-up">
      <div className="flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            {instrument.name}
          </h1>
          {instrument.alias && (
            <p className="mt-2 text-lg text-muted-foreground">
              {instrument.alias}
            </p>
          )}
        </div>
        <Link
          href={aiHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          Hỏi AI về {instrument.name}
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {instrument.secondaryImage ? (
          <div className="flex w-full aspect-[16/9]">
            <div className="relative h-full w-1/2 bg-secondary border-r border-border">
              <Image
                src={instrument.image || '/placeholder.svg'}
                alt={`Hình ảnh ${instrument.name} 1`}
                fill
                className={cn('object-cover', instrument.imagePosition || 'object-center')}
                sizes="(max-width: 1024px) 50vw, 400px"
              />
            </div>
            <div className="relative h-full w-1/2 bg-secondary">
              <Image
                src={instrument.secondaryImage}
                alt={`Hình ảnh ${instrument.name} 2`}
                fill
                className={cn('object-cover', instrument.imagePosition || 'object-center')}
                sizes="(max-width: 1024px) 50vw, 400px"
              />
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full bg-secondary">
            <Image
              src={instrument.image || '/placeholder.svg'}
              alt={`Hình ảnh ${instrument.name}`}
              fill
              className={cn('object-cover', instrument.imagePosition || 'object-center')}
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailBlock icon={Music} title="Giới thiệu" text={instrument.intro} />
        <DetailBlock icon={Waves} title="Đặc điểm âm thanh" text={instrument.sound} />
        <DetailBlock icon={Sparkles} title="Vai trò trong Đờn ca tài tử" text={instrument.role} />
        <DetailBlock icon={Hand} title="Kỹ thuật biểu diễn tiêu biểu" text={instrument.technique} />
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-secondary/50 p-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Volume2 className="h-5 w-5" aria-hidden="true" />
          <span className="font-semibold">Audio minh họa</span>
        </div>
        {instrument.audio ? (
          <audio controls className="mt-4 w-full" src={instrument.audio}>
            Trình duyệt của bạn không hỗ trợ phát audio.
          </audio>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            (Chưa có file audio. Thêm đường dẫn audio vào{' '}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              data/instruments.ts
            </code>{' '}
            để hiển thị trình phát.)
          </p>
        )}
      </div>

      {instrument.gallery.length > 0 && (
        <div className="mt-8">
          <h2 className="font-serif text-2xl font-bold">Thư viện hình ảnh</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {instrument.gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary"
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`${instrument.name} - ảnh ${i + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

function DetailBlock({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Music
  title: string
  text: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
        <h2 className="font-serif text-xl font-bold">{title}</h2>
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}
