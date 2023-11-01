import { useGetSpeciesByIdQuery } from '../../features/apiSlice'
import { DetailRow, Spinner, Error } from '../../components'
import { GroguForce } from '../../assets/images'

export const SingleSpecieDetail = ({ id }) => {
  const { data, isLoading, isError } = useGetSpeciesByIdQuery(id)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  return (
    <article className="flex flex-col md:flex-row gap-4 p-6 shadow-lg overflow-hidden">
      <div className="w-full md:w-1/3 min-w-[150px]">
        <img
          src={data.src || GroguForce}
          alt={data.name}
          className="w-full max-w-xs h-auto object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col px-6">
        <h2 className="mb-4 font-bold text-xl">{data.name}</h2>
        <div className="flex flex-col gap-2 ">
          <DetailRow label={'Classification'} value={data.classification} />
          <DetailRow label={'Designation'} value={data.designation} />
          <DetailRow label={'Average height'} value={data.average_height} />
          <DetailRow label={'Skin colors'} value={data.skin_colors} />
          <DetailRow label={'Hair colors'} value={data.hair_colors} />
          <DetailRow label={'Eye colors'} value={data.eye_colors} />
          <DetailRow label={'Average lifespan'} value={data.average_lifespan} />
          <DetailRow label={'Homeworld'} value={data.homeworld} />
          <DetailRow label={'Language'} value={data.language} />
          <DetailRow label={'Films'} value={data.films} />
        </div>
      </div>
    </article>
  )
}
