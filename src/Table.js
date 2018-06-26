import React from 'react'
import classNames from 'classnames'
import DOMPurify from 'dompurify'

import './style.css'

const TableComponent = ({ tableHeaderData, tableContentData, tableTheme, tableBorder, tableStriped, tableHover }) => {

  let tableClass = classNames ({
    table: true,
    'table-dark': tableTheme == 'dark',
    'table-borderless': tableBorder == false,
    'table-striped': tableStriped == true,
    'table-hover': tableHover == true
  })

  return (
    <div className="table-responsive">
      <table className={tableClass}>
        <thead>
          <tr>
            {tableHeaderData.map((data, index) => {
              return (
                <th
                  key={index}
                  scope="col"
                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.data)}}>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tableContentData.map((data, index) => {
            return (
              <tr>
                {data.content.map((data, index) => {
                  return (
                    <td
                      dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.data)}}>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent