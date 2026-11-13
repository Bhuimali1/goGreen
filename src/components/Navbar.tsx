
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full bg-[#092d20] px-5 py-3 text-white shadow-lg md:px-8">

      <div className="flex items-center justify-between">

        {/* Brand logo */}
        <a href="#home" className="flex items-center gap-2">
          <svg
            viewBox="0 0 40 40"
            className="h-9 w-9 text-lime-400"
            fill="none"
          >
            <path
              d="M34 5C17 5 6 12 6 24c0 6 4 10 10 10C29 34 34 19 34 5Z"
              fill="currentColor"
            />
            <path
              d="M8 34C14 25 21 18 30 11"
              stroke="#092d20"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-xl font-bold tracking-tight">
            GoGreen
          </span>
        </a>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition-colors duration-200 hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Get Started button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-[#092d20] transition-all duration-200 hover:bg-lime-300 hover:shadow-lg lg:inline-block"
        >
          Get Started
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-1 bg-[#092d20] px-5 pb-5 pt-3 shadow-xl md:hidden">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-full bg-lime-400 px-5 py-3 text-center text-sm font-semibold text-[#092d20] transition hover:bg-lime-300"
          >
            Get Started
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar
