import React, { useEffect } from 'react'
import { workSlides } from '../WorkSlider'
import { motion, stagger, useAnimate } from 'framer-motion'
import { fadeIn } from '../../variants'
import WorkTitle from './WorkTitle'
import Visual from './Visual'
import { useWorkStore } from './store'
import { useHidePageOverflow } from './toggle-page-overflow'
import { useEscapePress } from './use-scape-press'
import { HiArrowDown } from 'react-icons/hi'

const WorkAlt = () => {
  const [scope, animate] = useAnimate()
  const fullscreenWork = useWorkStore((state) => state.fullscreenWork)
  const lastFullscreenWork = useWorkStore((state) => state.lastFullscreenWork)
  const setFullscreenWork = useWorkStore((state) => state.setFullscreenWork)

  const onEscapePress = () => {
    if (fullscreenWork) {
      setFullscreenWork(null)
    }
  }

  useEscapePress(onEscapePress)
  useHidePageOverflow(!!fullscreenWork)

  useEffect(() => {
    if (fullscreenWork) {
      animate([
        [
          '.work-title',
          {
            opacity: 0,
            x: '-200px',
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
          },
        ],
        [
          `.visual-${lastFullscreenWork}`,
          {
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto',
          },
          {
            at: '<',
          },
        ],
        ['.active-card .gradient', { opacity: 0, scale: 0 }, { at: '<' }],
        ['.active-card .show-me-btn', { opacity: 0 }, { at: '<' }],
        [
          '.back-to-site-btn',
          { opacity: 1, y: '0px' },
          { at: '<', duration: 0.3 },
        ],
      ])
    } else {
      animate([
        [
          '.work-title',
          {
            opacity: 1,
            x: '0px',
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
          },
        ],
        [
          `.visual-${lastFullscreenWork}`,
          {
            opacity: 0,
            scale: 0.75,
            pointerEvents: 'none',
          },
          {
            at: '<',
          },
        ],
        ['.active-card .gradient', { opacity: 1, scale: 1 }, { at: '<' }],
        [
          '.back-to-site-btn',
          { opacity: 0, y: '300px' },
          { at: '<', duration: 0.3 },
        ],
        ['.active-card .show-me-btn', { opacity: 1 }],
      ])
    }
  }, [fullscreenWork, animate, lastFullscreenWork])

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero Equivalent */}
      <div>
        <motion.h2
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit={'hidden'}
          className="h2 pt-32"
        >
          My work <span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          exit={'hidden'}
          className="max-w-[400px] mx-auto lg:mx-8"
        >
          Take a look at my completed and ongoing projects by scrolling down.
        </motion.p>
        <HiArrowDown className="absolute text-6xl top-80 text-accent" />
      </div>

      <div ref={scope}>
        {workSlides.map((item) => {
          return <Visual key={item.id} id={item.id} />
        })}
        <button
          className="back-to-site-btn bg-black text-white px-4 py-2 rounded-full shadow-lg opacity-0
           translate-y-[300%] fixed bottom-32 left-1/2 -translate-x-1/2 z-10"
          onClick={() => setFullscreenWork(null)}
        >
          Back to site
        </button>
        <div className="flex w-full items-start mt-[-25vh]">
          <div className="w-full py-[50vh]">
            <ul>
              {workSlides.map((item) => {
                return (
                  <li key={item.id}>
                    <WorkTitle id={item.id}>{item.title}</WorkTitle>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="w-full sticky top-0 h-screen flex items-center">
            <div
              className="w-full aspect-square  rounded-2xl relative 
            [&:has(>_.active-card)]:bg-transparent"
            >
              {workSlides.map((item) => {
                return <item.card id={item.id} key={item.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkAlt
