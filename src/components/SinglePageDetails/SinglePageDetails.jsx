import {
  SingleEpisodeDetail,
  SingleCharacterDetail,
  SinglePlanetDetail,
  SingleSpecieDetail,
  SingleVehicleDetail,
  SingleStarshipDetail,
} from '.'

import { EPISODES, CHARACTERS, PLANETS, SPECIES, VEHICLES, STARSHIPS } from '../../helpers'

export const SinglePageDetails = ({ type, id }) => {
  switch (type) {
    case EPISODES:
      return <SingleEpisodeDetail id={id} />
    case CHARACTERS:
      return <SingleCharacterDetail id={id} />
    case PLANETS:
      return <SinglePlanetDetail id={id} />
    case SPECIES:
      return <SingleSpecieDetail id={id} />
    case VEHICLES:
      return <SingleVehicleDetail id={id} />
    case STARSHIPS:
      return <SingleStarshipDetail id={id} />
    default:
      return null
  }
}
