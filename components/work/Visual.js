/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'
import {
  FaCss3,
  FaGoogle,
  FaHtml5,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
  FaSass,
  FaYelp,
} from 'react-icons/fa6'
import {
  SiDjango,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import Link from 'next/link'

const Visual = ({ id }) => {
  return (
    <div
      className={classNames(
        'fixed inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none  xl:mx-64 md:mx-32 mx-4 z-10',
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
      src = '/visuals/swaymob.gif'
      break
    case 2:
      src = '/visuals/sway.webp'
      break
    case 3:
      src = '/visuals/yard.webp'
      break
    case 4:
      src = '/visuals/whisk.webp'
      break
    case 5:
      src = '/visuals/taste.webp'
      break
    case 7:
      src = '/visuals/feed.webp'
      break
    case 8:
      src = '/visuals/portfolio.webp'
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
    case 3:
      description =
        "Yard is a full-stack e-commerce website that can process payments. It incorporates a real-time database with cloud functions, and uses React's Context API."
      break
    case 4:
      description =
        'Whisk is a React Native food delivery app that utilises Expo, Redux and Firebase, as well as Yelp and Google APIs.'
      break
    case 5:
      description =
        'Tastebook was developed in a team of 3 to build a full-stack MERN app mimicking social media functionality for recipe sharing. My contribution entailed developing features for user interactions, including liking, saving recipes, and generating a custom shopping list, and enhancing the overall user engagement.'
      break
    case 6:
      description =
        'Club is a full-stack web app that allows social sports teams to manage their teams based on their team role.'
      break
    case 7:
      description =
        "Feeding Frenzy is a grid-based game harnessing Vanilla JavaScript, HTML, and CSS. My game was voted the cohort's favourite, demonstrating my ability to create enjoyable user experiences."
      break
    case 8:
      description =
        'My portfolio (this website!) is a Next web application with all the frontend bells and whistles, including Framer Motion.'
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
        <FaPython key={id} />,
        <SiDjango key={id} />,
      ]
      break
    case 3:
      icons = [
        <FaReact key={id} />,
        <SiExpress key={id} />,
        <FaNode key={id} />,
        <SiFirebase key={id} />,
      ]
      break
    case 4:
      icons = [
        <FaReact key={id} />,
        <SiRedux key={id} />,
        <SiFirebase key={id} />,
        <FaYelp key={id} />,
        <FaGoogle key={id} />,
      ]
      break
    case 5:
      icons = [
        <FaReact key={id} />,
        <SiExpress key={id} />,
        <FaNode key={id} />,
        <SiMongodb key={id} />,
      ]
      break
    case 6:
      icons = [
        <FaReact key={id} />,
        <SiDjango key={id} />,
        <SiRedux key={id} />,
        <FaSass key={id} />,
      ]
      break
    case 7:
      icons = [<FaJs key={id} />, <FaHtml5 key={id} />, <FaCss3 key={id} />]
      break
    case 8:
      icons = [
        <SiNextdotjs key={id} />,
        <SiTailwindcss key={id} />,
        <SiFramer key={id} />,
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
