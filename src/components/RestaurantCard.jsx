export default function RestaurantCard({ restaurant, index }) {
  const stagger = Math.min(index + 1, 6)

  return (
    <article
      style={{ animationDelay: `${stagger * 0.1}s` }}
      className="animate-fade-up group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 sm:flex-row md:flex-col"
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-36 md:w-full md:aspect-[16/10]">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:min-h-[120px] md:min-h-0"
          loading="lazy"
        />
        {restaurant.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow-md sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs">
            {restaurant.badge}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4 md:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand-600 sm:text-base md:text-lg">
              {restaurant.name}
            </h3>
            <p className="mt-0.5 truncate text-xs text-muted sm:text-sm">{restaurant.cuisine}</p>
          </div>
          <span className="flex shrink-0 items-center gap-0.5 rounded-lg bg-brand-50 px-1.5 py-0.5 text-xs font-semibold text-brand-700 sm:gap-1 sm:px-2 sm:py-1 sm:text-sm">
            ⭐ {restaurant.rating}
          </span>
        </div>

        <div className="mt-2 flex flex-col gap-0.5 text-[11px] text-muted sm:mt-3 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1 sm:text-xs md:text-sm">
          <span>🕐 {restaurant.deliveryTime}</span>
          <span>
            🚚{' '}
            {restaurant.deliveryFee === 0
              ? 'Free delivery'
              : `$${restaurant.deliveryFee.toFixed(2)} fee`}
          </span>
          <span className="hidden sm:inline md:hidden lg:inline">·</span>
          <span>Min. ${restaurant.minOrder}</span>
        </div>

        {restaurant.promo && (
          <p className="mt-2 line-clamp-2 rounded-lg bg-brand-50 px-2 py-1 text-[10px] font-medium text-brand-700 sm:mt-3 sm:px-3 sm:py-1.5 sm:text-xs">
            {restaurant.promo}
          </p>
        )}

        <button
          type="button"
          className="mt-auto min-h-10 w-full rounded-xl border border-stone-200 py-2 text-xs font-semibold text-ink transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-600 group-hover:text-white sm:mt-3 sm:min-h-11 sm:py-2.5 sm:text-sm md:mt-4"
        >
          View menu
        </button>
      </div>
    </article>
  )
}
