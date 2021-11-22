import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NewsTableRows } from "./NewsTableRows";
import { createNewsObject } from "../../Services/newsServices";
import { useDispatch } from "react-redux";
import * as newsActions from "../../app/NewsReducer/newsReducer";
import { useEffect, useSelector } from "react";

const NewsListEditTable = () => {
  const dispatch = useDispatch;
  const news = useSelector((state) => state.news.data);
  const onEdit = (id) => dispatch(newsActions.update(id));
  const onDelete = (id) => dispatch(newsActions.deletebyId(id));
  useEffect(() => {
    dispatch(newsActions.getAll());
  }, []);
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
                <Button
                  variant="contained"
                  size="small"
                  component={Link}
                  to="/backoffice/news/create"
                  color="primary"
                >
                  Create News
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <NewsTableRows
              newsList={news}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NewsListEditTable;
