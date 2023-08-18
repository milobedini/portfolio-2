import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const Avatar = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      exit={'hidden'}
      className="hidden xl:flex xl:max-w-none"
    >
      <Image
        src={'/avatar.webp'}
        width={737}
        height={678}
        alt="Milo"
        className="translate-z-0 w-full h-full"
      />
    </motion.div>
  )
}

export default Avatar
