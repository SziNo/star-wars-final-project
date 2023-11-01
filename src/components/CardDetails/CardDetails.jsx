import { EpisodeDetails, CharacterDetails, PlanetDetails, SpecieDetails, VehicleAndStarshipsDetails } from './'
import PropTypes from 'prop-types'

export const CardDetails = ({ type, item }) => {
  switch (type) {
    case 'episodes':
      return <EpisodeDetails item={item} />
    case 'characters':
      return <CharacterDetails item={item} />
    case 'planets':
      return <PlanetDetails item={item} />
    case 'species':
      return <SpecieDetails item={item} />
    case 'vehicles':
    case 'starships':
      return <VehicleAndStarshipsDetails item={item} />
    default:
      return null
  }
}

CardDetails.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}
