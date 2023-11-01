import { useState } from 'react'
import { Button } from './Button'
import PropTypes from 'prop-types'

export const ShowMore = ({ items }) => {
  const [showAll, setShowAll] = useState(false)

  if (!Array.isArray(items) || items.length === 0) return 'N/A'

  const handleClick = () => {
    setShowAll((prevValue) => !prevValue)
  }

  const displayedItems = showAll ? items : items.slice(0, 3)
  const data = displayedItems.map((item) => item.name)

  return (
    <div className="flex flex-wrap gap-1">
      <span>{data.join(', ')}</span>
      {items.length > 3 && (
        <Button className="text-custom-dark-yellow font-bold whitespace-nowrap" onClick={handleClick}>
          {showAll ? 'Show Less...' : 'Show More...'}
        </Button>
      )}
    </div>
  )
}

ShowMore.propTypes = {
  items: PropTypes.array.isRequired,
}
