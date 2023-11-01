import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  createSinglePageEndpoint,
  createPaginationAndSortingEndpoint,
  createMutation,
  BASE_URL,
  FILMS,
  CHARACTERS,
  PLANETS,
  SPECIES,
  VEHICLES,
  STARSHIPS,
  CONTACTS,
  POST,
} from '../helpers'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getFilmById: createSinglePageEndpoint(builder, FILMS),
    getFilmsWithPaginationAndSorting: createPaginationAndSortingEndpoint(builder, FILMS),
    getCharacterById: createSinglePageEndpoint(builder, CHARACTERS),
    getCharactersWithPagination: createPaginationAndSortingEndpoint(builder, CHARACTERS),
    getPlanetById: createSinglePageEndpoint(builder, PLANETS),
    getPlanetsWithPagination: createPaginationAndSortingEndpoint(builder, PLANETS),
    getSpeciesById: createSinglePageEndpoint(builder, SPECIES),
    getSpeciesWithPagination: createPaginationAndSortingEndpoint(builder, SPECIES),
    getVehicleById: createSinglePageEndpoint(builder, VEHICLES),
    getVehiclesWithPaginationAndSorting: createPaginationAndSortingEndpoint(builder, VEHICLES),
    getStarshipById: createSinglePageEndpoint(builder, STARSHIPS),
    getStarshipsWithPaginationAndSorting: createPaginationAndSortingEndpoint(builder, STARSHIPS),
    postContact: createMutation(builder, CONTACTS, POST),
  }),
})

export const {
  useGetFilmByIdQuery,
  useGetFilmsWithPaginationAndSortingQuery,
  useGetCharacterByIdQuery,
  useGetCharactersWithPaginationQuery,
  useGetPlanetByIdQuery,
  useGetPlanetsWithPaginationQuery,
  useGetSpeciesByIdQuery,
  useGetSpeciesWithPaginationQuery,
  useGetVehicleByIdQuery,
  useGetVehiclesWithPaginationAndSortingQuery,
  useGetStarshipByIdQuery,
  useGetStarshipsWithPaginationAndSortingQuery,
  usePostContactMutation,
} = apiSlice
