import React, { useEffect }from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button} from "@mui/material";
import { Link } from "react-router-dom";
import MembersResultsItem from "./MembersResultsItem";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from '../../../app/MembersReducer/membersReducer';

  const MembersResults = () => {
  const dispatch = useDispatch()
  const members = useSelector(state => state.members.data)
  const showMembers = () =>
    members.map((member) => <MembersResultsItem item={member} />);
    useEffect(() => {
      dispatch(getAll())
    }, [])
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
