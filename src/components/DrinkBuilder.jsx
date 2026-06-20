import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import { flavors, addOns } from '../data/menu'
import { images } from '../data/siteImages'
import { useCart } from '../CartContext'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const addOnOptions = [{ id: 'plain', name: 'Plain', price: 0 }, ...addOns]

const drinkInfo = {
  'og-original': 'Our classic fresh-squeezed lemonade. Where it all started.',
  'la-fresa': 'Strawberry lemonade made with real fruit.',
  'blue-dream': 'Sweet blue raspberry twist on the classic.',
  'berry-babe': 'A blend of mixed berries and lemonade.',
  'blackberry-baby': 'Fresh blackberry, tart and sweet.',
  'pickle-licious': 'For the bold — a tangy pickle lemonade.',
  'strawberry-cream': 'Strawberry lemonade with a creamy finish.',
  'pina-loca': 'Pineapple lemonade with a tropical kick.',
  'cucumber-cutie': 'Cool, crisp cucumber and lemon.',
  'sandia-sweetie': 'Refreshing watermelon lemonade.',
  'limonada-preparada': 'The works — chamoy, tajin, and fruit. A fiesta in a cup.',
}

function camel(id) {
  const parts = id.split('-')
  return parts[0] + parts.slice(1).map((p) => p[0].toUpperCase() + p.slice(1)).join('')
}

