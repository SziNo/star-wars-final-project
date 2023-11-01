import { memo } from 'react'
import ReactPaginate from 'react-paginate'
import { Card } from '.'
import { itemsPerPage } from '../../helpers'
import { CardDetails } from '.'
import PropTypes from 'prop-types'

const CardListComponent = ({ data, totalItems, setCurrentPage, type }) => {
  return (
    <div>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {data.map((item, idx) => (
          <Card key={item.id} item={item} type={type} index={idx}>
            <CardDetails type={type} item={item} />
          </Card>
        ))}
      </ul>

      {itemsPerPage < totalItems && (
        <div className="flex justify-center items-center">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(totalItems / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setCurrentPage(selected + 1)}
            containerClassName={'flex justify-center items-center gap-4 mt-3 font-semibold'}
            activeClassName={'active'}
          />
        </div>
      )}
    </div>
  )
}

CardListComponent.propTypes = {
  data: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export const CardList = memo(CardListComponent)
