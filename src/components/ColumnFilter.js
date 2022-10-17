import React from 'react'

export const ColumnFilter = ({column}) => { // destructure column prop
  const {filterValue, setFilter} = column; // destructure filter value and setter for the same
  return (
    <span>
      Search : {' '}
      <input value= {filterValue || ''} onChange= {e => setFilter(e.target.value)}/>
    </span>
  )
}
