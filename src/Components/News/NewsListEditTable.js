import {Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button, IconButton } from "@material-ui/core";
import { Delete, Edit, AddCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const showDate = date => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const NewsListEditTable = () => {
    const createNews = (name, image, createdAt) => ({name, image, createdAt});

    const rows = [
    createNews('Novedad 1', 'https://bit.ly/3GRp1al', new Date()),
    createNews('Novedad 2', 'https://bit.ly/3GRp1al', new Date()),
    createNews('Novedad 3', 'https://bit.ly/3GRp1al', new Date()),
    ];

    return (
    <>
    <TableContainer>
        <Table size="small" sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Nombre de Novedad</TableCell>
                    <TableCell align="center">Imagen</TableCell>
                    <TableCell align="center">Fecha de creacion</TableCell>
                    <TableCell align="center" >
                        <Button variant="contained" size="small" style={{marginLeft: 'auto'}} endIcon={<AddCircle />} component={Link} to="/backoffice/news/create" color="primary">
                            Crear
                        </Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="center"> <img src={row.image} alt="" style={{maxHeight:'40px'}}/> </TableCell>
                    <TableCell align="center">{showDate(row.createdAt)}</TableCell>
                    <TableCell align="center">
                        <IconButton>
                            <Edit/>
                        </IconButton>
                        <IconButton>
                            <Delete/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
    )
}

export default NewsListEditTable;
