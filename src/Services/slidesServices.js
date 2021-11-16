import axios from "axios";
import Swal from 'sweetalert2';

const getSlides = () => {
  const response = axios.get(`http://ongapi.alkemy.org/api/slides`);
  return response;
};

const getImagesSlides = async () => {
  try {
    const res = await getSlides();
    const dataImage = res.data.data.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch (err) {
    console.log(err);
  }
};
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

export {CreateSlide, EditSlide, GetAllSlidesById, DeleteSlide, getSlides, getImagesSlides };
