import Link from 'next/link'
import { Music2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Music2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-bold">
                Bảo Tàng Số Đờn Ca Tài Tử Nam Bộ
              </span>
            </div>
            <p className="mt-4 text-pretty font-serif text-xl italic text-accent">
              "Bảo tồn di sản – Kết nối thế hệ – Lan tỏa giá trị văn hóa Việt"
            </p>
          </div>

          <nav aria-label="Liên kết chân trang">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/instruments" className="text-primary-foreground/80 hover:text-accent">
                  Nhạc cụ
                </Link>
              </li>
              <li>
                <Link href="/repertoire" className="text-primary-foreground/80 hover:text-accent">
                  Bài bản & Làn điệu
                </Link>
              </li>
              <li>
                <Link href="/ai-guide" className="text-primary-foreground/80 hover:text-accent">
                  Hỏi Nghệ nhân AI
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent">
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70">
          <p>Sản phẩm học thuật phục vụ thuyết trình.</p>
        </div>
      </div>
    </footer>
  )
}
