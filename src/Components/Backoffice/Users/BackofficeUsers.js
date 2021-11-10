import React from 'react'
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "../../../Styles/BackOfficerUsersTable.css";
import Button from "@material-ui/core/Button/Button";
import { Link } from 'react-router-dom';
// import { createData } from '../../../Services/userServices';

const BackofficeUsers = () => {
    const createData =(nombre, id, email,) => {
        return { nombre, id, email, };
      }
      const Tablerows = [
        createData('Nombre 0', 159, "nombre@alkemy.org",),
        createData('Nombre 1', 237, "nombre@alkemy.org",),
        createData('Nombre 2', 262, "nombre@alkemy.org",),
      ];
      const handdleEdit = () => {
          alert("use this if you need to modificate")
      }
      const handdleDelete = () => {
          alert("use this if you need to delete")
      }
    return (
        <div className="BackofficeUsers">
            <Button color="sucess" variant="contained">
             <Link className="CreateUserLinkBackoffice" to="/backoffice/users/create">Create User</Link>
             </Button>
             <hr></hr>
        <Table className="UsersTable">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Id</Th>
            <Th>Email</Th>
            <Th>Editar</Th>
            <Th>Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
        {Tablerows.map((row) => (
          <Tr>
            <Td>{row.nombre}</Td>
            <Td>{row.id}</Td>
            <Td>{row.email}</Td>
            <Td><Button size="small" onClick={handdleEdit} variant="contained">Editar</Button></Td>
            <Td><Button size="small" onClick={handdleDelete} variant="contained" >Eliminar</Button></Td>
          </Tr>
        ))}
        </Tbody>
      </Table>
      </div>
    )
}

export default BackofficeUsers
