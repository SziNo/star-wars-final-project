import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import '@testing-library/jest-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/apiSlice'
import { App } from './App'

const FILMS_URL = 'http://localhost:3004/films?_sort=&_limit=10&_page=1'
const CHARACTERS_URL = 'http://localhost:3004/characters?_sort=&_limit=10&_page=1'

const mockFilms = [
  {
    name: 'The Phantom Menace',
    src: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
    id: 1,
    opening_crawl:
      'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '1999-05-19',
    characters: [
      {
        id: 2,
        name: 'C-3PO',
      },
      {
        id: 3,
        name: 'R2-D2',
      },
      {
        id: 10,
        name: 'Obi-Wan Kenobi',
      },
      {
        id: 11,
        name: 'Anakin Skywalker',
      },
    ],
    planets: [
      {
        id: 1,
        name: 'Tatooine',
      },
      {
        id: 8,
        name: 'Naboo',
      },
      {
        id: 9,
        name: 'Coruscant',
      },
    ],
    starships: [
      {
        id: 10,
        name: 'Millennium Falcon',
      },
      {
        id: 11,
        name: 'Y-wing',
      },
      {
        id: 12,
        name: 'X-wing',
      },
    ],
    vehicles: [
      {
        id: 4,
        name: 'Sand Crawler',
      },
      {
        id: 6,
        name: 'T-16 skyhopper',
      },
      {
        id: 7,
        name: 'X-34 landspeeder',
      },
      {
        id: 8,
        name: 'TIE/LN starfighter',
      },
    ],
    species: [
      {
        id: 1,
        name: 'Human',
      },
      {
        id: 2,
        name: 'Droid',
      },
      {
        id: 6,
        name: "Yoda's species",
      },
      {
        id: 10,
        name: 'Neimodian',
      },
      {
        id: 11,
        name: 'Gungan',
      },
      {
        id: 12,
        name: 'Toydarian',
      },
      {
        id: 13,
        name: 'Dug',
      },
      {
        id: 14,
        name: "Twi'lek",
      },
    ],
    created: '2014-12-19T16:52:55.740000Z',
    edited: '2014-12-20T10:54:07.216000Z',
  },
]

const mockCharacters = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    src: 'https://www.indyturk.com/sites/default/files/styles/800x600/public/article/main_image/2021/04/21/642721-1341902460.png?itok=HigdQPaH',
    homeworld: [
      {
        id: 1,
        name: 'Tatooine',
      },
    ],
    films: [
      {
        id: 4,
        name: 'A New Hope',
      },
      {
        id: 5,
        name: 'The Empire Strikes Back',
      },
      {
        id: 6,
        name: 'Return of the Jedi',
      },
      {
        id: 3,
        name: 'Revenge of the Sith',
      },
    ],
    species: [],
    vehicles: [
      {
        id: 14,
        name: 'Snowspeeder',
      },
      {
        id: 12,
        name: 'Imperial Speeder Bike',
      },
    ],
    starships: [
      {
        id: 12,
        name: "X-wing'",
      },
      {
        id: 6,
        name: "Imperial shuttle'",
      },
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
  },
]

vi.mock('axios')

axios.get.mockImplementation((url) => {
  if (url === FILMS_URL) {
    return Promise.resolve({
      status: 200,
      data: mockFilms,
      headers: {
        'x-total-count': 0,
      },
    })
  } else if (url === CHARACTERS_URL) {
    return Promise.resolve({
      status: 200,
      data: mockCharacters,
      headers: {
        'x-total-count': 1,
      },
    })
  } else {
    return Promise.resolve({
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

global.fetch = vi.fn((url) => {
  if (url === FILMS_URL) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilms),
      headers: new Headers({
        'x-total-count': 0,
      }),
    })
  } else if (url === CHARACTERS_URL) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCharacters),
      headers: new Headers({
        'x-total-count': 1,
      }),
    })
  } else {
    return Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

describe('App', () => {
  it('navigates between pages and displays data', async () => {
    const user = userEvent.setup()
    render(
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    )

    // Simulate navigation to Characters page
    await user.click(screen.getAllByText('Characters')[0])
    // expect(screen.url()).toBe('/about')

    // Wait for characters data to be loaded
    await waitFor(() => {
      const charactersNavLink = screen.getAllByText('Characters')[0]
      const charactersTitle = screen.getAllByText('Characters')[0]
      expect(charactersNavLink).toBeInTheDocument()
      expect(charactersTitle).toBeInTheDocument()
    })

    // Simulate navigation to a detailed character page
    await waitFor(() => {
      const cardTitle = screen.getByText('Luke Skywalker')
      expect(cardTitle).toBeInTheDocument()
    })
  })
})
