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
          className="text-6xl text-white hover:text-accent"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')
