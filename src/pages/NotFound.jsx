import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { DarthVaderIcon } from '../assets/images'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-[75vh] bg-custom-gray text-white">
      <div className="m-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:flex-shrink-0">
          <img
            src={DarthVaderIcon}
            alt="Darth Vader image"
            loading="lazy"
            className="w-full max-w-md max-h-80 object-cover mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="md:text-4xl text-xl mb-4">Page Not Found</h1>
          <p className="mb-4 md:text-xl text-sm">Sorry, the page you&apos;re looking for does not exist.</p>
          <Button
            onClick={() => navigate('/')}
            className="bg-white text-custom-gray px-4 py-2 md:text-xl text-sm rounded transform transition duration-300 hover:scale-95"
          >
            Go to Home Page
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
