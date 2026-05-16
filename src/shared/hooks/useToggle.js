import { useCallback, useState } from 'react'

export function useToggle(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)
  const toggle = useCallback(() => setIsOpen((value) => !value), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, open, close, setIsOpen }
}
