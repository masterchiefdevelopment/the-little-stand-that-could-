import { useState } from 'react'
import { flavors, addOns } from '../data/menu'
import { images } from '../data/siteImages'

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

function ArrowButton({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-2xl font-black text-white shadow-md transition hover:opacity-90"
      style={{ backgroundColor: '#E84C89' }}
    >
      {dir === 'prev' ? '‹' : '›'}
    </button>
  )
}

function SlotRow({ label, name, price, onPrev, onNext }) {
  return (
    <div className="rounded-3xl bg-white/80 p-4 shadow-md backdrop-blur-sm">
      <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest" style={{ color: '#E84C89' }}>
        {label}
      </p>
      <div className="flex items-center justify-between gap-2">
        <ArrowButton dir="prev" onClick={onPrev} />
        <div className="flex flex-1 flex-col items-center">
          <p className="font-serif text-lg font-black" style={{ color: '#081A33' }}>
            {name}
          </p>
          <p className="text-sm font-bold" style={{ color: '#E84C89' }}>
            {price > 0 ? `+$${price.toFixed(2)}` : 'Included'}
          </p>
        </div>
        <ArrowButton dir="next" onClick={onNext} />
      </div>
    </div>
  )
}

export default function DrinkBuilder() {
  const [addOnIndex, setAddOnIndex] = useState(0)
  const [drinkIndex, setDrinkIndex] = useState(0)

  const addOn = addOnOptions[addOnIndex]
  const drink = flavors[drinkIndex]
  const total = (drink.price + addOn.price).toFixed(2)

  const cycle = (i, len, dir) => (i + dir + len) % len

  return (
    <div className="mx-auto w-full max-w-md px-4">
      <SlotRow
        label="1. Pick your add-on"
        name={addOn.name}
        price={addOn.price}
        onPrev={() => setAddOnIndex((i) => cycle(i, addOnOptions.length, -1))}
        onNext={() => setAddOnIndex((i) => cycle(i, addOnOptions.length, 1))}
      />

      <div className="mt-4 rounded-3xl bg-white/80 p-4 shadow-md backdrop-blur-sm">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest" style={{ color: '#E84C89' }}>
          2. Pick your drink
        </p>
        <div className="flex items-center justify-between gap-2">
          <ArrowButton dir="prev" onClick={() => setDrinkIndex((i) => cycle(i, flavors.length, -1))} />
          <div className="flex flex-1 flex-col items-center">
            <img
              src={images.drinks[camel(drink.id)]}
              alt={drink.name}
              className="h-28 w-28 rounded-2xl object-cover"
            />
            <p className="mt-2 text-center font-serif text-lg font-black" style={{ color: '#081A33' }}>
              {drink.name}
            </p>
            <p className="text-sm font-bold" style={{ color: '#E84C89' }}>
              ${drink.price.toFixed(2)}
            </p>
          </div>
          <ArrowButton dir="next" onClick={() => setDrinkIndex((i) => cycle(i, flavors.length, 1))} />
        </div>
      </div>

      <div className="mt-4 rounded-3xl bg-white/60 p-5 text-center backdrop-blur-sm">
        <p className="text-sm leading-relaxed" style={{ color: '#444' }}>
          {drinkInfo[drink.id]}
        </p>
      </div>

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
      </div>
    </div>
  )
}