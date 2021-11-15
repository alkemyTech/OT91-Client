import React from "react";
import {Button} from "@mui/material";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Swal from "sweetalert2";

const EditHomeItem = ({ item, slidesIds, setSlidesIds }) => {
  const ShowErrorAlert = () => {
    Swal.fire("Ya seleccionaste las 3 imágenes!");
  };

  const handleSelectImage = () => {
    slidesIds.length < 3
      ? setSlidesIds([...slidesIds, item.id])
      : ShowErrorAlert();
  };

  return (
    <>
      <TableRow key={item.id}>
        <TableCell>
          <p id="sliderImageName" name="sliderImageName" className="card-title">
            {item && item.name}
          </p>
        </TableCell>
        <TableCell>
          <img
            id="sliderImage"
            name="sliderImage"
            src={item && item.image}
            alt={item && item.name}
            key={item && item.id}
          />
        </TableCell>
        <TableCell>
          <Button
            id="addToSliderButton"
            name="addToSliderButton"
            variant="contained"
            type="button"
            className="btn btn-secondary"
            value="Add to the Slider"
            onClick={handleSelectImage}
          >
            Seleccionar Imagen
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default EditHomeItem;
