import axios from "axios";
import Swal from "sweetalert2";

const baseURL = process.env.REACT_APP_BASE_URL_SLIDES;

const CreateSlide = (data) => {
  axios({
    method: "POST",
    url: `${baseURL}`,
    data,
  })
    .then((res) => {
      Swal.fire("Slide Creado!");
    })
    .catch((err) => err);
};
const EditSlide = (id, data) => {
  axios({
    method: "PUT",
    url: `${baseURL}/${id}`,
    data,
  });
};
const GetAllSlides = () => {
  axios({
    method: "GET",
    url: `${baseURL}`,
  })
    .then((res) => res)
    .catch((err) => err);
};
const GetAllSlidesById = (id) => {
  axios({
    method: "GET",
    url: `${baseURL}/${id}`,
  })
    .then((res) => res)
    .catch((err) => err);
};
const DeleteSlide = (id) => {
  axios({
    method: "DELETE",
    url: `${baseURL}/${id}`,
  })
    .then((res) => res)
    .catch((err) => err);
};

export { CreateSlide, EditSlide, GetAllSlides, GetAllSlidesById, DeleteSlide };
