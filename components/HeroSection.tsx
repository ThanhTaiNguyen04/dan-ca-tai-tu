import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/heritage/hero-ensemble.png"
          alt="Nhóm nghệ nhân biểu diễn Đờn ca tài tử trong không gian nhà vườn Nam Bộ"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 md:px-6 md:py-28 lg:py-36">
        <div className="max-w-2xl animate-fade-up">
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Di sản âm nhạc
          </p>
          <h1 className="mt-4 text-balance font-serif text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Đờn Ca Tài Tử
            <br />
            <span className="text-accent">Nam Bộ</span>
          </h1>
          <p className="mt-6 font-serif text-2xl italic text-primary-foreground/90">
            Khám phá – Trải nghiệm – Bảo tồn
          </p>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Không gian số giúp người dùng tìm hiểu nhạc cụ, bài bản và giá trị của
            Nghệ thuật Đờn ca tài tử Nam Bộ thông qua nội dung tương tác và trợ lý
            trí tuệ nhân tạo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/instruments"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Bắt đầu khám phá
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/ai-guide"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Hỏi Nghệ nhân AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
