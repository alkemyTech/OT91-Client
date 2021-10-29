import React from "react";
import Button from "@material-ui/core/Button/Button";

const EditItem = (props) => {
  const { item, slidesIds, setSlidesIds } = props;

  const handleSelectImage = () => {
    slidesIds.length < 3
      ? setSlidesIds([...slidesIds, item.id])
      : alert("You already chose 3 images");
  };

  return (
    <>
      <div>
        <h5 className="card-title">{item && item.name}</h5>
      </div>
      <div>
        <Button
          variant="contained"
          type="button"
          className="btn btn-secondary"
          value="Add to the Slider"
          onClick={handleSelectImage}
        >
          Seleccionar Imagen
        </Button>
      </div>
      <div>
        <img
          src={item && item.image}
          alt={item && item.name}
          key={item && item.id}
        />
      </div>
    </>
  );
}

export default EditItem;
