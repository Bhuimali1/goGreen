function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const resourceLinks = [
    { name: 'Blog', href: '#resources' },
    { name: 'FAQs', href: '#resources' },
    { name: 'Support', href: '#contact' },
  ]

  return (
    <footer id="contact" className="bg-[#092d20] text-white">

      {/* Top CTA Banner */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -bottom-10 right-10 h-36 w-36 rounded-full bg-lime-400/10 blur-2xl" />

        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-3 px-4 py-6 sm:px-5 md:px-10 md:py-8">
          <div>
            <h2 className="text-base font-extrabold tracking-tight text-white sm:text-xl md:text-2xl">
              Let's Grow Together
            </h2>
            <p className="mt-1 text-[11px] text-gray-300 sm:text-xs md:text-sm">
              Get in touch and start your journey.
            </p>
          </div>

          <a
            href="mailto:hello@gogreen.com"
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-[#092d20] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-lg sm:px-6 sm:py-2.5 md:text-sm"
          >
            <span>Contact Us</span>
            <span className="inline-block translate-y-[1px]">→</span>
          </a>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-5 md:px-10 md:py-9">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:grid-cols-4">

          {/* Brand Column (full row on mobile, 1st column on desktop) */}
          <div className="col-span-3 mb-2 md:col-span-1 md:mb-0">
            <a href="#home" className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 40 40"
                className="h-7 w-7 text-lime-400 sm:h-8 sm:w-8"
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

              <span className="text-base font-bold tracking-tight sm:text-lg">
                GoGreen
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wide text-white md:text-sm">
              Quick Links
            </h3>
            <ul className="mt-2.5 space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-300 transition-colors duration-200 hover:text-lime-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold tracking-wide text-white md:text-sm">
              Resources
            </h3>
            <ul className="mt-2.5 space-y-1.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-300 transition-colors duration-200 hover:text-lime-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
         {/* Follow Us */}
          <div>
            <h3 className="text-xs font-bold tracking-wide text-white md:text-sm">
              Follow Us
            </h3>
            <div className="mt-3 grid w-fit grid-cols-2 gap-2 sm:flex sm:items-center">
              <a
                href="#contact"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#092d20] transition-all duration-200 hover:bg-lime-400 sm:h-8 sm:w-8"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                </svg>
              </a>

              <a
                href="#contact"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#092d20] transition-all duration-200 hover:bg-lime-400 sm:h-8 sm:w-8"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
                </svg>
              </a>

              <a
                href="#contact"
                aria-label="Twitter"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#092d20] transition-all duration-200 hover:bg-lime-400 sm:h-8 sm:w-8"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165Z" />
                </svg>
              </a>

              <a
                href="#contact"
                aria-label="YouTube"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#092d20] transition-all duration-200 hover:bg-lime-400 sm:h-8 sm:w-8"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 px-4 py-3.5 text-[10px] text-gray-400 sm:px-5 sm:text-[11px] md:px-10">
          <p>© 2026 GoGreen. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-5">
            <a href="#contact" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer