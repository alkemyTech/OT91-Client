import axios from "axios";
import { AlertError } from '../Components/common/alerts/Alerts';

const getSlides = () => {
  try {
    const response = axios.get(`http://ongapi.alkemy.org/api/slides`);
    return response.data;
  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  }
};

const getByIdSlides = (id) => {
  try {

  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};

const updateSlides = (id) => {
  try {

  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};


const createSlides = (body) => {
  try {

  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};
const deleteSlider = (id) => {
  try {

  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};


const getImagesSlides = async () => {
  try {
    const res = await axios.get("http://ongapi.alkemy.org/public/api/slides");
    const dataImage = res.data.data.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  }
};

export { getSlides, getImagesSlides };
