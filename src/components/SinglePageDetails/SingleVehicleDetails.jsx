import { useGetVehicleByIdQuery } from '../../features/apiSlice'
import { DetailRow, Spinner, Error } from '../../components'

export const SingleVehicleDetail = ({ id }) => {
  const { data, isLoading, isError } = useGetVehicleByIdQuery(id)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  return (
    <article className="flex flex-col md:flex-row gap-4 p-6 shadow-lg overflow-hidden">
      <div className="w-full md:w-1/3 min-w-[150px]">
        <img src={data.image} alt={data.name} className="w-full max-w-xs h-auto object-cover" loading="lazy" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col px-6">
        <h2 className="mb-4 font-bold text-xl">{data.vehicle_name}</h2>
        <div className="flex flex-col gap-2 ">
          <DetailRow label={'Model'} value={data.model} />
          <DetailRow label={'Manufacturer'} value={data.manufacturer} />
          <DetailRow label={'Cost in credits'} value={data.cost_in_credits} />
          <DetailRow label={'Length'} value={data.length} />
          <DetailRow label={'Max atm. speed'} value={data.max_atmosphere_speed} />
          <DetailRow label={'Crew'} value={data.crew} />
          <DetailRow label={'Passengers'} value={data.passengers} />
          <DetailRow label={'Cargo capacity'} value={data.cargo_capacity} />
          <DetailRow label={'Consumables'} value={data.consumables} />
          <DetailRow label={'Vehicle class'} value={data.vehicle_class} />
          <DetailRow label={'Pilots'} value={data.pilots} />
        </div>
      </div>
    </article>
  )
}
