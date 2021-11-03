import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import '../../../Styles/BackofficeUsers.css'

const createData =(nombre, id, email,) => {
  return { nombre, id, email, };
}
const rows = [
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
const BackofficeUsers = () => {
  return (
     <div className="BackofficeUsers">
         <Button color="primary" variant="contained">
             <Link className="CreateUserLinkBackoffice" to="/backoffice/users/create">Create User</Link>
             </Button>
             <hr></hr>
        <TableContainer component={Paper}>
         <Table sx={{ minWidth: 350 ,}}aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><Button size="small" onClick={handdleEdit}>Editar</Button></TableCell>
              <TableCell align="right"><Button size="small" onClick={handdleDelete} color="error">Eliminar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
        </div>
  );
}
export default BackofficeUsers

