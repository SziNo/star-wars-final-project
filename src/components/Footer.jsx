import { Link } from 'react-router-dom'
import { footerLinks } from '../helpers'

export const Footer = () => {
  return (
    <footer className="flex justify-between md:py-6 py-3 md:px-16 px-8 bg-custom-gray text-white font-sans md:text-base text-xs">
      <span className="text-custom-light-gray">&copy; 2023 Grogu LLC</span>
      <ul className="flex md:gap-6 gap-1">
        {footerLinks.map((link) => (
          <li key={link.name} className="flex">
            <Link to={link.path} className="flex items-center hover:text-custom-yellow">
              <span className="ml-2 ">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
