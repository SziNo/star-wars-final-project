import { DetailRow } from '../DetailRow'
import PropTypes from 'prop-types'

export const PlanetDetails = ({ item }) => (
  <>
    <DetailRow label={'Climate'} value={item.climate} isCard={true} />
    <DetailRow label={'Terrain'} value={item.terrain} isCard={true} />
    <DetailRow label={'Population'} value={item.population} isCard={true} />
  </>
)

PlanetDetails.propTypes = {
  item: PropTypes.object.isRequired,
}
