import Image from 'next/image'
import Link from 'next/link'
import {
  Database,
  Users,
  Search,
  Sparkles,
  BookOpen,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react'

const goals = [
  { icon: Database, text: 'Số hóa kiến thức' },
  { icon: Users, text: 'Giúp thế hệ trẻ dễ tiếp cận' },
  { icon: Search, text: 'Hỗ trợ tra cứu' },
  { icon: BookOpen, text: 'Tăng trải nghiệm tương tác' },
  { icon: Sparkles, text: 'Ứng dụng AI trong giáo dục và bảo tồn văn hóa' },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
      <header className="mb-8">
        <p className="font-serif text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Giới thiệu
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Về dự án</h1>
      </header>

      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="relative aspect-[21/9] w-full bg-secondary">
          <Image
            src="/images/heritage/mekong-garden.png"
            alt="Không gian nhà vườn và sông nước miền Tây Nam Bộ"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>

      <p className="mt-8 text-pretty text-xl leading-relaxed text-foreground">
        Bảo tàng số Đờn ca tài tử Nam Bộ là sản phẩm thử nghiệm ứng dụng công nghệ số
        và trí tuệ nhân tạo nhằm hỗ trợ việc tìm hiểu, quảng bá và nâng cao nhận thức
        về di sản văn hóa.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-3xl font-bold">Mục tiêu</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {goals.map((g) => {
            const Icon = g.icon
            return (
              <li
                key={g.text}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-lg font-medium">{g.text}</span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-accent/40 bg-accent/10 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <ShieldAlert className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-bold">Lưu ý về nội dung AI</h2>
            <p className="mt-3 text-pretty leading-relaxed text-foreground">
              AI chỉ đóng vai trò hỗ trợ cung cấp thông tin. Các nội dung chuyên môn
              cần được kiểm chứng bởi nghệ nhân, nhà nghiên cứu và các nguồn chính
              thống.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/ai-guide"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          Trò chuyện với Nghệ nhân AI
        </Link>
        <Link
          href="/instruments"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          Khám phá nhạc cụ
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
