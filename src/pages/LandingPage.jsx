import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GroguImage } from '../assets/images'

const LandingPage = () => {
  return (
    <section className="h-[75vh] flex flex-col items-center justify-around md:gap-6 gap-2 p-8 md:text-xl text-xs text-custom-yellow font-star-wars">
      <motion.p initial={{ y: 275, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 5, delay: 1 }}>
        A long time ago in a variable far, far away, React components were born. They brought balance to the Front-End
        universe. But remember, the source code can have a strong influence on the developers, it&apos;s said to be as
        alluring as the Dark Side, leading to a phenomenon known as JavaScript fatigue. Some say it&apos;s a more
        seductive version of JavaScript… but not stronger...
      </motion.p>
      <motion.p initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 5, delay: 6 }}>
        CSS, much like the Sith in the Star Wars universe, can be a formidable adversary. Powerful and seductive, yet it
        can lead to frustration and confusion. Mastering CSS is akin to overcoming the Dark Side - it requires patience,
        practice, and a deep understanding of its intricacies. But fear not, for every Sith Lord, there&apos;s a Jedi
        ready to rise. With the right mindset and tools, we can conquer CSS, just as Darth Vader was ultimately
        defeated. So let&apos;s embark on this epic journey together, and may the source be with you...
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, delay: 11 }}
        className="flex items-center justify-evenly gap-4"
      >
        <div className="md:block hidden w-[15%]">
          <img src={GroguImage} alt="Baby Yoda" className="object-cover" />
        </div>

        <Link
          to="/episodes"
          className="px-4 py-2 mt-4 rounded text-custom-yellow bg-custom-black  hover:text-custom-black hover:bg-custom-yellow ring-1 ring-custom-yellow inline-flex items-center transform transition-all duration-300 hover:scale-95"
        >
          Begin your journey
        </Link>

        <div className="md:block hidden w-[15%]">
          <img src={GroguImage} alt="Baby Yoda" className="object-cover transform scale-x-[-1]" />
        </div>
      </motion.div>
    </section>
  )
}

export default LandingPage
