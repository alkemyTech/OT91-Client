import { Fragment } from 'react'
import TableEditable from './EditableTable'

const CategoriesList = () => {
  const mockCategories = [
    { id: 1, name: 'Name Category 1', createdAt: '2021-11-04T14:41:13.948Z' },
    { id: 2, name: 'Name Category 2', createdAt: '2021-11-04T14:42:11.957Z' },
    { id: 3, name: 'Name Category 3', createdAt: '2021-11-04T14:42:30.863Z' },
  ]
  const handleEditClick = () => {}
  const handleDeleteClick = () => {}

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockCategories.map((category) => (
            <Fragment>
              <TableEditable
                element={category}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default CategoriesList
