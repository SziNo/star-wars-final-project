import { CharacterIcon, EpisodeIcon, PlanetIcon, SpecieIcon, StarshipIcon, VehicleIcon } from '../assets/icons'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa'

export const navLinks = [
  {
    name: 'Episodes',
    path: '/episodes',
    icon: <EpisodeIcon />,
  },
  {
    name: 'Characters',
    path: '/characters',
    icon: <CharacterIcon />,
  },
  {
    name: 'Planets',
    path: '/planets',
    icon: <PlanetIcon />,
  },
  {
    name: 'Species',
    path: '/species',
    icon: <SpecieIcon />,
  },
  {
    name: 'Vehicles',
    path: '/vehicles',
    icon: <VehicleIcon />,
  },
  {
    name: 'Starships',
    path: '/starships',
    icon: <StarshipIcon />,
  },
]

export const footerLinks = [
  {
    name: 'Help',
    path: '/help',
  },
  {
    name: 'Contacts',
    path: '/contacts',
  },
]

export const socialLinks = [
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    href: '#',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    href: '#',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    href: '#',
  },
  {
    name: 'Skype',
    icon: <FaSkype />,
    href: '#',
  },
]
