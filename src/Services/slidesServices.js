import axios from "axios";
import Swal from "sweetalert2";

const baseURL = process.env.REACT_APP_BASE_URL_SLIDES;

const CreateSlide = (data) => {
  axios({
    method: "POST",
    url: `${baseURL}/slides`,
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
    url: `${baseURL}/slides/${id}`,
    data,
  });
};
const GetAllSlides = () => {
  axios({
    method: "GET",
    url: `${baseURL}/slides`,
  })
    .then((res) => res)
    .catch((err) => err);
};
const GetAllSlidesById = (id) => {
  axios({
    method: "GET",
    url: `${baseURL}/slides/${id}`,
  })
    .then((res) => res)
    .catch((err) => err);
};
const DeleteSlide = (id) => {
  axios({
    method: "DELETE",
    url: `${baseURL}/slides/${id}`,
  })
    .then((res) => res)
    .catch((err) => err);
};

export { CreateSlide, EditSlide, GetAllSlides, GetAllSlidesById, DeleteSlide };
