import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'; // import usePagination
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // destructure page instead of rows
    nextPage, // onclick handlers for next page and previouse page
    previousPage,
    canPreviousPage, // to check if we can move to prev page or it exists or not
    canNextPage, // to check if we can move to next page or it exists or not,
    pageOptions, // to get the total number of page
    state, // current state of the table
    prepareRow
  } = useTable({
    columns,
    data
  },
  usePagination); // pass usePagination to useTable

  // to get the current page index
  const { pageIndex } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {  // iterate over page
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous Page
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next Page
      </button>
    </>
  )
}