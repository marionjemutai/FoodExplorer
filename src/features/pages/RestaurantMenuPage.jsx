import { useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import MenuItemCard from '../../shared/components/MenuItemCard'
import CartDrawer from '../../shared/components/CartDrawer'
import { useCart } from '../../shared/context/CartContext'

import { restaurants } from './data/restaurants'
import { getMenuByRestaurantId } from './data/menus'

export default function RestaurantMenuPage() {
  const { restaurantId } = useParams()
  const navigate = useNavigate()

  const onBack = () => navigate('/')

  const { itemCount, setIsCartOpen } = useCart()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const restaurant = useMemo(
    () => restaurants.find((r) => r.id === restaurantId),
    [restaurantId]
  )

  const menuItems = useMemo(
    () => getMenuByRestaurantId(restaurantId),
    [restaurantId]
  )

  const groupedMenu = useMemo(() => {
    const groups = {}
    for (const item of menuItems) {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    }
    return groups
  }, [menuItems])

  const categories = Object.keys(groupedMenu)

  const filteredMenu = useMemo(() => {
    const filtered = {}

    for (const [category, items] of Object.entries(groupedMenu)) {
      if (selectedCategory && category !== selectedCategory) continue

      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )

      if (filteredItems.length) {
        filtered[category] = filteredItems
      }
    }

    return filtered
  }, [groupedMenu, searchQuery, selectedCategory])

  const featuredItems = menuItems.slice(0, 3)
  const restaurantDescription =
    restaurant?.description ||
    `Fresh ${restaurant?.cuisine?.toLowerCase()} favorites delivered fast.`

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-surface">
        <Header onHome={onBack} />

        <main className="page-container py-24 text-center">
          <p className="text-lg font-semibold text-ink">Restaurant not found</p>
          <button
            onClick={onBack}
            className="mt-6 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Return to home
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
        <section className="relative overflow-hidden bg-slate-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${restaurant.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/90" />

          <div className="page-container relative py-20">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:grid lg:grid-cols-[2.2fr_1fr] lg:gap-8">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
                  {restaurant.badge || 'Restaurant'}
                </div>
                <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
                  {restaurant.name}
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
                  {restaurantDescription}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/70 p-5 text-sm text-slate-200">
                    <p className="font-semibold text-white">Cuisine</p>
                    <p className="mt-2">{restaurant.cuisine}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/70 p-5 text-sm text-slate-200">
                    <p className="font-semibold text-white">Delivery time</p>
                    <p className="mt-2">{restaurant.deliveryTime}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    ⭐ {restaurant.rating} · {restaurant.reviews} reviews
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    🚚 {restaurant.deliveryFee === 0 ? 'Free delivery' : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    📍 Nearby
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 bg-slate-950/80 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Status</p>
                    <p className="mt-2 text-lg font-semibold text-emerald-300">Open now</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-white">
                    {restaurant.deliveryTime}
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-slate-200">
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Minimum order</p>
                    <p className="mt-2 text-lg font-semibold">${restaurant.minOrder}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Offer</p>
                    <p className="mt-2 text-lg font-semibold">{restaurant.promo || 'No active offers'}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="mt-8 w-full rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
                >
                  Open cart · {itemCount} item{itemCount !== 1 ? 's' : ''}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="page-container py-10">
          <div className="grid gap-8 xl:grid-cols-[2fr_0.9fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-stone-200 bg-white p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-ink">Restaurant menu</h2>
                    <p className="mt-2 text-sm text-muted">Search menu items or choose a category.</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(null)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        selectedCategory === null
                          ? 'border-brand-600 bg-brand-600 text-white'
                          : 'border-stone-200 bg-white text-ink hover:border-brand-300'
                      }`}
                    >
                      All categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          selectedCategory === category
                            ? 'border-brand-600 bg-brand-600 text-white'
                            : 'border-stone-200 bg-white text-ink hover:border-brand-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search dishes, bowls, pizzas..."
                    className="w-full rounded-3xl border border-stone-200 bg-slate-50 px-5 py-3 text-sm text-ink outline-none transition focus:border-brand-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink">Popular picks</h3>
                    <p className="mt-2 text-sm text-muted">Top dishes from this restaurant.</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                    {featuredItems.length} items
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {featuredItems.map((item) => (
                    <div key={item.id} className="rounded-3xl border border-stone-200 bg-slate-50 p-4">
                      <h4 className="font-semibold text-ink">{item.name}</h4>
                      <p className="mt-2 text-sm text-muted">{item.description || item.category}</p>
                      <div className="mt-4 flex items-center justify-between text-sm text-ink">
                        <span>${item.price.toFixed(2)}</span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {Object.keys(filteredMenu).length > 0 ? (
                  Object.entries(filteredMenu).map(([category, items]) => (
                    <div key={category} className="mb-10 rounded-3xl border border-stone-200 bg-white p-6">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold text-ink">{category}</h3>
                          <p className="mt-1 text-sm text-muted">{items.length} options</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {items.map((item) => (
                          <MenuItemCard key={item.id} item={item} restaurant={restaurant} />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
                    <p className="text-3xl">🔍</p>
                    <p className="mt-4 text-lg font-semibold text-ink">No matching menu items</p>
                    <p className="mt-2 text-sm text-muted">Try a different keyword or category.</p>
                  </div>
                )}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-stone-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">Restaurant details</h3>
                <p className="mt-3 text-sm text-muted">Everything you need to know before ordering.</p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3 text-sm">
                    <span className="font-medium text-ink">Delivery fee</span>
                    <span className="text-muted">{restaurant.deliveryFee === 0 ? 'Free' : `$${restaurant.deliveryFee.toFixed(2)}`}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3 text-sm">
                    <span className="font-medium text-ink">Minimum order</span>
                    <span className="text-muted">${restaurant.minOrder}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3 text-sm">
                    <span className="font-medium text-ink">Rating</span>
                    <span className="text-muted">{restaurant.rating} / 5</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">Offers & discounts</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-3xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
                    {restaurant.promo || 'No active promotions yet.'}
                  </div>
                  <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-muted">
                    Earn rewards when you order more than once.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
