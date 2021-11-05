import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { NewsTableRows } from "./NewsTableRows";
import { createNewsObject } from "../../Services/newsServices";

const onEdit = (id) => console.log(`Editing a news with id:${id}`);
const onDelete = (id) => console.log(`Deleting a news with id:${id}`);

const newsList = [
    createNewsObject(1, 'Novedad 1', 'https://bit.ly/3GRp1al', new Date()),
    createNewsObject(2, 'Novedad 2', 'https://bit.ly/3GRp1al', new Date()),
    createNewsObject(3, 'Novedad 3', 'https://bit.ly/3GRp1al', new Date())
    ];

const NewsListEditTable = () => {
    return (
    <>
    <TableContainer>
        <Table size="small" aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Created At</TableCell>
                    <TableCell align="center">
                        <Button variant="contained" size="small" component={Link} to="/backoffice/news/create" color="primary">
                            Create News
                        </Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <NewsTableRows newsList={newsList} onEdit={onEdit} onDelete={onDelete}/>
            </TableBody>
        </Table>
    </TableContainer>
    </>
    )
}

export default NewsListEditTable;
