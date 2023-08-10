/* eslint-disable react/no-unescaped-entities */
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { fadeIn } from '../../variants'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="mb-4 max-w-[400px] mx-auto lg:mx-8"
            >
              I love to code, collaborate and create. Need something developed
              or just fancy a chat? Don't be a stranger and get in touch!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit={'hidden'}
            className="w-full xl:max-w-[65%]"
          >
            {/* SLider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
