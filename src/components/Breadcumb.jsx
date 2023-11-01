import { Link, useLocation } from 'react-router-dom'
import { formatCapitalize } from '../helpers'
import { RxSlash } from 'react-icons/rx'

export const Breadcrumb = () => {
  const { pathname } = useLocation()
  const pathnames = pathname.split('/').filter(Boolean)

  return (
    <div className="flex items-center font-bold text-custom-light-gray">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return (
          <span className="flex items-center" key={to}>
            {index > 0 && <RxSlash />}
            <Link className={index === 0 ? 'text-custom-dark-yellow' : ''} to={to}>
              {formatCapitalize(value)}
            </Link>
          </span>
        )
      })}
    </div>
  )
}
