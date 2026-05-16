export default function Hero({ search, onSearchChange }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-surface py-8 sm:py-12 md:py-16">
      <div
        className="pointer-events-none absolute -right-16 top-6 h-48 w-48 rounded-full bg-brand-200/40 blur-3xl sm:-right-20 sm:h-64 sm:w-64 md:h-72 md:w-72"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-orange-100/60 blur-3xl sm:h-48 sm:w-48 md:h-56 md:w-56"
        aria-hidden
      />

      <div className="page-container relative grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="animate-fade-up mb-3 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm sm:mb-4 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            120+ restaurants near you
          </p>

          <h1 className="animate-fade-up stagger-1 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
            Your favorite food,{' '}
            <span className="bg-linear-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              delivered fast
            </span>
          </h1>

          <p className="animate-fade-up stagger-2 mx-auto mt-3 max-w-lg text-sm text-muted sm:mt-4 sm:text-base md:mx-0 md:text-lg">
            Browse menus from local restaurants, track your order in real time, and enjoy
            contactless delivery to your door.
          </p>

          <div className="animate-fade-up stagger-3 mt-6 flex flex-col gap-3 sm:mt-8 md:flex-row md:items-stretch">
            <label className="relative flex-1">
              <span className="sr-only">Search restaurants or dishes</span>
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400 sm:left-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search restaurants..."
                className="w-full min-h-11 rounded-2xl border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none transition-all duration-300 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 sm:min-h-12 sm:py-3.5 sm:pl-12 sm:text-base"
              />
            </label>
            <button
              type="button"
              className="min-h-11 shrink-0 rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl sm:min-h-12 sm:py-3.5 sm:text-base md:px-8"
            >
              Find food
            </button>
          </div>

          <ul className="animate-fade-up stagger-4 mt-6 flex flex-col items-center gap-2 text-xs text-muted sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:text-sm md:justify-start">
            <li className="flex items-center gap-1.5">
              <span className="text-brand-500">✓</span> Free delivery over $25
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-brand-500">✓</span> Live order tracking
            </li>
            <li className="hidden items-center gap-1.5 sm:flex">
              <span className="text-brand-500">✓</span> Secure checkout
            </li>
          </ul>
        </div>

        <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm md:order-2 md:max-w-none">
          <div className="animate-slide-in-right relative mx-auto aspect-square w-full max-h-[240px] sm:max-h-[300px] md:max-h-[380px] lg:max-h-[420px]">
            <div className="absolute inset-4 rounded-3xl bg-linear-to-br from-brand-400 to-brand-600 opacity-20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop"
              alt="Delicious food spread"
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl ring-1 ring-stone-200/50 sm:rounded-3xl"
            />

            <div className="animate-float absolute left-0 top-4 z-20 hidden rounded-xl border border-stone-100 bg-white p-2.5 shadow-xl sm:block sm:left-2 sm:rounded-2xl sm:p-3 md:-left-4">
              <p className="text-[10px] font-medium text-muted sm:text-xs">Avg. delivery</p>
              <p className="text-base font-bold text-ink sm:text-lg">28 min</p>
            </div>

            <div className="animate-float-delayed absolute right-0 bottom-8 z-20 hidden items-center gap-2 rounded-xl border border-stone-100 bg-white p-2 shadow-xl sm:flex sm:rounded-2xl sm:p-3 md:-right-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-base sm:h-10 sm:w-10 sm:text-lg">
                ⭐
              </span>
              <div>
                <p className="text-xs font-bold text-ink sm:text-sm">4.8 rating</p>
                <p className="text-[10px] text-muted sm:text-xs">50k+ reviews</p>
              </div>
            </div>

            <div className="animate-pulse-soft absolute bottom-2 left-1/2 z-20 max-w-[90%] -translate-x-1/2 truncate rounded-full bg-ink px-3 py-1.5 text-[10px] font-medium text-white shadow-lg sm:bottom-4 sm:px-4 sm:py-2 sm:text-xs md:text-sm">
              🛵 Driver is 5 min away
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
