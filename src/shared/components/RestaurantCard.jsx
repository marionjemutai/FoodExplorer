import { Link } from 'react-router-dom'

export default function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="block cursor-pointer overflow-hidden rounded-2xl border bg-white hover:shadow-lg transition"
    >
      <div>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-52 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-bold">{restaurant.name}</h3>
          <p className="text-sm text-muted">{restaurant.cuisine}</p>

          <div className="mt-3 flex justify-between text-sm">
            <span>{restaurant.deliveryTime}</span>
            <span>
              {restaurant.deliveryFee === 0
                ? 'Free delivery'
                : `$${restaurant.deliveryFee.toFixed(2)}`}
            </span>
          </div>
        </div>

      </div>
    </Link>
  )
}