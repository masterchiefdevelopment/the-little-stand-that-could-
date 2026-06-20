import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const cards = [
  { icon: '🍋', title: 'Real Ingredients', copy: 'Fresh-squeezed fruit, real sugar, no syrups or shortcuts — ever.', to: null },
  { icon: '🏡', title: 'Family Owned', copy: 'Started as a kid’s lemonade stand, grown by faith and family hands.', to: null },
  { icon: '🤝', title: 'Community First', copy: 'Every cup helps fund the events we host for our neighbors.', to: '/community-impact' },
  { icon: '📅', title: 'Find Us Out There', copy: 'Catch us at local markets, festivals, and events around San Antonio.', to: '/upcoming-events' },
  { icon: '⭐', title: 'Loved Locally', copy: 'See what our San Antonio community is saying about us.', to: '/reviews' },
]

export default function WhyWheel() {
  return (
    <section className="w-full px-2 py-12 sm:py-16">
      <h2 className="text-center font-serif text-2xl font-black sm:text-4xl" style={{ color: '#081A33' }}>
        Why Choose Us?
      </h2>
      <p className="mt-2 mb-8 text-center text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#E84C89' }}>
        Swipe to explore
      </p>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.4}
        spaceBetween={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 340,
          modifier: 2.5,
          scale: 0.78,
          slideShadows: false,
        }}
        className="max-w-3xl"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} style={{ width: '75%' }}>
            {({ isActive }) => {
              const inner = (
                <div
                  className="flex h-56 flex-col items-center justify-center rounded-3xl p-6 text-center shadow-md backdrop-blur-sm transition"
                  style={{
                    backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <div className="text-5xl">{card.icon}</div>
                  <h3 className="mt-4 font-serif text-xl font-black" style={{ color: '#081A33' }}>
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: '#555' }}>
                    {card.copy}
                  </p>
                  {card.to && (
                    <span className="mt-3 text-xs font-bold uppercase tracking-wide" style={{ color: '#E84C89' }}>
                      Learn more →
                    </span>
                  )}
                </div>
              )
              return card.to ? <Link to={card.to}>{inner}</Link> : inner
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}