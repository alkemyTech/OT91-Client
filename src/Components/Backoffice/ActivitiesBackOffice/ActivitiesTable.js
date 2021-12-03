import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showSuccessAlert } from "../../../Utils/alerts";
import "../../../Styles/TableStyle.css";
import { getAll, deleteById } from '../../../app/activitiesReducer/activitiesReducer';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {NewsTableRows} from '../../News/NewsTableRows';
import {Table,TableBody,TableCell,TableContainer,TableHead,Button,TableRow,IconButton} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import TitleBackoffice from '../TitleBackoffice'
import { formatDate } from "../../../Utils/formatters";
const ActivitiesTable = () => {
  const history = useHistory();
  const { activities } = useSelector(state => state.activities);
  const dispatch = useDispatch();
  const editData = (id) => history.push(`/backoffice/activities/edit/${id}`);

  const deleteData = (id) => {
    dispatch(deleteById(id));
    showSuccessAlert("Delete Activity");
  };

  useEffect(() => {
    dispatch(getAll());
  }, [])

  return (
    <>
     <TitleBackoffice title={"Edición de Actividades"} />
      <TableContainer className="TableContainer">
      <Table className="TableFinal">
        <TableHead className="TableRowModify">
          <TableRow>
            <TableCell className="TableCell"align="center">Name</TableCell>
            <TableCell className="TableCell"align="center">Image</TableCell>
            <TableCell className="TableCell"align="center">CreatedAt</TableCell>
            <TableCell align="center" className="TableCell">
                  <Button
                    color="buttoncreatenews"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/backoffice/activities/create"
                  >
                    Create Activity
                  </Button>
                </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell component="th" scope="row">
              {activity.name}
            </TableCell>
            <TableCell align="center">
              <img
                className="table-row-image"
                src={activity.image}
                alt={activity.name}
              />
            </TableCell>
            <TableCell align="center">{formatDate(new Date())}</TableCell>
            <TableCell align="center">
              <IconButton onClick={() => editData(activity.id)}>
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => {
                  deleteData(activity.id);
                  newsDeleted();
                }}
              >
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
};

export default ActivitiesTable;
