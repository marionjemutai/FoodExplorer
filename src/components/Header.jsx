import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#restaurants', label: 'Restaurants' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#partner', label: 'Partner with us' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-lg">
      <div className="page-container flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-3.5 md:py-4">
        <a href="#" className="group flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-brand-600 text-base shadow-md shadow-brand-500/25 transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9 sm:rounded-xl sm:text-lg">
            🍽️
          </span>
          <span className="truncate text-base font-bold tracking-tight text-ink sm:text-lg">
            Food<span className="text-brand-600">Dash</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex sm:gap-3">
          <button
            type="button"
            className="rounded-full px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-stone-100 md:px-4"
          >
            Sign in
          </button>
          <button
            type="button"
            className="rounded-full bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 md:px-4"
          >
            Order now
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-200 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-stone-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="page-container flex flex-col gap-1 py-3 sm:py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-11 rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-stone-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-stone-100 pt-3 sm:flex-row">
            <button
              type="button"
              className="min-h-11 flex-1 rounded-full text-sm font-medium sm:flex-none sm:px-6"
            >
              Sign in
            </button>
            <button
              type="button"
              className="min-h-11 flex-1 rounded-full bg-brand-600 text-sm font-semibold text-white sm:flex-none sm:px-6"
            >
              Order now
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
