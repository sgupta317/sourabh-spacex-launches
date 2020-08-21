import FilterButton from '../FilterButton'

export default function LeftNav({ data, filterHandler, selectedFilters }) {
  const years = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ]

  return (
    <>
      <h5>Filters</h5>
      <div className="filter-group">
        <h6>Launch Year</h6>
        <div className="button-group">
          {years.map((year, index) => (
            <FilterButton
              key={index}
              clickHandler={filterHandler}
              name="launch_year"
              value={year}
              className={year === selectedFilters.launch_year ? 'selected' : ''}
            />
          ))}
        </div>
        <h6>Successfull Launch</h6>
        <div className="button-group">
          <FilterButton
            clickHandler={filterHandler}
            name="launch_success"
            value="true"
            className={
              'true' == selectedFilters.launch_success ? 'selected' : ''
            }
          />
          <FilterButton
            clickHandler={filterHandler}
            name="launch_success"
            value="false"
            className={
              'false' == selectedFilters.launch_success ? 'selected' : ''
            }
          />
        </div>

        <h6>Successfull Landing</h6>
        <div className="button-group">
          <FilterButton
            clickHandler={filterHandler}
            name="land_success"
            value="true"
            className={'true' == selectedFilters.land_success ? 'selected' : ''}
          />
          <FilterButton
            clickHandler={filterHandler}
            name="land_success"
            value="false"
            className={
              'false' == selectedFilters.land_success ? 'selected' : ''
            }
          />
        </div>
      </div>
    </>
  )
}
