import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { jb, menu, close } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={'/'}
          className="flex items-center gap-2 "
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={jb} alt="logo" className="w-full h-9 object-contain" />
          {/* <div className="flex items-center gap-3 ml-8 sm:ml-0 sm:justify-center">
            <FaLinkedin className="text-white h-6 w-6" />
            <FaGithub className="text-white h-6 w-6" />
          </div> */}
        </Link>
        <div className="flex md:mr-auto ml-[15vw] md:ml-8 ">
          <a
            href="https://www.linkedin.com/in/milo-bedini/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-white h-6 w-6 mr-2 hover:text-accent" />
          </a>
          <a
            href="https://github.com/milobedini"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-white h-6 w-6 hover:text-accent" />
          </a>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-accent' : 'text-secondary'
              } hover:text-accent text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 
          min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-accent' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
