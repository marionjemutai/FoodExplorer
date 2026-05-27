import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './shared/context/CartContext'

import HomePage from './features/pages/home'
import RestaurantMenuPage from './features/pages/RestaurantMenuPage'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantMenuPage />} />
      </Routes>
    </CartProvider>
  )
}