import Link from 'next/link'
import { RiFacebookLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
    </div>
  )
}

export default Socials
