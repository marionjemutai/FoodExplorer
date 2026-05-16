export default function Footer() {
  return (
    <footer id="partner" className="border-t border-stone-200 bg-ink py-10 text-stone-300 sm:py-12 md:py-14">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:gap-12 lg:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-white">
              Food<span className="text-brand-400">Dash</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed sm:mt-3">
              Connecting hungry customers with the best local restaurants in your city.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">For customers</p>
            <ul className="mt-2 space-y-1.5 text-sm sm:mt-3 sm:space-y-2">
              <li>
                <a href="#restaurants" className="transition-colors hover:text-brand-400">
                  Browse restaurants
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-400">
                  Gift cards
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-400">
                  Help center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">For restaurants</p>
            <ul className="mt-2 space-y-1.5 text-sm sm:mt-3 sm:space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-brand-400">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-400">
                  Restaurant dashboard
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-400">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold text-white sm:text-base">Get the app</p>
            <p className="mt-2 text-sm sm:mt-3">Download FoodDash for iOS and Android.</p>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
              <button
                type="button"
                className="min-h-10 flex-1 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600 sm:flex-none"
              >
                App Store
              </button>
              <button
                type="button"
                className="min-h-10 flex-1 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600 sm:flex-none"
              >
                Google Play
              </button>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-stone-700 pt-6 text-center text-[11px] text-stone-500 sm:mt-10 sm:text-xs">
          © {new Date().getFullYear()} FoodDash. Built with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
