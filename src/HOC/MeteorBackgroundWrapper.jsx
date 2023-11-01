import { Meteors } from '../components/Meteors'
import LandingPage from '../pages/LandingPage'

const MeteorBackgroundWrapper = (Component) => {
  const InnerComponent = (props) => {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Meteors />
        <Component {...props} />
      </div>
    )
  }

  return InnerComponent
}

const LandingPageWithMeteors = MeteorBackgroundWrapper(LandingPage)
export default LandingPageWithMeteors
