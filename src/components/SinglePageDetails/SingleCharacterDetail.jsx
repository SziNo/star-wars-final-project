import { useGetCharacterByIdQuery } from '../../features/apiSlice'
import { DetailRow, Spinner, Error } from '../../components'

export const SingleCharacterDetail = ({ id }) => {
  const { data, isLoading, isError } = useGetCharacterByIdQuery(id)

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
        <h2 className="mb-4 font-bold text-xl">{data.name}</h2>
        <div className="flex flex-col gap-2 ">
          <DetailRow label={'Height'} value={data.height} />
          <DetailRow label={'Mass'} value={data.mass} />
          <DetailRow label={'Hair color'} value={data.hair_color} />
          <DetailRow label={'Eye color'} value={data.eye_color} />
          <DetailRow label={'Birth'} value={data.birth_year} />
          <DetailRow label={'Gender'} value={data.gender} />
          <DetailRow label={'Homeworld'} value={data.homeworld} />
          <DetailRow label={'Films'} value={data.films} />
          <DetailRow label={'Species'} value={data.species} />
          <DetailRow label={'Vehicles'} value={data.vehicles} />
          <DetailRow label={'Starships'} value={data.starships} />
        </div>
      </div>
    </article>
  )
}
