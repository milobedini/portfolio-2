import { useEffect } from 'react'

export const useEscapePress = (onEscapePress) => {
  useEffect(() => {
    const onKeyUp = (event) => {
      if (event.key === 'Escape') onEscapePress()
    }
    window.addEventListener('keyup', onKeyUp)
    return () => window.removeEventListener('keyup', onKeyUp)
  }, [onEscapePress])
}
