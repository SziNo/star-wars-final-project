import { DetailRow } from '../DetailRow'
import PropTypes from 'prop-types'

export const EpisodeDetails = ({ item }) => (
  <>
    <DetailRow label={'Episode'} value={item.id} isCard={true} />
    <DetailRow label={'Director'} value={item.director} isCard={true} />
    <DetailRow label={'Producer'} value={item.producer} isCard={true} />
    <DetailRow label={'Release Date'} value={item.release_date} isCard={true} />
  </>
)

EpisodeDetails.propTypes = {
  item: PropTypes.object.isRequired,
}
