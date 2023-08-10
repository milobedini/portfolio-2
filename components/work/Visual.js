/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import { useWorkStore } from './store'

const Visual = ({ children, id }) => {
  const fullscreenWork = useWorkStore((state) => state.fullscreenWork)
  return (
    <div
      className={classNames(
        `fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  )
}

export const SwayMobileVisual = ({ id }) => {
  return (
    <Visual id={id}>
      <img src="/visuals/swaymob.png" alt="" />
    </Visual>
  )
}
export const SwayVisual = ({ id }) => {
  return (
    <Visual id={id}>
      <img src="/visuals/sway.png" alt="" />
    </Visual>
  )
}
