const EditableTable = ({ element, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.createdAt}</td>

      <td>
        <button
          type='button'
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type='button' onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default EditableTable
