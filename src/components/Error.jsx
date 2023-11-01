import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { DarthVaderIcon2 } from '../assets/images'

export const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-[75vh] bg-custom-gray text-white">
      <div className="m-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:flex-shrink-0">
          <img
            src={DarthVaderIcon2}
            alt="Darth Vader image"
            loading="lazy"
            className="w-full max-w-md max-h-80 object-cover mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="md:text-4xl text-xl mb-4">Oops!</h1>
          <p className="mb-4 md:text-xl text-sm">An error occurred while fetching data.</p>
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
