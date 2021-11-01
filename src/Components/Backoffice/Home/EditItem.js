import React from "react";
import Button from "@material-ui/core/Button/Button";

const EditItem = ({ item, slidesIds, setSlidesIds }) => {
  const handleSelectImage = () => {
    slidesIds.length < 3
      ? setSlidesIds([...slidesIds, item.id])
      : alert("You already chose 3 images");
  };

  return (
    <>
      <h5 id="sliderImageName" name="sliderImageName" className="card-title">
        {item && item.name}
      </h5>
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
      <img
        id="sliderImage"
        name="sliderImage"
        src={item && item.image}
        alt={item && item.name}
        key={item && item.id}
      />
    </>
  );
};

export default EditItem;
