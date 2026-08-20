import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { Music2, Library, Sparkles, ArrowRight } from 'lucide-react'

const features = [
  {
    href: '/instruments',
    icon: Music2,
    title: 'Khám phá nhạc cụ',
    desc: 'Tìm hiểu các nhạc cụ tiêu biểu trong Đờn ca tài tử.',
  },
  {
    href: '/repertoire',
    icon: Library,
    title: 'Kho bài bản & làn điệu',
    desc: 'Tra cứu hệ thống 20 bài bản Tổ và các nhóm hơi, điệu.',
  },
  {
    href: '/ai-guide',
    icon: Sparkles,
    title: 'Hỏi Nghệ nhân AI',
    desc: 'Đặt câu hỏi và nhận giải đáp về Đờn ca tài tử bằng trí tuệ nhân tạo.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold md:text-4xl">
            Trải nghiệm di sản theo cách mới
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Ba lối vào chính giúp bạn tìm hiểu Đờn ca tài tử Nam Bộ một cách trực
            quan và tương tác.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <Link
                key={f.href}
                href={f.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-bold text-card-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-accent">
                  Tìm hiểu
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center md:px-6">
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Di sản văn hóa phi vật thể
          </p>
          <h2 className="max-w-3xl text-balance font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
            Nghệ thuật Đờn ca tài tử Nam Bộ đã được UNESCO ghi danh là Di sản văn
            hóa phi vật thể đại diện của nhân loại vào năm 2013.
          </h2>
          <Link
            href="/about"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Tìm hiểu về dự án
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
