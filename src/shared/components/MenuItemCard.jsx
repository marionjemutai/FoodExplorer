import { useCart } from '../context/CartContext'

export default function MenuItemCard({ item, restaurant }) {
  const { addItem, updateQuantity, items } = useCart()
  const inCart = items.find((i) => i.id === item.id)
  const quantity = inCart?.quantity ?? 0

  return (
    <article className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4 transition-shadow hover:shadow-md sm:p-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl sm:h-16 sm:w-16">
        🍽️
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-wide text-brand-600 sm:text-xs">
              {item.category}
            </p>
            <h3 className="font-semibold text-ink sm:text-lg">{item.name}</h3>
            <p className="mt-0.5 text-xs text-muted sm:text-sm">{item.description}</p>
          </div>
          <p className="shrink-0 text-sm font-bold text-ink sm:text-base">
            ${item.price.toFixed(2)}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-end gap-2">
          {quantity > 0 ? (
            <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 p-1">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-medium text-ink transition-colors hover:bg-white"
                aria-label={`Decrease ${item.name}`}
              >
                −
              </button>
              <span className="min-w-6 text-center text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => addItem(item, restaurant)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-lg font-medium text-white transition-colors hover:bg-brand-700"
                aria-label={`Increase ${item.name}`}
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => addItem(item, restaurant)}
              className="min-h-10 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:bg-brand-700"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
