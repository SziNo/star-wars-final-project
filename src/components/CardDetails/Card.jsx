import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { cardTransition } from '../../helpers'
import { GroguForce } from '../../assets/images'

const CardComponent = ({ item, type, index, children }) => {
  const { pathname } = useLocation()

  return (
    <motion.li
      className="flex flex-col md:flex-row gap-4 p-6 shadow-lg overflow-hidden"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * cardTransition }}
    >
      <div className="w-full md:w-1/3 min-w-[150px]">
        <img
          src={item.src || item.image || GroguForce}
          alt={item.name}
          className="w-full max-w-xs h-auto object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-1">
        <Link to={`/${type}/${item.id}`}>
          <h2 className="mb-4 font-bold text-lg">
            {pathname === '/episodes' ? `Star Wars: Episode ${item.id} - ${item.name}` : item.name || item.vehicle_name}
          </h2>
        </Link>
        {children}
      </div>
    </motion.li>
  )
}

CardComponent.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export const Card = memo(CardComponent)
