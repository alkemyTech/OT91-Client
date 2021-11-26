import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Utils/loadingSpinner";
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

const Seeker = ({ endpointName, minLength }) => {
  const [targetValue, setTargetValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);

  const targetValueSearch = (e) => {
    setTargetValue(e.target.value);
  };

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
    <div>
      <form className="d-flex justify-content-center align-items-center mt-4">
        <TextField
          controlId="floatingInput"
          label="Ingrese su busqueda"
          className="d-flex"
          onChange={targetValueSearch}
        >
          <Button
            disabled={isLoading}
            variant="outline-primary"
            onClick={() => searchResult()}
          >
            Buscar
          </Button>
        </TextField>
      </form>

      <Container>
        {targetValue && !isLoading ? (
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
        ) : isLoading ? (
          <div className="d-flex justify-content-center m-5">
            <LoadingSpinner />
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Seeker;
