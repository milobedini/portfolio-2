/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import { useWorkStore } from './store'

const Visual = ({ id }) => {
  return (
    <div
      className={classNames(
        'fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none overflow-hidden',
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">
        Description
        <VisualImage id={id} />
        Tech Stack <br />
        Link to code
      </div>
    </div>
  )
}

export const VisualImage = ({ id }) => {
  if (id === 1) {
    return <img src="/visuals/swaymob.png" alt="" />
  } else if (id === 2) {
    return <img src="/visuals/sway.png" alt="" />
  } else {
    return <img src="/visuals/giphy.gif" alt="loading" />
  }
}

export default Visual
