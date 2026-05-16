import Header from '../../shared/components/Header'
import Hero from '../../shared/components/Hero'
import CategoryPills from '../../shared/components/CategoryPills'
import RestaurantCard from '../../shared/components/RestaurantCard'
import HowItWorks from '../../shared/components/HowItWorks'
import Footer from '../../shared/components/Footer'
import CartDrawer from '../../shared/components/CartDrawer'
import { categories } from './data/restaurants'
import { useRestaurantFilters } from './hooks/useRestaurantFilters'

export default function HomePage({ onViewMenu }) {
  const { search, setSearch, category, setCategory, filtered, clearFilters } =
    useRestaurantFilters()

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <CartDrawer />
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
                    onViewMenu={onViewMenu}
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
                  onClick={clearFilters}
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
