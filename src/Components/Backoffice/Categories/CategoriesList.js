import { Fragment } from 'react'
import TableEditable from '../../Assets/EditableTable'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'

const CategoriesList = () => {
  const mockCategories = [
    { id: 1, name: 'Name Category 1', createdAt: '2021-11-04T14:41:13.948Z' },
    { id: 2, name: 'Name Category 2', createdAt: '2021-11-04T14:42:11.957Z' },
    { id: 3, name: 'Name Category 3', createdAt: '2021-11-04T14:42:30.863Z' },
  ]
  const handleEditClick = () => {}
  const handleDeleteClick = () => {}

  return (
    <Container>
      <Link to='/backoffice/categorías/create'>Create a New Category</Link>
      <div className='app-container'>
        <Link to='/backoffice/categorías/create'>Create a New Category</Link>
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
    </Container>
  )
}
export default CategoriesList
