import { DetailRow } from '../DetailRow'
import PropTypes from 'prop-types'

export const CharacterDetails = ({ item }) => (
  <>
    <DetailRow label={'Birth'} value={item.birth_year} isCard={true} />
    <DetailRow label={'Gender'} value={item.gender} isCard={true} />
  </>
)

CharacterDetails.propTypes = {
  item: PropTypes.object.isRequired,
}
