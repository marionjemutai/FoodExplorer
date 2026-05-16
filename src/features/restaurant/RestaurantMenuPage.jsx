import { useMemo } from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import MenuItemCard from '../../shared/components/MenuItemCard'
import CartDrawer from '../../shared/components/CartDrawer'
import { restaurants } from '../home/data/restaurants'
import { getMenuByRestaurantId } from '../home/data/menus'
import { useCart } from '../../shared/context/CartContext'

export default function RestaurantMenuPage({ restaurantId, onBack }) {
  const { itemCount, setIsCartOpen } = useCart()

  const restaurant = useMemo(
    () => restaurants.find((r) => r.id === restaurantId),
    [restaurantId],
  )

  const menuItems = useMemo(() => getMenuByRestaurantId(restaurantId), [restaurantId])

  const groupedMenu = useMemo(() => {
    const groups = {}
    for (const item of menuItems) {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    }
    return groups
  }, [menuItems])

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-surface">
        <Header onHome={onBack} />
        <main className="page-container py-20 text-center">
          <p className="text-lg font-semibold text-ink">Restaurant not found</p>
          <button
            type="button"
            onClick={onBack}
            className="mt-4 rounded-full bg-brand-600 px-6 py-2 text-sm font-semibold text-white"
          >
            Back to home
          </button>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface pb-24">
      <Header onHome={onBack} />
      <CartDrawer />

      <main>
        <section className="border-b border-stone-200 bg-white">
          <div className="page-container py-6 sm:py-8">
            <button
              type="button"
              onClick={onBack}
              className="mb-4 flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-brand-600"
            >
              ← Back to restaurants
            </button>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-ink sm:text-3xl">{restaurant.name}</h1>
                <p className="mt-1 text-sm text-muted sm:text-base">{restaurant.cuisine}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted sm:text-sm">
                  <span>⭐ {restaurant.rating}</span>
                  <span>🕐 {restaurant.deliveryTime}</span>
                  <span>
                    🚚{' '}
                    {restaurant.deliveryFee === 0
                      ? 'Free delivery'
                      : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative min-h-11 shrink-0 rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700"
              >
                View cart
                {itemCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="page-container py-8 sm:py-10">
          {Object.entries(groupedMenu).map(([category, items]) => (
            <div key={category} className="mb-10 last:mb-0">
              <h2 className="mb-4 text-lg font-bold text-ink sm:text-xl">{category}</h2>
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <MenuItemCard key={item.id} item={item} restaurant={restaurant} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200 bg-white/95 p-4 backdrop-blur-lg sm:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 text-sm font-semibold text-white shadow-lg"
          >
            View cart · {itemCount} item{itemCount !== 1 ? 's' : ''}
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}
