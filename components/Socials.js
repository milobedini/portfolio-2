import Link from 'next/link'
import { RiFacebookLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 lg:text-3xl text-lg">
      <Link
        href={'http://www.linkedin.com/in/milo-bedini/'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://github.com/milobedini'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link> */}
    </div>
  )
}

export default Socials
