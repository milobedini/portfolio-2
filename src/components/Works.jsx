/* eslint-disable react/no-unescaped-entities */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { useEffect, useState } from 'react'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isBigScreen,
}) => {
  return (
    <>
      {isBigScreen ? (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
              {source_code_link && (
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(source_code_link, '_blank')}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                  {/* LIVE LINK BELOW
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github} 
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div> */}
                </div>
              )}
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ) : (
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, '_blank')}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                {/* LIVE LINK BELOW
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github} 
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div> */}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </div>
      )}
    </>
  )
}

const Works = () => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      {isBigScreen ? (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
      ) : (
        <div>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </div>
      )}

      {isBigScreen ? (
        <div className="w-full flex">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I love to code, collaborate and create. Need something developed or
            just fancy a chat? Don't be a stranger and get in touch! Take a look
            at my completed and ongoing personal projects.
          </motion.p>
        </div>
      ) : (
        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I love to code, collaborate and create. Need something developed or
            just fancy a chat? Don't be a stranger and get in touch! Take a look
            at my completed and ongoing personal projects.
          </p>
        </div>
      )}

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}}`}
            {...project}
            index={index}
            isBigScreen={isBigScreen}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
