import React from 'react'
import classNames from 'classnames'
import DOMPurify from 'dompurify'

import './style.css'

const TableComponent = ({ TableHeaderData, TableContentData, TableTheme, TableBorder, TableStriped, TableHover }) => {

  let tableClass = classNames ({
    table: true,
    'table-dark': TableTheme == 'dark',
    'table-borderless': TableBorder == false,
    'table-striped': TableStriped == true,
    'table-hover': TableHover == true
  })

  return (
    <div className="table-responsive">
      <table className={tableClass}>
        <thead>
          <tr>
            {TableHeaderData.map((data, index) => {
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
          {TableContentData.map((data, index) => {
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