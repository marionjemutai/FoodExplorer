import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    restaurantName,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
        aria-label="Close cart"
      />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-4 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-ink">Your cart</h2>
            {restaurantName && (
              <p className="text-sm text-muted">{restaurantName}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-ink hover:bg-stone-50"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="text-4xl">🛒</p>
            <p className="mt-3 font-semibold text-ink">Your cart is empty</p>
            <p className="mt-1 text-sm text-muted">Add items from a restaurant menu</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 border-b border-stone-100 py-4 last:border-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xl">
                    🍽️
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{item.name}</p>
                    <p className="text-sm text-muted">${item.price.toFixed(2)} each</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 text-sm hover:bg-stone-50"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-sm text-white hover:bg-brand-700"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="shrink-0 font-semibold text-ink">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="border-t border-stone-200 bg-surface px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">{itemCount} items</span>
                <span className="text-lg font-bold text-ink">
                  Subtotal: ${subtotal.toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                className="mt-4 min-h-12 w-full rounded-2xl bg-brand-600 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700"
              >
                Checkout · ${subtotal.toFixed(2)}
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-2 w-full py-2 text-sm text-muted hover:text-ink"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
