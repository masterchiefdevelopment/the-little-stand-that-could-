import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { flavors, addOns } from '../data/menu'
import { supabase } from '../lib/supabase'

const TAX_RATE = 0.0825

function calculateTotal(flavor, selectedAddOns) {
  const flavorPrice = flavor ? flavor.price : 0
  const addOnsPrice = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0)
  const subtotal = flavorPrice + addOnsPrice
  const tax = subtotal * TAX_RATE
  return { subtotal, tax, total: subtotal + tax }
}

function calculatePickupTimes() {
  const now = new Date()
  const format = (date) =>
    date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

  return [
    {
      id: '15',
      label: 'In 15 minutes',
      time: new Date(now.getTime() + 15 * 60000),
      display: `${format(new Date(now.getTime() + 15 * 60000))} (15 min)`,
    },
    {
      id: '30',
      label: 'In 30 minutes',
      time: new Date(now.getTime() + 30 * 60000),
      display: `${format(new Date(now.getTime() + 30 * 60000))} (30 min)`,
    },
    {
      id: '60',
      label: 'In 1 hour',
      time: new Date(now.getTime() + 60 * 60000),
      display: `${format(new Date(now.getTime() + 60 * 60000))} (1 hour)`,
    },
  ]
}

const inputStyle = {
  backgroundColor: '#FFFBEB',
  color: '#0B1F3A',
  borderColor: 'rgba(11,31,58,0.2)',
}

