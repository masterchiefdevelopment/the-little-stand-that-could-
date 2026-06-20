import { useCart } from '../CartContext'

export default function CartButton() {
  const { items, removeItem, clearCart, total, count, isOpen, setIsOpen } = useCart()

  return (
    <>
      {/* Backdrop — tap outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating button (bottom-right) — fly-into-cart target */}
      <button
        type="button"
        id="cart-fly-target"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center shadow-xl"
        style={{ backgroundColor: '#E84C89', borderRadius: '9999px', transition: 'transform 0.18s ease' }}
        aria-label="Open cart"
      >
        <span className="text-2xl">🛒</span>
        {count > 0 && (
          <span
            className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center text-xs font-black text-white"
            style={{ backgroundColor: '#081A33', borderRadius: '9999px' }}
          >
            {count}
          </span>
        )}
      </button>

      {/* Slide-out panel */}
      <div
        className="fixed bottom-0 right-0 top-0 z-50 w-80 max-w-[85vw] transform shadow-2xl transition-transform duration-300"
        style={{
          backgroundColor: '#FFF7E5',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-black" style={{ color: '#081A33' }}>
              Your Cart
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold"
              style={{ color: '#081A33', background: 'none' }}
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          <div className="mt-5 flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <p className="mt-10 text-center text-sm" style={{ color: '#999' }}>
                Your cart is empty.<br />Build a drink to get started! 🍋
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.key}
                  className="mb-3 flex items-center justify-between rounded-2xl bg-white/80 p-3"
                >
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#081A33' }}>
                      {item.name}
                    </p>
                    <p className="text-xs font-semibold" style={{ color: '#E84C89' }}>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.key)}
                    className="text-xs font-bold"
                    style={{ color: '#999', background: 'none' }}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t pt-4" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
              <div className="flex justify-between text-lg font-black" style={{ color: '#081A33' }}>
                <span>Total</span>
                <span style={{ color: '#E84C89' }}>${total.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full py-3 text-sm font-bold text-white"
                style={{ backgroundColor: '#081A33', borderRadius: '9999px' }}
              >
                Checkout (coming soon)
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-2 w-full py-2 text-xs font-semibold"
                style={{ color: '#999', background: 'none' }}
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}