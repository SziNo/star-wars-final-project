import { useState } from 'react'
import { useGetStarshipsWithPaginationAndSortingQuery } from '../features/apiSlice'
import { CardList } from '../components/CardDetails'
import { Dropdown, Spinner, Error } from '../components'
import { dropdownOptions } from '../helpers'
import { useLocation } from 'react-router-dom'

const Starships = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('name')
  const { pathname } = useLocation()
  const [type] = pathname.split('/').filter(Boolean)
  const options = dropdownOptions[type]

  const {
    data: { data: currentPageData, total } = {},
    isLoading,
    isError,
  } = useGetStarshipsWithPaginationAndSortingQuery({ page: currentPage, sortOption })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  return (
    <section className="flex flex-col p-4 bg-white">
      <div className="flex items-center justify-between max-sm:flex-col mb-2">
        <h1 className="text-xl font-semibold">Vehicles</h1>
        <Dropdown options={options} sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <CardList data={currentPageData} totalItems={total} setCurrentPage={setCurrentPage} type={type} />
    </section>
  )
}

export default Starships
