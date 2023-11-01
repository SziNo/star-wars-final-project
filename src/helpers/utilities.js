import { itemsPerPage, itemsPerPageForCharacters, FILMS, CHARACTERS, VEHICLES, STARSHIPS } from '.'

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const formatCapitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`

// Api slice helpers
export const createPaginationAndSortingEndpoint = (builder, type) => {
  return builder.query({
    query: (arg) => {
      const page = typeof arg === 'object' ? arg.page : arg
      const sortOption = typeof arg === 'object' ? arg.sortOption : undefined
      const url = `${type}?_page=${page}&_limit=${type === CHARACTERS ? itemsPerPageForCharacters : itemsPerPage}`
      const sorting = sortOption && [FILMS, VEHICLES, STARSHIPS].includes(type) ? `&_sort=${sortOption}&_order=asc` : ''
      return `${url}${sorting}`
    },
    transformResponse: (response, meta) => {
      const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
      return { data: response, total }
    },
  })
}

export const createSinglePageEndpoint = (builder, type) => {
  return builder.query({
    query: (id) => `${type}/${id}`,
  })
}

export const createMutation = (builder, url, method) => {
  return builder.mutation({
    query: (query) => ({
      url,
      method,
      body: query,
    }),
  })
}
