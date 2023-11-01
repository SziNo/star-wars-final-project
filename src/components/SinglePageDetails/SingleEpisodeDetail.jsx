import { useGetFilmByIdQuery } from '../../features/apiSlice'
import { DetailRow, Spinner, Error } from '../../components'
import { formatDate } from '../../helpers'

export const SingleEpisodeDetail = ({ id }) => {
  const { data, isLoading, isError } = useGetFilmByIdQuery(id)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  return (
    <article className="flex flex-col md:flex-row gap-4 p-6 shadow-lg overflow-hidden">
      <div className="w-full md:w-1/3 min-w-[150px]">
        <img src={data.src} alt={data.name} className="w-full max-w-xs h-auto object-cover" loading="lazy" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col px-6">
        <h2 className="mb-4 font-bold text-xl">{`Star Wars: Episode ${data.id} - ${data.name}`}</h2>
        <div className="flex flex-col gap-2 ">
          <DetailRow label={'Episode'} value={data.id} />
          <DetailRow label={'Director'} value={data.director} />
          <DetailRow label={'Producer'} value={data.producer} />
          <DetailRow label={'Release'} value={data.release_date} />
          <DetailRow label={'Characters'} value={data.characters} />
          <DetailRow label={'Planets'} value={data.planets} />
          <DetailRow label={'Starships'} value={data.starships} />
          <DetailRow label={'Vehicles'} value={data.vehicles} />
          <DetailRow label={'Species'} value={data.species} />
          <DetailRow label={'Created'} value={formatDate(data.created)} />
          <DetailRow label={'Edited'} value={formatDate(data.edited)} />
        </div>
        <p className="mt-4 text-sm">{data.opening_crawl}</p>
      </div>
    </article>
  )
}
