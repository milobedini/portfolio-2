import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { fadeIn } from '../utils/motion'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <motion.div
          variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
          key={index}
          className="group relative text-6xl text-white hover:text-accent"
        >
          {tech}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full
           bg-black bg-opacity-70 text-accent px-2 py-1 rounded mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
           font-medium text-center capitalize text-base"
          >
            {tech.key}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')
