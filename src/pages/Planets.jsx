import { useState } from 'react'
import { useGetPlanetsWithPaginationQuery } from '../features/apiSlice'
import { CardList } from '../components/CardDetails'
import { Spinner, Error } from '../components'
import { useLocation } from 'react-router-dom'

const Planets = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { pathname } = useLocation()
  const [type] = pathname.split('/').filter(Boolean)

  const {
    data: { data: currentPageData, total } = {},
    isLoading,
    isError,
  } = useGetPlanetsWithPaginationQuery(currentPage)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  return (
    <section className="flex flex-col p-4 bg-white">
      <h1 className="text-xl font-semibold">Planets</h1>

      <CardList data={currentPageData} totalItems={total} setCurrentPage={setCurrentPage} type={type} />
    </section>
  )
}

export default Planets
