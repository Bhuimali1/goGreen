import { useEffect, useRef, useState } from 'react'
import aboutImage from '../assets/about1.jpg'

function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [counts, setCounts] = useState({ clients: 0, projects: 0, success: 0 })

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    let timer: number

    const startCounting = () => {
      let step = 0
      const totalSteps = 40

      clearInterval(timer)
      timer = window.setInterval(() => {
        step++
        const progress = step / totalSteps

        setCounts({
          clients: Math.round(10 * progress),
          projects: Math.round(500 * progress),
          success: Math.round(98 * progress),
        })

        if (step >= totalSteps) {
          clearInterval(timer)
        }
      }, 30)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting()
        } else {
          clearInterval(timer)
          setCounts({ clients: 0, projects: 0, success: 0 })
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearInterval(timer)
    }
  }, [])

  return (
    <section
      id="about"
      className="bg-[#f5f8f2] px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* About Us Content */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* Left Text */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#348F42]">
              ABOUT US
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#092d20] md:text-5xl">
              Your Partner
              <br />
              in Progress
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
              We're committed to helping you achieve your goals with
              innovative solutions and dedicated support. Together,
              we can create a greener, smarter and more sustainable
              future.
            </p>

            <a
              href="#services"
              className="mt-7 inline-flex items-center gap-1 rounded-full bg-[#348F42] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#267535] hover:shadow-lg"
            >
              Learn More
              <span className="inline-block translate-y-[1.5px]">→</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -right-3 -top-3 h-full w-full rounded-[28px] bg-lime-200/60 md:-right-5 md:-top-5" />

            <img
              src={aboutImage}
              alt="Modern sustainable office building surrounded by greenery"
              className="relative z-10 aspect-square w-full rounded-[24px] object-cover shadow-lg transition-transform duration-500 hover:scale-105"
            />

          </div>
        </div>

        {/* Statistics */}
        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-3 rounded-2xl bg-[#e8f5df] px-2 py-7 text-center md:mt-16 md:px-8 md:py-9"
        >

          <div>
            <h3 className="text-2xl font-extrabold text-[#267535] md:text-4xl">
              {counts.clients}K+
            </h3>
            <p className="mt-2 text-xs font-medium text-gray-700 md:text-base">
              Happy Clients
            </p>
          </div>

          <div className="border-x border-[#c9dfbd]">
            <h3 className="text-2xl font-extrabold text-[#267535] md:text-4xl">
              {counts.projects}+
            </h3>
            <p className="mt-2 text-xs font-medium text-gray-700 md:text-base">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-[#267535] md:text-4xl">
              {counts.success}%
            </h3>
            <p className="mt-2 text-xs font-medium text-gray-700 md:text-base">
              Success Rate
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About