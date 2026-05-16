export default function CategoryPills({ categories, active, onChange }) {
  return (
    <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
      <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat, i) => {
          const isActive = active === cat.id
          const stagger = Math.min(i + 1, 6)
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onChange(cat.id)}
              style={{ animationDelay: `${stagger * 0.1}s` }}
              className={`animate-fade-up flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                isActive
                  ? 'border-brand-500 bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'border-stone-200 bg-white text-ink hover:border-brand-300 hover:bg-brand-50'
              }`}
            >
              <span className="text-sm sm:text-base">{cat.icon}</span>
              {cat.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
