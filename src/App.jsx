import { useState } from 'react'
import { CartProvider } from './shared/context/CartContext'
import HomePage from './features/home/HomePage'
import RestaurantMenuPage from './features/restaurant/RestaurantMenuPage'

export default function App() {
  const [menuRestaurantId, setMenuRestaurantId] = useState(null)

  return (
    <CartProvider>
      {menuRestaurantId ? (
        <RestaurantMenuPage
          restaurantId={menuRestaurantId}
          onBack={() => setMenuRestaurantId(null)}
        />
      ) : (
        <HomePage onViewMenu={setMenuRestaurantId} />
      )}
    </CartProvider>
  )
}
