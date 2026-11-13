
import { useEffect, useState } from 'react'

import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'

const slides = [
  {
    image: hero1,
    eyebrow: 'BUILDING A GREENER TOMORROW',
    title: 'Innovate. Grow.',
    highlight: 'Succeed.',
    paragraph:
      'Smart solutions for a brighter and more successful future. Together, we can create a greener and more sustainable world.',
    button: 'Explore More',
    link: '#about',
  },
  {
    image: hero2,
    eyebrow: 'PROTECTING OUR PLANET',
    title: 'Protect. Restore.',
    highlight: 'Thrive.',
    paragraph:
      'Healthy forests create a healthier planet. Protecting nature today means preserving life for generations to come.',
    button: 'Our Mission',
    link: '#about',
  },
  {
    image: hero3,
    eyebrow: 'A SUSTAINABLE FUTURE',
    title: 'Act Today.',
    highlight: 'Sustain Tomorrow.',
    paragraph:
      'Discover smarter ways to live sustainably and build a future powered by responsible choices.',
    button: 'Get Involved',
    link: '#contact',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [typedText, setTypedText] = useState('')
  const[isTyping, setIsTyping] = useState(true)

  // Change slides automatically every 8 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 8000)

    return () => clearInterval(slider)
  }, [])

  // Type the paragraph whenever the slide changes
  useEffect(() => {
    setTypedText('')
    setIsTyping(true)

    const text = slides[activeSlide].paragraph
    let index = 0

    const typing = setInterval(() => {
      index++
      setTypedText(text.slice(0, index))

      if (index >= text.length) {
        clearInterval(typing)
        setIsTyping(false)
      }
    }, 30)

    return () => clearInterval(typing)
  }, [activeSlide])

  return (
    <section
      id="home"
      className="relative min-h-[520px] overflow-hidden bg-[#092d20] md:min-h-[600px]"
    >
      {/* Background image slider */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt="Fresh green nature and sustainable environment"
          className={`absolute inset-0 h-full w-full object-cover object-[80%_center] sm:object-center transition-opacity duration-1000 ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center px-6 py-16 md:min-h-[600px] md:px-12">
        <div className="max-w-2xl">

          <p className="mb-5 text-sm font-bold tracking-[0.2em] text-lime-400">
            {slides[activeSlide].eyebrow}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {slides[activeSlide].title}
            <br />
            <span className="text-lime-400">
              {slides[activeSlide].highlight}
            </span>
          </h1>

          <p className="mt-6 min-h-[90px] max-w-xl text-base leading-8 text-white/90 md:text-lg">
            {typedText}
            {isTyping && (
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-lime-400" />
            )}

          </p>

          <a
            href={slides[activeSlide].link}
            className="mt-5 inline-flex items-center gap-1 rounded-full bg-lime-400 px-8 py-4 font-semibold text-[#092d20] transition hover:bg-lime-300"
          >
            {slides[activeSlide].button}
            <span>→</span>
          </a>

        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'w-9 bg-lime-400'
                : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
