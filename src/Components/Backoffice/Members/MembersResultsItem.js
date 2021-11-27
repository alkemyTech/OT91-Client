import React from "react";
import {TableCell,TableRow,Button} from "@mui/material";
import { Link } from "react-router-dom";
import "../../../Styles/TableStyle.css";

const MembersResultsItem = ({ item }) => {
  return (
    <>
      <TableRow color="buttondelete" key={item.name}>
        <TableCell color="tablebackground" id="membersName" name="membersName" classNmae="member-name">
          {item && item.name}
        </TableCell>
        <TableCell>
          <img
            id="membersImage"
            name="membersImage"
            className="member-image"
            src={item && item.image}
            alt={item && item.name}
            key={item && item.id}
          />
        </TableCell>
        <TableCell>
          <Button
            component={Link}
            to="/backoffice/members/edit"
            variant="contained"
            color="primary"
            className="member-action"
            key={item && item.id}
          >
            Editar Miembro
          </Button>
          <p></p>
          <Button
            variant="contained"
            color="buttondelete"
            className="member-action"
          >
            Eliminar Miembro
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default MembersResultsItem;

