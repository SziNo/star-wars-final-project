import { ShowMore } from './ShowMore'
import PropTypes from 'prop-types'

export const DetailRow = ({ label, value, isCard = false }) => (
  <div className={`flex justify-between text-sm ${isCard ? 'max-lg:flex-col' : 'max-sm:flex-col'}`}>
    <span className="text-custom-light-gray w-full sm:w-1/3">{label}:</span>
    <span className="w-full sm:w-2/3 text-left">
      {Array.isArray(value) ? <ShowMore items={value} /> : value !== 0 && !value ? 'N/A' : value}
    </span>
  </div>
)

DetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  isCard: PropTypes.bool,
}
