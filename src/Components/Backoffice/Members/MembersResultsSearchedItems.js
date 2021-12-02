import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../../Utils/loadingSpinner";
import { TextField, Box } from "@mui/material";
import {
  TableCell,
  TableRow,
  TableBody,
  Button,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { formatDate } from "../../../Utils/formatters";
import { searchIn } from "../../../Services/seekerService";
import MembersResultsItem from "./MembersResultsItem";

const MembersResultsSearchedItem = ({
  endpointName,
  minLength,
  targetValue,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);
  const showresults = async () => {
    setIsLoading(true);
    await searchIn(endpointName, targetValue, minLength).then((res) => {
      setResult(res);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    showresults();
  }, [targetValue]);

  return (
    <>
      {targetValue && !isLoading ? (
        <TableBody>
          {result.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item && item.name}
              </TableCell>
              <TableCell align="center">
                <img
                  className="table-row-image"
                  src={item && item.image}
                  alt={item && item.name}
                  key={item && item.id}
                />
              </TableCell>
              <TableCell align="center">{formatDate(new Date())}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => onEdit(item.id)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(item.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : isLoading ? (
        <div className="d-flex justify-content-center m-5">
          <LoadingSpinner />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MembersResultsSearchedItem;
