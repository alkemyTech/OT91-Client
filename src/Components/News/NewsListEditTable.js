import React, { useEffect } from "react";
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
            <NewsTableRows />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NewsListEditTable;
