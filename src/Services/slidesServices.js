import axios from "axios";
import Swal from 'sweetalert2'
import React, { useState } from "react";
const CreateSlide = (data) => {
    axios({
      method: "POST",
      url: "http://ongapi.alkemy.org/api/slides",
      data: {
        name: data.name,
        description: data.description,
        image: data.image,
      },
    })
    .then((res) => {
          Swal.fire(
            'Slide Creado!'
          )
      })
      .catch((err) => (err));
   }
   const EditSlide = () => {
       axios({
        method: "PUT",
        url: `http://ongapi.alkemy.org/api/slides/${slides.id}`,
        data: {
          name: data.name,
          description: data.description,
          image: data.image,
        },
       })
   }
   const GetAllSlides = () => {
    axios({
      method: "GET",
      url: `http://ongapi.alkemy.org/api/slides`,
     })
    .then(res => (res))
    .catch(err => (err))
}
const GetAllSlidesById = () => {
  axios({
    method: "GET",
    url: `http://ongapi.alkemy.org/api/slides/${slides.id}`,
   })
  .then(res => (res))
  .catch(err => (err))
}
const DeleteSlide = () => {
  axios({
    method: "DELETE",
    url: `http://ongapi.alkemy.org/api/slides/${slides.id}`,
    data: {
      name: data.name,
      description: data.description,
      image: data.image,
    },
   })
  .then(res => (res))
  .catch(err => (err))
}

export {CreateSlide, EditSlide, GetAllSlides,GetAllSlidesById, DeleteSlide }
