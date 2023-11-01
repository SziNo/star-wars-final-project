import { DetailRow } from '../DetailRow'
import PropTypes from 'prop-types'

export const SpecieDetails = ({ item }) => (
  <>
    <DetailRow label={'Classification'} value={item.classification} isCard={true} />
    <DetailRow label={'Designation'} value={item.designation} isCard={true} />
  </>
)

SpecieDetails.propTypes = {
  item: PropTypes.object.isRequired,
}
