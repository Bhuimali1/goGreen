import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'

const services = [
  {
    image: service1,
    title: 'Consulting',
    description: 'Expert advice for greater impact.',
  },
  {
    image: service2,
    title: 'Technology',
    description: 'Build smarter with modern technology.',
  },
  {
    image: service3,
    title: 'Business Growth',
    description: 'Strategies for long-term success.',
  },
]

function Services() {
  return (
    <section
      id="services"
      className="bg-[#f5f8f2] px-5 pt-2 pb-16 md:px-10 md:pt-4 md:pb-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#348F42]">
            What We Offer
          </p>

          <h2 className="text-3xl font-extrabold text-[#092d20] md:text-5xl">
            Our Services
          </h2>

          <p className="mt-3 text-base text-gray-600 md:text-lg">
            Tailored solutions to meet your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden sm:h-52">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#092d20]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#348F42] transition-colors duration-300 hover:text-[#092d20]"
                >
                  Learn More
                  <span className="inline-block translate-y-[1px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services