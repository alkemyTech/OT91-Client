import { TableRow, TableCell, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { formatDate } from "../../Utils/formatters";
import '../../Styles/Table.css';

const NewsTableRows = ({newsList, onEdit, onDelete}) => {
    return (
        <>
        {newsList.map((news) => (
            <TableRow key={news.name}>
                <TableCell component="th" scope="row">
                    {news.name}
                </TableCell>
                <TableCell align="center">
                    <img className="table-row-image" src={news.image} alt={news.name}/>
                </TableCell>
                <TableCell align="center"> {formatDate(news.createdAt)} </TableCell>
                <TableCell align="center">
                    <IconButton onClick={() => onEdit(news.id)}> <Edit/> </IconButton>
                    <IconButton onClick={() => onDelete(news.id)}> <Delete/> </IconButton>
                </TableCell>
            </TableRow>
        ))}
        </>
    )

}

export { NewsTableRows };
