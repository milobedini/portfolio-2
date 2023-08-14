import '../styles/globals.css'
import Layout from '../components/Layout'
import Transition from '../components/Transition'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout>
      {/* <AnimatePresence mode="sync"> */}
      <motion.div
        key={router.route}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="h-full"
      >
        {/* <Transition /> */}
        <Component {...pageProps} />
      </motion.div>
      {/* </AnimatePresence> */}
    </Layout>
  )
}

export default MyApp
