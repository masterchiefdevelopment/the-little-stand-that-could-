/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item) => setItems((prev) => [...prev, { ...item, key: Date.now() + Math.random() }])
  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key))
  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.price, 0)
  const count = items.length

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, total, count, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}