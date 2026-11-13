
const features = [
  {
    icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left leaf */}
              <path
                d="M23 27C13 26 6 19 7 9C17 8 25 14 26 22C26 24 25 26 23 27Z"
                fill="#348F42"
              />

              {/* Right leaf */}
              <path
                d="M24 27C24 16 31 7 42 6C44 17 36 26 24 27Z"
                fill="#348F42"
              />

              {/* Two leaf stems and central stalk */}
              <path
                d="M24 42C24 35 23 29 20 24"
                stroke="#287A39"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              <path
                d="M24 42C24 34 29 23 36 14"
                stroke="#287A39"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* Leaf veins */}
              <path
                d="M23 25L11 12M25 25L38 10"
                stroke="#A8D99A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
    ),
    title: <>Sustainable<br />Growth</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: <>Trusted<br />Services</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: <>Expert Team</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13v-2a9 9 0 0 1 18 0v2" />
        <path d="M3 13h3v7H5a2 2 0 0 1-2-2v-5Z" />
        <path d="M21 13h-3v7h1a2 2 0 0 0 2-2v-5Z" />
        <path d="M18 20a6 6 0 0 1-6 2" />
      </svg>
    ),
    title: <>24/7 Support</>,
  },
]

function Features() {
  return (
    <section className="relative z-20 mx-auto -mt-12 w-[92%] max-w-6xl">
      <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-2 px-1 py-5 text-center sm:py-6 ${
              index !== 3 ? 'border-r border-gray-100' : ''
            }`}
          >
            <div className="h-6 w-6 text-[#34834b] sm:h-8 sm:w-8">
              {feature.icon}
            </div>

            <h3 className="text-[9px] font-bold leading-tight text-[#183b2b] sm:text-xs md:text-sm">
              {feature.title}
            </h3>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Features