function Order() {
  const pickupTimes = calculatePickupTimes()

  const [step, setStep] = useState(1)
  const [selectedFlavor, setSelectedFlavor] = useState(null)
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const [pickupTimeId, setPickupTimeId] = useState(pickupTimes[0].id)
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [confirmedOrder, setConfirmedOrder] = useState(null)

  const { subtotal, tax, total } = calculateTotal(selectedFlavor, selectedAddOns)
  const selectedPickup = pickupTimes.find((p) => p.id === pickupTimeId)

  function toggleAddOn(addOn) {
    setSelectedAddOns((prev) =>
      prev.some((item) => item.id === addOn.id)
        ? prev.filter((item) => item.id !== addOn.id)
        : [...prev, addOn]
    )
  }

  function validate() {
    const newErrors = {}
    if (!selectedFlavor) newErrors.flavor = 'Please select a flavor'
    if (!customerInfo.name.trim()) newErrors.name = 'Full name is required'
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(customerInfo.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit phone number'
    }
    if (!pickupTimeId) newErrors.pickupTime = 'Please select a pickup time'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    if (!validate()) return

    setLoading(true)
    const order = {
      customer_name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      flavor_id: selectedFlavor.id,
      add_ons: selectedAddOns,
      pickup_time: selectedPickup.time.toISOString(),
      total: Number(total.toFixed(2)),
      status: 'pending',
    }

    const { data, error } = await supabase.from('orders').insert([order]).select()
    setLoading(false)

    if (error) {
      setSubmitError('Something went wrong. Try again.')
      return
    }

    setOrderId(data?.[0]?.id ?? null)
    setConfirmedOrder({ flavor: selectedFlavor, addOns: selectedAddOns, total, pickup: selectedPickup })
    setOrderConfirmed(true)
  }

  function resetForm() {
    setStep(1)
    setSelectedFlavor(null)
    setSelectedAddOns([])
    setPickupTimeId(pickupTimes[0].id)
    setCustomerInfo({ name: '', email: '', phone: '' })
    setErrors({})
    setSubmitError('')
    setOrderConfirmed(false)
    setOrderId(null)
    setConfirmedOrder(null)
  }

  if (orderConfirmed) {
    return (
      <div style={{ backgroundColor: '#FFFBEB' }}>
        <Nav />
      <div
        className="responsive-container responsive-text-section flex min-h-[70vh] w-full items-center justify-center"
        style={{ backgroundColor: '#FFFBEB', maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
      >
        <div className="mx-auto max-w-lg rounded-2xl text-center shadow-lg" style={{ backgroundColor: '#fff', padding: 'clamp(1rem, 4vw, 2rem)' }}>
          <h1 className="font-serif text-3xl font-bold" style={{ color: '#0B1F3A' }}>
            Your order is confirmed! 🍋
          </h1>
          {orderId && (
            <p className="mt-2 text-sm" style={{ color: 'rgba(11,31,58,0.6)' }}>
              Order ID: {orderId}
            </p>
          )}
          <p className="mt-4 text-base font-semibold" style={{ color: '#E84C89' }}>
            Your fresh lemonade will be ready {confirmedOrder.pickup.label.toLowerCase()}
          </p>

          <div className="mt-6 rounded-xl p-4 text-left" style={{ backgroundColor: '#FFFBEB' }}>
            <p style={{ color: '#0B1F3A' }}>
              <span className="font-bold">Flavor:</span> {confirmedOrder.flavor.name}
            </p>
            {confirmedOrder.addOns.length > 0 && (
              <p className="mt-1" style={{ color: '#0B1F3A' }}>
                <span className="font-bold">Add-ons:</span>{' '}
                {confirmedOrder.addOns.map((a) => a.name).join(', ')}
              </p>
            )}
            <p className="mt-1" style={{ color: '#0B1F3A' }}>
              <span className="font-bold">Pickup:</span> {confirmedOrder.pickup.display}
            </p>
            <p className="mt-2 text-lg font-bold" style={{ color: '#E84C89' }}>
              Total: ${confirmedOrder.total.toFixed(2)}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/menu"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold sm:w-auto"
              style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB' }}
            >
              Back to Menu
            </Link>
            <button
              type="button"
              onClick={resetForm}
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#FCD34D', color: '#0B1F3A' }}
            >
              Order Another
            </button>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FFFBEB' }}>
      <Nav />
      <section className="w-full" style={{ backgroundColor: '#0B1F3A' }}>
        <div
          className="responsive-container responsive-hero text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1.5rem, 5vw, 3rem)' }}
        >
          <h1 className="font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#FFFBEB' }}>
            Order Online
          </h1>
          <p className="mt-2 text-sm font-semibold" style={{ color: '#FCD34D' }}>
            Pay at pickup — fresh-squeezed in minutes
          </p>
        </div>
      </section>

      <div
        className="responsive-container responsive-card-container"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {[
            { id: 1, label: 'Flavor' },
            { id: 2, label: 'Add-ons' },
            { id: 3, label: 'Info & Pickup' },
          ].map((s) => (
            <div key={s.id} className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  backgroundColor: step >= s.id ? '#FCD34D' : '#fff',
                  color: '#0B1F3A',
                  border: '2px solid #0B1F3A',
                }}
              >
                {s.id}
              </div>
              <span className="hidden text-sm font-semibold sm:inline" style={{ color: '#0B1F3A' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: 'clamp(1rem, 4vw, 2rem)' }}
        >
          <div className="lg:col-span-2">
            {step === 1 && (
              <div>
                <h2 className="font-serif text-2xl font-bold" style={{ color: '#0B1F3A' }}>
                  Step 1: Select Your Flavor
                </h2>
                {errors.flavor && <p className="mt-1 text-sm font-semibold text-red-600">{errors.flavor}</p>}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {flavors.map((flavor) => {
                    const isSelected = selectedFlavor?.id === flavor.id
                    return (
                      <button
                        type="button"
                        key={flavor.id}
                        onClick={() => setSelectedFlavor(flavor)}
                        className="rounded-xl border-2 p-4 text-center shadow-sm transition-colors"
                        style={{
                          backgroundColor: isSelected ? '#FCD34D' : '#fff',
                          borderColor: isSelected ? '#E84C89' : 'rgba(11,31,58,0.15)',
                        }}
                      >
                        <p className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                          {flavor.name}
                        </p>
                        <p className="mt-1 text-sm font-semibold" style={{ color: '#E84C89' }}>
                          ${flavor.price.toFixed(2)}
                        </p>
                      </button>
                    )
                  })}
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full rounded-lg px-6 py-3 text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
                    style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB' }}
                  >
                    Next: Add-ons
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-serif text-2xl font-bold" style={{ color: '#0B1F3A' }}>
                  Step 2: Add-ons (optional)
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {addOns.map((addOn) => {
                    const isChecked = selectedAddOns.some((item) => item.id === addOn.id)
                    return (
                      <label
                        key={addOn.id}
                        className="flex items-center justify-between rounded-xl border-2 p-4 shadow-sm"
                        style={{
                          backgroundColor: isChecked ? '#FCD34D' : '#fff',
                          borderColor: isChecked ? '#E84C89' : 'rgba(11,31,58,0.15)',
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleAddOn(addOn)}
                          />
                          <span className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                            {addOn.name}
                          </span>
                        </span>
                        <span className="text-sm font-semibold" style={{ color: '#E84C89' }}>
                          +${addOn.price.toFixed(2)}
                        </span>
                      </label>
                    )
                  })}
                </div>
                <div className="mt-6 flex justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-lg px-6 py-3 text-sm font-bold"
                    style={{ backgroundColor: '#fff', color: '#0B1F3A', border: '1px solid #0B1F3A' }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="rounded-lg px-6 py-3 text-sm font-bold transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB' }}
                  >
                    Next: Info & Pickup
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-serif text-2xl font-bold" style={{ color: '#0B1F3A' }}>
                  Step 3: Your Info & Pickup Time
                </h2>

                <div className="mt-4 flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="mt-1 w-full rounded-md border px-4 py-3 text-sm focus:outline-none"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#E84C89')}
                      onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="mt-1 w-full rounded-md border px-4 py-3 text-sm focus:outline-none"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#E84C89')}
                      onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="1234567890"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="mt-1 w-full rounded-md border px-4 py-3 text-sm focus:outline-none"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#E84C89')}
                      onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                      Pickup Time <span className="text-red-600">*</span>
                    </label>
                    <div className="mt-2 flex flex-col gap-2">
                      {pickupTimes.map((p) => (
                        <label
                          key={p.id}
                          className="flex items-center gap-3 rounded-md border p-3 text-sm"
                          style={{
                            backgroundColor: pickupTimeId === p.id ? '#FCD34D' : '#fff',
                            borderColor: pickupTimeId === p.id ? '#E84C89' : 'rgba(11,31,58,0.15)',
                            color: '#0B1F3A',
                          }}
                        >
                          <input
                            type="radio"
                            name="pickupTime"
                            checked={pickupTimeId === p.id}
                            onChange={() => setPickupTimeId(p.id)}
                          />
                          <span className="font-semibold">{p.label}</span>
                          <span style={{ color: '#E84C89' }}>{p.display}</span>
                        </label>
                      ))}
                    </div>
                    {errors.pickupTime && <p className="mt-1 text-sm text-red-600">{errors.pickupTime}</p>}
                  </div>
                </div>

                {submitError && <p className="mt-4 text-sm font-semibold text-red-600">{submitError}</p>}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-lg px-6 py-3 text-sm font-bold"
                    style={{ backgroundColor: '#fff', color: '#0B1F3A', border: '1px solid #0B1F3A' }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg px-6 py-3 text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
                    style={{ backgroundColor: '#FCD34D', color: '#0B1F3A' }}
                  >
                    {loading ? 'Placing Order...' : 'Confirm Order'}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div
              className="sticky bottom-0 rounded-2xl shadow-lg lg:static"
              style={{ backgroundColor: '#FCE5F0', padding: 'clamp(1rem, 4vw, 2rem)' }}
            >
              <h3 className="font-serif text-xl font-bold" style={{ color: '#0B1F3A' }}>
                Order Summary
              </h3>

              <div className="mt-4 flex justify-between text-sm" style={{ color: '#0B1F3A' }}>
                <span>Flavor: {selectedFlavor ? selectedFlavor.name : '—'}</span>
                <span>${selectedFlavor ? selectedFlavor.price.toFixed(2) : '0.00'}</span>
              </div>

              {selectedAddOns.length > 0 && (
                <div className="mt-2 flex justify-between text-sm" style={{ color: '#0B1F3A' }}>
                  <span>Add-ons: {selectedAddOns.map((a) => a.name).join(', ')}</span>
                  <span>${selectedAddOns.reduce((s, a) => s + a.price, 0).toFixed(2)}</span>
                </div>
              )}

              <div className="mt-3 flex justify-between text-sm" style={{ color: '#0B1F3A' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-1 flex justify-between text-sm" style={{ color: '#0B1F3A' }}>
                <span>Tax (8.25%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="mt-3 border-t-2 pt-3" style={{ borderColor: '#0B1F3A' }}>
                <div className="flex justify-between text-lg font-bold" style={{ color: '#0B1F3A' }}>
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Order
