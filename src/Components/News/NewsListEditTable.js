import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { NewsTableRows } from "./NewsTableRows";
import { createNewsObject } from "../../Utils/formatters";

const newsList = [
    createNewsObject('Novedad 1', 'https://bit.ly/3GRp1al', new Date()),
    createNewsObject('Novedad 2', 'https://bit.ly/3GRp1al', new Date()),
    createNewsObject('Novedad 3', 'https://bit.ly/3GRp1al', new Date())
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
                <NewsTableRows newsList={newsList} />
            </TableBody>
        </Table>
    </TableContainer>
    </>
    )
}

export default NewsListEditTable;
