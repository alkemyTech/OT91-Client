import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MembersResultsItem from "./MembersResultsItem";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../app/MembersReducer/membersReducer";
import TitleBackoffice from "../../Backoffice/TitleBackoffice";
import { useHistory } from "react-router-dom";
import MembersResultsSearchedItem from "./MembersResultsSearchedItems";
import { TextField, Spinner, Box } from "@mui/material";

const MembersResults = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [targetValue, setTargetValue] = useState("");
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.data);
  const showMembers = () =>
    members.map((member) => <MembersResultsItem item={member} />);
  const targetValueSearch = (e) => {
    setTargetValue(e.target.value);
    setIsSearching(true);
  };
  useEffect(() => {
    dispatch(getAll());
    targetValue.length == 0 && setIsSearching(false);
  }, [targetValue]);

  return (
    <>
      <TitleBackoffice title={"Edición de Miembros"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 4,
        }}
      >
        <TextField
          sx={{ width: "75%" }}
          controlId="floatingInput"
          label="Ingrese su busqueda"
          className="d-flex"
          onChange={targetValueSearch}
        />
      </Box>

      <TableContainer className="TableContainer">
        <Table className="TableFinal">
          <TableHead className="TableRowModify">
            <TableRow>
              <TableCell className="TableCell" align="center">
                Name
              </TableCell>
              <TableCell className="TableCell" align="center">
                Image
              </TableCell>
              <TableCell className="TableCell" align="center">
                CreatedAt
              </TableCell>
              <TableCell align="center" className="TableCell">
                <Button
                  color="buttoncreatenews"
                  variant="contained"
                  size="small"
                  component={Link}
                  to="/backoffice/members/create"
                >
                  Create Member
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          {isSearching ? (
            <MembersResultsSearchedItem
              endpointName="members"
              minLength="2"
              targetValue={targetValue}
              setIsSearching={setIsSearching}
            />
          ) : (
            <TableBody color="tablebackground">{showMembers()}</TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default MembersResults;
