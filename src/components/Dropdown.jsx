import PropTypes from 'prop-types'

export const Dropdown = ({ options, sortOption, setSortOption }) => {
  const handleChange = (e) => {
    setSortOption(e.target.value)
  }

  return (
    <div className="flex items-center gap-2 p-1">
      <h2 className="font-semibold text-sm text-custom-light-gray">Sort by:</h2>
      <select
        className="p-1 cursor-pointer text-sm font-semibold bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={sortOption}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option className="font-semibold" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
}
