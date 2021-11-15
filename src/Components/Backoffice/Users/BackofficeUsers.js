import React from 'react'
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "../../../Styles/BackOfficerUsersTable.css";
import {Button} from "@mui/material";
import { Link } from 'react-router-dom';
// import { createData } from '../../../Services/userServices';

const BackofficeUsers = () => {
      const UsersTable =[
        {
          "id": 7,
          "email": "michael.lawson@alkemy.org",
          "nombre": "Michael",
        },
        {
          "id": 8,
          "email": "lindsay@alkemy.org",
          "nombre": "Lindsay",
        },
        {
          "id": 9,
          "email": "tobias.funke@alkemy.org",
          "nombre": "Tobias",
        }]
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
        {UsersTable.map((user) => (
          <Tr>
            <Td>{user.nombre}</Td>
            <Td>{user.id}</Td>
            <Td>{user.email}</Td>
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
