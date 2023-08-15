/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import { useWorkStore } from './store'
import { FaNode, FaPython, FaReact } from 'react-icons/fa6'
import {
  SiDjango,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiTypescript,
} from 'react-icons/si'
import Link from 'next/link'

const Visual = ({ id }) => {
  return (
    <div
      className={classNames(
        'fixed inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none overflow-hidden xl:mx-64 md:mx-32 mx-4',
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">
        <VisualDescription id={id} />
        <VisualImage id={id} />
        <div className="flex">
          <VisualTech id={id} />
        </div>
        <VisualLink id={id} />
      </div>
    </div>
  )
}

export const VisualImage = ({ id }) => {
  let src

  switch (id) {
    case 1:
      src = '/visuals/swaymob.png'
      break
    case 2:
      src = '/visuals/sway.png'
      break
    default:
      src = '/visuals/giphy.gif'
  }

  return <img src={src} alt="Loading" className="max-h-[50vh]" />
}

export const VisualDescription = ({ id }) => {
  let description

  switch (id) {
    case 1:
      description =
        'Sway Mobile is a comprehensive full-stack React Native mindfulness mobile app with advanced UI and animations.'
      break
    case 2:
      description =
        'Sway is a full-stack, responsive mindfulness website featuring CRUD operations, utilizing Django (Python) on the backend and React on the frontend. Created 19 unique API endpoints, defined multiple relational database schemas, and implemented custom user authentication, resulting in an engaging user experience.'
      break
    default:
      description =
        "Yard is a full-stack e-commerce website that can process payments. It incorporates a real-time database with cloud functions, and uses React's Context API."
  }

  return <p className="mb-8">{description}</p>
}

export const VisualTech = ({ id }) => {
  let icons

  switch (id) {
    case 1:
      icons = [
        <FaReact key={id} />,
        <SiTypescript key={id} />,
        <FaPython key={id} />,
        <SiDjango key={id} />,
        <SiExpo key={id} />,
      ]
      break
    case 2:
      icons = [
        <FaReact key={id} />,
        <SiTypescript key={id} />,
        <FaPython key={id} />,
        <SiDjango key={id} />,
      ]
      break
    default:
      icons = [
        <FaReact key={id} />,
        <FaPython key={id} />,
        <SiDjango key={id} />,
        <FaNode key={id} />,
        <SiFirebase key={id} />,
        <SiExpress key={id} />,
      ]
  }

  return icons.map((icon, index) => (
    <div key={index} className="my-4 text-2xl text-white mx-2">
      {icon}
    </div>
  ))
}

export const VisualLink = ({ id }) => {
  if (id === 1) {
    return (
      <Link href={''}>
        <p>GH Link</p>
      </Link>
    )
  } else if (id === 2) {
    return (
      <Link href={''} className="z-50">
        GH Link
      </Link>
    )
  } else {
    return (
      <Link href={''} className="z-50">
        GH Link
      </Link>
    )
  }
}

export default Visual
