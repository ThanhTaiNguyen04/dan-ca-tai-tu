'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Music2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Trang chủ' },
  { href: '/instruments', label: 'Nhạc cụ' },
  { href: '/repertoire', label: 'Bài bản & Làn điệu' },
  { href: '/ai-guide', label: 'Hỏi Nghệ nhân AI' },
  { href: '/about', label: 'Giới thiệu' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Music2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-semibold tracking-wide text-accent">
              BẢO TÀNG SỐ
            </span>
            <span className="font-serif text-base font-bold md:text-lg">
              ĐỜN CA TÀI TỬ NAM BỘ
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10',
                  active && 'bg-primary-foreground/15 text-accent',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-primary-foreground/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-primary-foreground/15 bg-primary lg:hidden"
          aria-label="Điều hướng di động"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-primary-foreground/10',
                    active && 'bg-primary-foreground/15 text-accent',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
