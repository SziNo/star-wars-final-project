import { useGetPlanetByIdQuery } from '../../features/apiSlice'
import { DetailRow, Spinner, Error } from '../../components'

export const SinglePlanetDetail = ({ id }) => {
  const { data, isLoading, isError } = useGetPlanetByIdQuery(id)

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
          <DetailRow label={'Rotation period'} value={data.rotation_period} />
          <DetailRow label={'Orbital period'} value={data.orbital_period} />
          <DetailRow label={'Diameter'} value={data.diameter} />
          <DetailRow label={'Climate'} value={data.climate} />
          <DetailRow label={'Gravity'} value={data.gravity} />
          <DetailRow label={'Terrain'} value={data.terrain} />
          <DetailRow label={'Surface water'} value={data.surface_water} />
          <DetailRow label={'Population'} value={data.population} />
          <DetailRow label={'Residents'} value={data.residents} />
          <DetailRow label={'Films'} value={data.films} />
        </div>
      </div>
    </article>
  )
}
