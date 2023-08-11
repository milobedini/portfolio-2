import { useEffect } from 'react'

export const hidePageOverflow = () => {
  const scrollBarWidth = window.innerWidth - document.body.clientWidth + 'px'
  document.documentElement.style.setProperty('padding-right', scrollBarWidth)
  document.documentElement.classList.add('overflow-clip')
  console.log(document.documentElement.classList)
}

export const showPageOverflow = () => {
  document.documentElement.style.removeProperty('padding-right')
  document.documentElement.classList.remove('overflow-clip')
}

export const useHidePageOverflow = (hide) => {
  console.log(hide)
  useEffect(() => {
    if (hide) {
      console.log('Hiding page overflow')
      hidePageOverflow()
    } else {
      console.log('Showing page overflow')
      showPageOverflow()
    }
  }, [hide])
}
