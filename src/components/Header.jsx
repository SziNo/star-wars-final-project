import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../helpers'
import { StarWarsLogo } from '../assets/images'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Button } from './Button'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prevValue) => !prevValue)
  }

  return (
    <header className="sticky flex justify-between md:py-6 py-3 md:px-16 px-8 bg-custom-black text-white font-sans top-0 z-50">
      <Link to="/">
        <img src={StarWarsLogo} alt="Logo" loading="lazy" className="max-md:w-20" />
      </Link>

      {/* Handle icon render */}
      <div className="md:hidden flex items-center z-10">
        <Button onClick={handleToggle}>{isOpen ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}</Button>
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex md:gap-3 lg:gap-6 md:text-xs lg:text-base">
        {navLinks.map((link) => (
          <li key={link.name} className="flex">
            <NavLink
              to={link.path}
              className="flex items-center hover:text-custom-yellow"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-6 flex items-center">{link.icon}</div>
              <span className="lg:ml-2 ml-1">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile nav */}
      <ul
        className={`fixed top-0 right-0 w-full h-full flex flex-col justify-evenly p-8 bg-custom-black text-center text-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className="flex justify-center items-center my-4">
            <NavLink
              to={link.path}
              className="flex items-center hover:text-custom-yellow"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-6 flex items-center">{link.icon}</div>
              <span className="ml-1">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}
