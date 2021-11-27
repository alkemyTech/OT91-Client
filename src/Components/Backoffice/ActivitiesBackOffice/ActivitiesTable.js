import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showSuccessAlert } from "../../../Utils/alerts";
import "../../../Styles/TableStyle.css";
import { getAll, deleteById } from '../../../app/activitiesReducer/activitiesReducer';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {NewsTableRows} from '../../News/NewsTableRows';
import {Table,TableBody,TableCell,TableContainer,TableHead,Button,TableRow} from "@mui/material";

const ActivitiesTable = () => {
  const history = useHistory();
  const { activities: dataActivity } = useSelector(state => state.activities);
  const dispatch = useDispatch();
  const editData = (id) => history.push(`/activity-detail/${id}`);

  const deleteData = (id) => {
    dispatch(deleteById(id));
    showSuccessAlert("Delete Activity");
  };

  useEffect(() => {
    dispatch(getAll());
  }, [])

  return (
    <>
    <Link
        to="/backoffice/activities/create"
        style={{ textDecoration: "none" }}
      >
        <span className="linkActivity">
          <h1>Create activities</h1>
        </span>
      </Link>
      <TableContainer className="TableContainer">
      <Table className="TableFinal">
        <TableHead className="TableRowModify">
          <TableRow>
            <TableCell className="TableCell"align="center">Name</TableCell>
            <TableCell className="TableCell"align="center">Image</TableCell>
            <TableCell className="TableCell"align="center">CreatedAt</TableCell>
            <TableCell className="TableCell"align="center">updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <NewsTableRows newsList={dataActivity} onDelete={deleteData} onEdit={editData}/>
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
};

export default ActivitiesTable;
