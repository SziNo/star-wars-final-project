import { meteors } from '../helpers'

export const Meteors = () => {
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={'meteor' + idx}
          className="meteor-raining"
          style={{
            top: Math.floor(Math.random() * window.innerHeight) + 'px',
            left: Math.floor(Math.random() * window.innerWidth) + 'px',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          }}
        />
      ))}
    </>
  )
}
