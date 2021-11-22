import React, { useEffect } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { formatDate } from "../../Utils/formatters";
import "../../Styles/Table.css";
import * as newsActions from "../../app/NewsReducer/newsReducer";
import { useDispatch, useSelector } from "react-redux";

const NewsTableRows = () => {
  const dispatch = useDispatch();

  const onEdit = (id) => dispatch(newsActions.update(id));
  const onDelete = (id) => dispatch(newsActions.deletebyId(id));
  const news = useSelector((state) => state.news.data);

  useEffect(() => {
    news && dispatch(newsActions.getAll());
  }, []);

  return (
    <>
      {news.map((element) => (
        <TableRow key={element.id}>
          <TableCell component="th" scope="row">
            {element.name}
          </TableCell>
          <TableCell align="center">
            <img
              className="table-row-image"
              src={element.image}
              alt={element.name}
            />
          </TableCell>
          <TableCell align="center">{formatDate(element.created_at)}</TableCell>
          <TableCell align="center">
            <IconButton onClick={() => onEdit()}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => onDelete(element.id)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export { NewsTableRows };
