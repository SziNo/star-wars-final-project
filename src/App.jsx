import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer, Spinner } from './components'

const LandingPageWithMeteors = lazy(() => import('./HOC/MeteorBackgroundWrapper'))
const Episodes = lazy(() => import('./pages/Episodes'))
const Characters = lazy(() => import('./pages/Characters'))
const Planets = lazy(() => import('./pages/Planets'))
const Species = lazy(() => import('./pages/Species'))
const Vehicles = lazy(() => import('./pages/Vehicles'))
const Starships = lazy(() => import('./pages/Starships'))
const SinglePage = lazy(() => import('./pages/SinglePage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Help = lazy(() => import('./pages/Help'))

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow md:px-16 p-4 bg-custom-black">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<LandingPageWithMeteors />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/episodes/:id" element={<SinglePage />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<SinglePage />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/planets/:id" element={<SinglePage />} />
              <Route path="/species" element={<Species />} />
              <Route path="/species/:id" element={<SinglePage />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/vehicles/:id" element={<SinglePage />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/starships/:id" element={<SinglePage />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
