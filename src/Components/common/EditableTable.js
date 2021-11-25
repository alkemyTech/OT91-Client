import {  IconButton, TableCell } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
const EditableTable = ({ element, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.createdAt}</td>

      <td>
          <IconButton onClick={(event) => handleEditClick(event, contact)}><Edit/> </IconButton>
          <IconButton onClick={() => handleDeleteClick(contact.id)}><Delete/> </IconButton>
      </td>
    </tr>
  )
}

export default EditableTable
