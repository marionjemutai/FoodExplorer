import { useCallback, useMemo, useState } from 'react'
import { restaurants } from '../data/restaurants'

export function useRestaurantFilters() {
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

  const clearFilters = useCallback(() => {
    setSearch('')
    setCategory('all')
  }, [])

  return {
    search,
    setSearch,
    category,
    setCategory,
    filtered,
    clearFilters,
  }
}
