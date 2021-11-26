import React, { useState, useEffect } from "react";
import loadingSpinner from "../../Utils/loadingSpinner";
import axios from "axios";
import {
  Form,
  Button,
  Container,
  TableRow,
  TableCell,
  TextField,
  Spinner,
} from "@mui/material";
import CustomCard from "../Card/CustomCard";
import { searchIn } from "../../Services/seekerService";

const Seeker = ({ endpointName, minLength, getAll, setResult }) => {
  const [targetValue, setTargetValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const targetValueSearch = (e) => {
    setTargetValue(e.target.value);
  };

  useEffect(() => {
    getAll().then((res) => {
      setResult(res);
      setIsSubmitting(true);
    });
  }, []);
  useEffect(() => {
    searchIn(endpointName, targetValue, minLength, getAll).then((res) => {
      setResult(res);
      setIsSubmitting(true);
    });
  }, [targetValue]);

  return (
    <div>
      <form className="d-flex justify-content-center align-items-center mt-4">
        <TextField
          controlId="floatingInput"
          label="Ingrese su busqueda"
          className="d-flex"
          onChange={targetValueSearch}
        >
          <Button
            disabled={isSubmitting}
            variant="outline-primary"
            onClick={() => searchResult()}
          >
            Buscar
          </Button>
        </TextField>
      </form>

      {/* <Container>
        {!isSubmitting ? (
          <TableRow>
            {result.map((element) => (
              <TableCell sm key={element.id}>
                <CustomCard
                  title={element.name}
                  image={element.image}
                  description={element.description}
                />
              </TableCell>
            ))}
          </TableRow>
        ) : (
          <div className="d-flex justify-content-center m-5">
            <loadingSpinner />
          </div>
        )}
      </Container>*/}
    </div>
  );
};

export default Seeker;
