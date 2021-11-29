import { Link } from "react-router-dom";
import TableEditable from "../../common/EditableTable";
import { NewsTableRows } from "../../News/NewsTableRows";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
} from "@mui/material";
import "../../../Styles/TableStyle.css";
import "../../../Styles/Table.css";

const CategoriesList = () => {
  const linkStyle = { textDecoration: "none" };
  const mockCategories = [
    { id: 1, name: "Name Category 1", createdAt: "2021-11-04T14:41:13.948Z" },
    { id: 2, name: "Name Category 2", createdAt: "2021-11-04T14:42:11.957Z" },
    { id: 3, name: "Name Category 3", createdAt: "2021-11-04T14:42:30.863Z" },
  ];
  const handleEditClick = () => {};
  const handleDeleteClick = () => {};

  return (
    <>
     <TitleBackoffice title={"Edición de Categorías"} />
      <Link to="/backoffice/categorías/create" style={linkStyle}>
        Create a New Category
      </Link>
      <TableContainer className="TableContainer">
        <Table className="TableFinal">
          <TableHead className="TableRowModify">
            <TableRow>
              <TableCell align="center" className="TableCell">
                Name
              </TableCell>
              <TableCell align="center" className="TableCell">
                Created At
              </TableCell>
              <TableCell align="center" className="TableCell">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCategories.map((category) => (
              <TableEditable
                element={category}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default CategoriesList;