function Coverflow({ items, onSelect, renderItem, perView = 2.6 }) {
  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor
      centeredSlides
      loop={items.length > 4}
      slidesPerView={perView}
      spaceBetween={0}
      coverflowEffect={{
        rotate: 0,
        stretch: -20,
        depth: 260,
        modifier: 2.5,
        scale: 0.8,
        slideShadows: false,
      }}
      onSlideChange={(s) => onSelect(s.realIndex)}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} style={{ width: '60%' }}>
          {({ isActive }) => (
            <div style={{ opacity: isActive ? 1 : 0.4, transition: 'opacity 0.3s' }}>
              {renderItem(item, isActive)}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

// makes a fixed-position flying clone of a DOM node at its current spot
function makeClone(node) {
  const r = node.getBoundingClientRect()
  const clone = node.cloneNode(true)
  clone.style.position = 'fixed'
  clone.style.left = r.left + 'px'
  clone.style.top = r.top + 'px'
  clone.style.width = r.width + 'px'
  clone.style.height = r.height + 'px'
  clone.style.margin = '0'
  clone.style.borderRadius = '1rem'
  clone.style.zIndex = '9999'
  clone.style.pointerEvents = 'none'
  clone.style.transition = 'all 0.5s cubic-bezier(0.45, 0, 0.55, 1)'
  document.body.appendChild(clone)
  return { clone, rect: r }
}

export default function DrinkBuilder() {
  const { addItem } = useCart()
  const [addOnIndex, setAddOnIndex] = useState(0)
  const [drinkIndex, setDrinkIndex] = useState(0)
  const drinkCardRef = useRef(null)
  const addOnCardRef = useRef(null)

  const addOn = addOnOptions[addOnIndex]
  const drink = flavors[drinkIndex]
  const total = (drink.price + addOn.price).toFixed(2)

  const handleAdd = () => {
    // 1. Always add to cart first — animation never affects function
    addItem({
      name: drink.name + (addOn.price > 0 ? ` + ${addOn.name}` : ''),
      price: parseFloat(total),
    })

    // 2. Visual flair (wrapped so any failure can't break the cart)
    try {
      const drinkNode = drinkCardRef.current
      const addOnNode = addOnCardRef.current
      const cartBtn = document.getElementById('cart-fly-target')
      if (!drinkNode || !cartBtn) return

      // meeting point = center between the two cards (or just drink if no add-on node)
      const dRect = drinkNode.getBoundingClientRect()
      const meetX = dRect.left + dRect.width / 2
      const meetY = dRect.top + dRect.height / 2

      const { clone: drinkClone } = makeClone(drinkNode)
      let addOnClone = null
      if (addOnNode) addOnClone = makeClone(addOnNode).clone

      void drinkClone.offsetWidth // force reflow

      // PHASE 1: both shrink toward the meeting point
      const shrinkTo = (clone, w) => {
        clone.style.left = meetX - w / 2 + 'px'
        clone.style.top = meetY - w / 2 + 'px'
        clone.style.width = w + 'px'
        clone.style.height = w + 'px'
      }
      shrinkTo(drinkClone, 70)
      if (addOnClone) shrinkTo(addOnClone, 70)

      // PHASE 2: merged, fly to cart
      setTimeout(() => {
        const end = cartBtn.getBoundingClientRect()
        const endX = end.left + end.width / 2
        const endY = end.top + end.height / 2
        const flyTo = (clone) => {
          if (!clone) return
          clone.style.transition = 'all 0.55s cubic-bezier(0.5, -0.2, 0.7, 1)'
          clone.style.left = endX - 15 + 'px'
          clone.style.top = endY - 15 + 'px'
          clone.style.width = '30px'
          clone.style.height = '30px'
          clone.style.opacity = '0.2'
        }
        flyTo(drinkClone)
        flyTo(addOnClone)

        // PHASE 3: land + pulse cart, clean up
        setTimeout(() => {
          drinkClone.remove()
          if (addOnClone) addOnClone.remove()
          cartBtn.style.transform = 'scale(1.25)'
          setTimeout(() => { cartBtn.style.transform = 'scale(1)' }, 180)
        }, 550)
      }, 500)
    } catch {
      // silent — item already added, no harm
    }
  }

  return (
    <div className="mx-auto w-full max-w-md px-2 py-4">
      {/* ===== ROW 1: ADD-ON COVERFLOW ===== */}
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest" style={{ color: '#E84C89' }}>
        1. Build your drink — pick an add-on
      </p>
      <Coverflow
        items={addOnOptions}
        onSelect={setAddOnIndex}
        perView={1.6}
        renderItem={(item, isActive) => (
          <div
            ref={isActive ? addOnCardRef : null}
            className="flex h-24 flex-col items-center justify-center rounded-3xl p-3 text-center shadow-md"
            style={{ backgroundColor: isActive ? '#FCD34D' : 'rgba(255,255,255,0.85)' }}
          >
            <p className="font-serif text-base font-black leading-tight" style={{ color: '#081A33' }}>
              {item.name}
            </p>
            <p className="mt-1 text-xs font-bold" style={{ color: '#E84C89' }}>
              {item.price > 0 ? `+$${item.price.toFixed(2)}` : 'Included'}
            </p>
          </div>
        )}
      />

      {/* ===== ROW 2: DRINK COVERFLOW ===== */}
      <p className="mb-3 mt-6 text-center text-xs font-bold uppercase tracking-widest" style={{ color: '#E84C89' }}>
        2. Pick your drink
      </p>
      <Coverflow
        items={flavors}
        onSelect={setDrinkIndex}
        renderItem={(item, isActive) => (
          <div
            ref={isActive ? drinkCardRef : null}
            className="flex flex-col items-center rounded-3xl p-3 text-center shadow-md"
            style={{ backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.75)' }}
          >
            <img
              src={images.drinks[camel(item.id)]}
              alt={item.name}
              className="h-28 w-28 rounded-2xl object-cover"
            />
            <p className="mt-2 font-serif text-base font-black leading-tight" style={{ color: '#081A33' }}>
              {item.name}
            </p>
            <p className="text-sm font-bold" style={{ color: '#E84C89' }}>
              ${item.price.toFixed(2)}
            </p>
          </div>
        )}
      />

      {/* ===== DESCRIPTION ===== */}
      <div className="mt-6 rounded-3xl bg-white/60 p-5 text-center backdrop-blur-sm">
        <p className="text-sm leading-relaxed" style={{ color: '#444' }}>
          {drinkInfo[drink.id]}
        </p>
      </div>

      {/* ===== YOUR BUILD ===== */}
      <div className="mt-4 rounded-3xl p-5 text-center" style={{ backgroundColor: '#081A33' }}>
        <p className="text-sm font-semibold" style={{ color: '#FCD34D' }}>
          Your build
        </p>
        <p className="mt-1 font-serif text-xl font-black text-white">
          {drink.name}{addOn.price > 0 ? ` + ${addOn.name}` : ''}
        </p>
        <p className="mt-1 text-lg font-bold" style={{ color: '#E84C89' }}>
          ${total}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 w-full py-3 text-sm font-black"
          style={{ backgroundColor: '#FCD34D', color: '#081A33', borderRadius: '9999px' }}
        >
          Add to Cart 🍋
        </button>
      </div>
    </div>
  )
}