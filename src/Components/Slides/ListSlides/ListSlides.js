import {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  'title','image','order'
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({target}) => {
    setRowsPerPage(+target.value);
    setPage(0);
  };

  useEffect(() => {
    setItems([...items].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
  }, [page])

  return (
    <Paper >
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((e,i) => {
                return (
                  <TableRow key={i}>
                    {columns.map((column,i) => {
                      return (
                        <TableCell key={i}>
                          {e[column]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
