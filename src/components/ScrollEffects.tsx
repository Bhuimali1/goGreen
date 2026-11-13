import { useEffect } from 'react'

function ScrollEffects() {
  useEffect(() => {
    const sections = document.querySelectorAll('section, footer')

    sections.forEach((el, index) => {
      if (index === 0) return
      el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-6')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6')
            entry.target.classList.add('opacity-100', 'translate-y-0')
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-6')
            entry.target.classList.remove('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.12 }
    )

    sections.forEach((el, index) => {
      if (index !== 0) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

export default ScrollEffects