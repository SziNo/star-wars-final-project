import { useParams, useLocation } from 'react-router-dom'
import { Breadcrumb } from '../components'
import { SinglePageDetails } from '../components/SinglePageDetails'

const CharacterDetail = () => {
  const { id } = useParams()
  const { pathname } = useLocation()
  const [type] = pathname.split('/').filter(Boolean)

  return (
    <section className="flex flex-col p-4 bg-white">
      <Breadcrumb />
      <SinglePageDetails type={type} id={id} />
    </section>
  )
}

export default CharacterDetail
