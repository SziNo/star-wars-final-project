import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/Button'
import { questions } from '../helpers'
import { MandalorianGrogu } from '../assets/images'

const Help = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <section className="flex flex-col gap-4 p-4 bg-white">
      <h1 className="font-bold text-2xl underline">Q&A</h1>

      <div className="flex max-sm:flex-col-reverse">
        <ul className="md:w-[60%] w-full flex flex-col gap-4 p-4">
          {questions.map((item, index) => (
            <li key={item.id}>
              <Button
                className="text-xl font-semibold mb-2 text-left"
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              >
                {item.question}
              </Button>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.p
                    className="mb-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      height: { duration: selectedIndex === index ? 0.6 : 0.2 },
                    }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="md:w-[40%] w-full p-2">
          <img
            src={MandalorianGrogu}
            alt="Grogu with Mandalorian"
            loading="lazy"
            className="w-full h-[50vh] object-cover rounded"
          />
        </div>
      </div>

      <p className="font-semibold text-center md:py-4 py-1">
        In case you haven&apos;t found answers to your conerns and need further assistance, then feel free to{' '}
        <Link to="/contacts" className="underline text-blue-500">
          get in touch
        </Link>{' '}
        with us!
      </p>
    </section>
  )
}

export default Help
