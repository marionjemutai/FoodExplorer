const steps = [
  {
    icon: '📍',
    title: 'Choose your location',
    text: 'Enter your address and see restaurants that deliver to you.',
  },
  {
    icon: '🍕',
    title: 'Pick a restaurant',
    text: 'Browse menus, filter by cuisine, and add your favorite dishes.',
  },
  {
    icon: '🛵',
    title: 'Track your order',
    text: 'Follow your driver in real time until food arrives at your door.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="page-container">
        <div className="animate-fade-up text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl md:text-4xl">How FoodDash works</h2>
          <p className="mx-auto mt-2 max-w-xl px-2 text-sm text-muted sm:mt-3 sm:text-base">
            Order from your favorite local spots in three simple steps.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:mt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
              className="animate-fade-up relative flex gap-4 rounded-2xl border border-stone-100 bg-surface p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg sm:flex-col sm:gap-0 sm:p-6 sm:text-center md:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-xl sm:mx-auto sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                {step.icon}
              </span>
              <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white sm:left-1/2 sm:right-auto sm:top-3 sm:-translate-x-1/2 sm:h-7 sm:w-7 sm:text-xs">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 pt-1 sm:pt-2">
                <h3 className="pr-8 text-sm font-semibold text-ink sm:pr-0 sm:mt-4 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
