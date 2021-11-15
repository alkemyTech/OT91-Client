import React from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button} from "@mui/material";
import { Link } from "react-router-dom";
import MembersResultsItem from "./MembersResultsItem";

const MembersResults = () => {
  const membersMock = [
    {
      id: 1,
      name: "Marco Fernandez",
      image: "http://ongapi.alkemy.org/storage/Axu2E4oV8b.jpeg",
    },
    {
      id: 2,
      name: "María Garcia",
      image: "http://ongapi.alkemy.org/storage/5JkTrvk8cG.jpeg",
    },
    {
      id: 3,
      name: "Nazareno Gabriel Bastanzo",
      image: "http://ongapi.alkemy.org/storage/mgfbpI8iaL.png",
    },
  ];

  const showMembers = () =>
    membersMock.map((member) => <MembersResultsItem item={member} />);

  return (
    <>
      <Button
        component={Link}
        to="/backoffice/members/create"
        variant="contained"
        color="primary"
        className="member-action"
      >
        Crear Miembro
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Nombre </TableCell>
              <TableCell> Foto </TableCell>
              <TableCell> Acciones </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{showMembers()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MembersResults;
