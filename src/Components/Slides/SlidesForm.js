import axios from "axios";
import React, { useState } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import "../FormStyles.css";
import Swal from 'sweetalert2'

const SlidesForm = ({slides}) => {
  const [initialValues, setInitialValues] = useState({
    name: slides?.name ?? '',
    description:slides?.description ?? '',
    image:slides?.image ?? '',
    order:slides?.order ?? '',
  });
  const hasSlides = !!slides
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleData = () => {
    if(!hasSlides){
    axios({
      method: "POST",
      url: "http://ongapi.alkemy.org/api/slides",
      data: {
        name: initialValues.name,
        description: initialValues.description,
        image: initialValues.image,
      },
    })
      .then((res) => {
        if (initialValues.name.length>4) {
          Swal.fire(
            'Slide Creado!'
          )
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'No se puede tener menos de 4 caracteristicas',
            icon: 'error',
            confirmButtonText: 'Ok, voy a editarlo!'
          })
        }
      })
      .catch((err) => (err));
    } else { axios({
      method: "PUT",
      url: `http://ongapi.alkemy.org/api/slides/${slides.id}`,
      data: {
        name: initialValues.name,
        description: initialValues.description,
        image: initialValues.image,
      },
    })}
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className='input-field'
        type='text'
        name='name'
        required
        value={initialValues.name}
        onChange={(e) => {
          setInitialValues({
            ...initialValues,
            name: e.target.value,
          })
        }}
        placeholder='Title (min 4 caracters)'
      ></input>
      <CKEditor
        editor={ClassicEditor}
        className='input-field'
        type='text'
        name='description'
        value={initialValues.description}
        placeholder='Write some description'
        required
        onChange={(e, editor) => {
          const data = editor.getData()
          setInitialValues({ ...initialValues, description: data})
        }}
      />
      <input
        className='input-image'
        type='file'
        accept='image/png, image/jpg'
        id='image'
        name='image'
        required
        onChange={(e) => {
          const imageFile = e.target.files[0]
          const imageUrl = new FileReader()
          imageUrl.readAsDataURL(imageFile)
          imageUrl.onload = (e) => {
            setInitialValues({...initialValues, image:e.target.result})
          }
        }}
      />
      <button onClick={handleData} className="submit-btn" type="submit">
        {hasSlides ? "Editar" : "Enviar"}
      </button>
    </form>
  );
};

export default SlidesForm;
