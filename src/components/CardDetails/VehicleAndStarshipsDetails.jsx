import { DetailRow } from '../DetailRow'
import PropTypes from 'prop-types'

export const VehicleAndStarshipsDetails = ({ item }) => (
  <>
    <DetailRow label={'Model'} value={item.model} isCard={true} />
    <DetailRow label={'Manufacturer'} value={item.manufacturer} isCard={true} />
    <DetailRow label={'Cost in credits'} value={item.cost_in_credits} isCard={true} />
  </>
)

VehicleAndStarshipsDetails.propTypes = {
  item: PropTypes.object.isRequired,
}
