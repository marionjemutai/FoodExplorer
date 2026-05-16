import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [restaurantId, setRestaurantId] = useState(null)
  const [restaurantName, setRestaurantName] = useState('')
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = useCallback((item, restaurant) => {
    setRestaurantId((currentId) => {
      const isNewRestaurant = currentId && currentId !== restaurant.id

      setRestaurantName(restaurant.name)
      setItems((prev) => {
        if (isNewRestaurant) {
          return [{ ...item, quantity: 1 }]
        }
        const existing = prev.find((i) => i.id === item.id)
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        }
        return [...prev, { ...item, quantity: 1 }]
      })
      setIsCartOpen(true)
      return restaurant.id
    })
  }, [])

  const removeItem = useCallback((itemId) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== itemId)
      if (next.length === 0) {
        setRestaurantId(null)
        setRestaurantName('')
      }
      return next
    })
  }, [])

  const updateQuantity = useCallback(
    (itemId, quantity) => {
      if (quantity < 1) {
        removeItem(itemId)
        return
      }
      setItems((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, quantity } : i)),
      )
    },
    [removeItem],
  )

  const clearCart = useCallback(() => {
    setItems([])
    setRestaurantId(null)
    setRestaurantName('')
  }, [])

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      restaurantId,
      restaurantName,
      items,
      itemCount,
      subtotal,
      isCartOpen,
      setIsCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      restaurantId,
      restaurantName,
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
