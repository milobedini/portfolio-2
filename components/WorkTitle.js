import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { useWorkStore } from './store'

const WorkTitle = ({ children, id }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' })
  const setInViewWork = useWorkStore((state) => state.setInViewWork)
  const inViewWork = useWorkStore((state) => state.inViewWork)

  useEffect(() => {
    if (isInView) setInViewWork(id)
    if (!isInView && inViewWork === id) setInViewWork(null)
  }, [isInView, id, setInViewWork, inViewWork])

  return (
    <p
      ref={ref}
      className={classNames(
        'text-5xl py-16 transition-colors',
        isInView ? 'text-accent' : 'text-white'
      )}
    >
      {children}
    </p>
  )
}

export default WorkTitle
