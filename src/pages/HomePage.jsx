import { useMemo, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CategoryPills from '../components/CategoryPills'
import RestaurantCard from '../components/RestaurantCard'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import { categories, restaurants } from '../data/restaurants'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return restaurants.filter((r) => {
      const matchesCategory = category === 'all' || r.category === category
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [search, category])

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero search={search} onSearchChange={setSearch} />

        <section id="restaurants" className="py-10 sm:py-14 md:py-16">
          <div className="page-container">
            <div className="animate-fade-up flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <h2 className="text-xl font-bold text-ink sm:text-2xl md:text-3xl">
                  Popular near you
                </h2>
                <p className="mt-0.5 text-sm text-muted sm:text-base">
                  {filtered.length} restaurant{filtered.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 md:mt-8">
              <CategoryPills
                categories={categories}
                active={category}
                onChange={setCategory}
              />
            </div>

            {filtered.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:mt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {filtered.map((restaurant, index) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="animate-fade-up mt-8 rounded-2xl border border-dashed border-stone-300 bg-white px-4 py-12 text-center sm:mt-12 sm:py-16 md:mt-16">
                <p className="text-3xl sm:text-4xl">🔍</p>
                <p className="mt-2 text-sm font-semibold text-ink sm:mt-3 sm:text-base">
                  No restaurants found
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  Try a different search or category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch('')
                    setCategory('all')
                  }}
                  className="mt-4 min-h-11 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
