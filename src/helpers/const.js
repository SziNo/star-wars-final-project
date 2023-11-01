// Number of Meteors we'd like to have in the HOC
export const meteors = new Array(60).fill(true)

// Max limit for pages
export const itemsPerPage = 6
export const itemsPerPageForCharacters = 5

// Transitions
export const cardTransition = 0.2

// Base URL
export const BASE_URL = 'http://localhost:3004'

// Endpoints
export const EPISODES = 'episodes'
export const FILMS = 'films'
export const CHARACTERS = 'characters'
export const PLANETS = 'planets'
export const SPECIES = 'species'
export const VEHICLES = 'vehicles'
export const STARSHIPS = 'starships'
export const CONTACTS = 'contacts'

// HTTP methods
export const POST = 'POST'

// Questions for Help component
export const questions = [
  {
    id: 1,
    question: "Why can't I find my favorite character?",
    answer:
      "The Force is strong, but our database might not be. If you can't find your favorite character, it's possible they're on a secret mission in a galaxy far, far away. Try again later when they've returned from saving the universe.",
  },
  {
    id: 2,
    question: "I clicked on a planet and nothing happened. What's wrong?",
    answer:
      'Our hyperdrive might be malfunctioning. We apologize for any inconvenience. Our team of dedicated droids is working hard to fix it. In the meantime, try refreshing your browser or clearing your cache.',
  },
  {
    id: 3,
    question: 'Why does everything look weird on my screen?',
    answer:
      "It's possible that you've accidentally switched your settings to display in Huttese or Wookieespeak. Check your language settings and make sure they're set to a language you understand.",
  },
  {
    id: 4,
    question: "Why can't I log in to my account?",
    answer: 'You might have encountered an Imperial blockade. Try using the Force… or resetting your password.',
  },
  {
    id: 5,
    question: 'How can I contact customer service?',
    answer:
      "You can contact our customer service team via email or phone. Don't worry, we won't let any Stormtroopers answer your call.",
  },
  {
    id: 6,
    question: 'Is it safe to use my credit card on your website?',
    answer: 'Absolutely! Our website is more secure than the Death Star plans.',
  },
  {
    id: 7,
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship all over the galaxy! However, please note that shipping to Hoth may incur additional charges due to extreme weather conditions.',
  },
]

// Dropdown options
export const dropdownOptions = {
  episodes: [
    { value: 'release_date', label: 'Date' },
    { value: 'name', label: 'Name' },
    { value: 'id', label: 'Episode' },
  ],
  vehicles: [
    { value: 'vehicle_name', label: 'Name' },
    { value: 'cost_in_credits', label: 'Cost in Credits' },
  ],
  starships: [
    { value: 'name', label: 'Name' },
    { value: 'cost_in_credits', label: 'Cost in Credits' },
  ],
}
