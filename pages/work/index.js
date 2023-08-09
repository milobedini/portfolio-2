import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { fadeIn } from '../../variants'
import { motion } from 'framer-motion'

const Work = () => {
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
              className="h2 xl:mt-12"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ex impedit hic asperiores, autem cumque non delectus ducimus
              similique laborum, quod architecto praesentium labore est, aliquid
              repellat minus cum at.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Work
