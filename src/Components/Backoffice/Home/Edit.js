import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button/Button";
import EditItem from "./EditItem";

function Edit(props) {
  const { homeWelcomeTitle } = props;
  const [slides, setSlides] = useState([]);
  const [slidesIds, setSlidesIds] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://ongapi.alkemy.org/api/slides/`
        );
        setSlides(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [slides]);

  const formik = useFormik({
    initialValues: {
      homeWelcomeTitle: homeWelcomeTitle,
    },

    validate: (values) => {
      let errors = {};
      if (!values.homeWelcomeTitle) {
        errors.homeWelcomeTitle = "Required";
      }
      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      let greetingsText = JSON.stringify(values, null, 4);
      alert(greetingsText + " Image Ids Selected: " + slidesIds);
    },
  });

  return (
    <>
      <h1>Página de Edición de Home</h1>
      <form onSubmit={formik.handleSubmit} className="Form">
        <div>
          <Button type="submit" variant="contained">
            Aplicar Cambios
          </Button>
        </div>
        <br />
        <label htmlFor="homeWelcomeTitle">Título de bienvenida: </label>
        <input
          id="homeWelcomeTitle"
          name="homeWelcomeTitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.homeWelcomeTitle}
          className="form-control"
          maxLength={20}
        ></input>
        {formik.errors.homeWelcomeTitle && (
          <div className="error">{formik.errors.homeWelcomeTitle}</div>
        )}
        <h2>Choose 3 images: </h2>
        {slides.map((item) => (
          <EditItem
            item={item}
            slidesIds={slidesIds}
            setSlidesIds={setSlidesIds}
          />
        ))}
      </form>
    </>
  );
}

export default Edit;
