import React from 'react'
import { workSlides } from './WorkSlider'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import WorkTitle from './WorkTitle'

const WorkAlt = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div>
        {/* Hero Equivalent */}
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
          className="mb-4 max-w-[400px] mx-auto lg:mx-8"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex
          impedit hic asperiores, autem cumque non delectus ducimus similique
          laborum, quod architecto praesentium labore est, aliquid repellat
          minus cum at.
        </motion.p>
      </div>
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {workSlides.slides.map((item) => {
              return item.images.map((image) => {
                return (
                  <li key={image.id}>
                    <WorkTitle id={image.id}>{image.title}</WorkTitle>
                  </li>
                )
              })
            })}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className="w-full aspect-square bg-gray-100 rounded-2xl relative">
            {workSlides.slides.map((item) => {
              return item.images.map((image) => {
                return <image.card id={image.id} key={image.id} />
              })
            })}
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  )
}

export default WorkAlt
