import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import EditItem from "./EditItem";
import getSlides from "../../../Services/slidesService";

const EditHomeForm = ({ homeEditWelcomeTitle }) => {
  const [slides, setSlides] = useState([]);
  const [slidesIds, setSlidesIds] = useState([]);

  useEffect(() => {
    getSlides()
      .then((response) => setSlides(response.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showSlidesEditionForm = () =>
    slides.map((slide) => (
      <EditItem
        item={slide}
        slidesIds={slidesIds}
        setSlidesIds={setSlidesIds}
      />
    ));

  const formik = useFormik({
    initialValues: { homeEditWelcomeTitle },

    validate: (values) => {
      let errors = {};
      if (!values.homeEditWelcomeTitle) {
        errors.homeEditWelcomeTitle = "Required";
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
      <h1 id="homeEditTitle" name="homeEditTitle">
        Página de Edición de Home
      </h1>
      <form
        id="homeEditForm"
        name="homeEditForm"
        onSubmit={formik.handleSubmit}
        className="Form"
      >
        <Button
          id="homeEditSubmitButton"
          name="homeEditSubmitButton"
          type="submit"
          variant="contained"
        >
          Aplicar Cambios
        </Button>
        <br />
        <label
          id="homeEditWelcomeLabel"
          name="homeEditWelcomeLabel"
          htmlFor="homeEditWelcomeTitle"
        >
          Título de bienvenida:{" "}
        </label>
        <input
          id="homeEditWelcomeTitle"
          name="homeEditWelcomeTitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.homeEditWelcomeTitle}
          className="form-control"
          maxLength={20}
        ></input>
            {formik.errors.homeEditWelcomeTitle}
        <h2 id="homeEditSubTitle" name="homeEditSubTitle">
          Choose 3 images:{" "}
        </h2>
        {showSlidesEditionForm()}
      </form>
    </>
  );
};

export default EditHomeForm;
