/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import { useWorkStore } from './store'

const WorkCard = ({ gradient, children, id }) => {
  const inViewWork = useWorkStore((state) => state.inViewWork)
  const setFullscreenWork = useWorkStore((state) => state.setFullscreenWork)

  return (
    <div
      className={classNames(
        'h-full w-full rounded-2xl absolute inset-0 transition-opacity',
        inViewWork === id ? 'active-card opacity-100' : 'opacity-0'
      )}
    >
      <div
        className={classNames(
          'gradient absolute inset-0 bg-gradient-to-br origin-bottom-left rounded-2xl',
          gradient
        )}
      />
      {children}
      <button
        onClick={() => {
          setFullscreenWork(inViewWork)
        }}
        className="show-me-btn bg-primary text-white rounded-xl absolute bottom-6 left-6 px-4 py-2 shadow-lg"
      >
        Show me
      </button>
    </div>
  )
}

export const SwayMobileCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#e838cc] to-[#4a22bd]'} id={id}>
      <img
        src={'/cardImages/swaymob/swaymob_home.PNG'}
        alt="Sway Mobile Home"
        className="rounded-xl shadow-lg absolute left-[5%] top-[5%] w-[28%]"
      />
      <img
        src={'/cardImages/swaymob/swaymob_guided.PNG'}
        alt="Sway Mobile Guided"
        className="rounded-xl shadow-lg absolute left-[70%] top-[35%] w-[28%]"
      />
      <img
        src={'/cardImages/swaymob/swaymob_profile.PNG'}
        alt="Sway Mobile Profile"
        className="rounded-xl shadow-lg absolute left-[38%] top-[20%] w-[28%]"
      />
    </WorkCard>
  )
}
export const SwayCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#bed0e0] to-[#c9528a]'} id={id}>
      <img
        src={'/cardImages/swaymob/swaymob_login.PNG'}
        alt="Sway Mobile Home"
        className="rounded-xl shadow-lg absolute left-[5%] top-[5%] w-[28%]"
      />
      <img
        src={'/cardImages/swaymob/swaymob_timer.PNG'}
        alt="Sway Mobile Guided"
        className="rounded-xl shadow-lg absolute left-[70%] top-[35%] w-[28%]"
      />
      <img
        src={'/cardImages/swaymob/swaymob_onboard.PNG'}
        alt="Sway Mobile Profile"
        className="rounded-xl shadow-lg absolute left-[38%] top-[20%] w-[28%]"
      />
    </WorkCard>
  )
}

export const YardCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#af2e57] to-[#2b2a60]'} id={id}>
      <span />
    </WorkCard>
  )
}

export const WhiskCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#f9ffdc] to-[#8f819f]'} id={id}>
      <span />
    </WorkCard>
  )
}

export const TastebookCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#be3bbd] to-[#b9e8ba]'} id={id}>
      <span />
    </WorkCard>
  )
}
export const ClubCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#5e36b6] to-[#a86911]'} id={id}>
      <span />
    </WorkCard>
  )
}
export const FeedingFrenzyCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#bc5d67] to-[#d6a3c0]'} id={id}>
      <span />
    </WorkCard>
  )
}
export const PortfolioCard = ({ id }) => {
  return (
    <WorkCard gradient={'from-transparent via-[#6e391d] to-[#30ffc9]'} id={id}>
      <span />
    </WorkCard>
  )
}
