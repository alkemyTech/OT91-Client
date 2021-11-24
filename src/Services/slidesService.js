import axios from "axios";
import { AlertError } from '../Components/common/alerts/Alerts';
const baseURL = process.env.REACT_APP_BASE_URL_SLIDES;

const getSlides = () => {
  try {
    const response = axios.get(`${baseURL}`);
    return response.data;
  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};

const GetSlidesById = async (id) => {
  try {
    const data = await axios.get(`${baseURL}/${id}`)
    return data
  }catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};

const EditSlide = async (id,data) => {
  try{
    const response = await axios.put(`${baseURL}/${id}`,data)
    return response;
  }catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};
 
const CreateSlide = async (data) => {
  try {
    const response = await axios.post(`${baseURL}`,data)
    Swal.fire('Slide Creado!')
    return response
  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};

const DeleteSlide = async (id) => {
  try{
    const slideToDelete = await axios.delete(`${baseURL}/${id}`)
    return slideToDelete
  }catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};

const getImagesSlides = async () => {
  try {
    const res = await getSlides();
    const dataImage = res.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch ({response}) {
    AlertError(response.status,response.data.message);
    return {success:false};
  };
};

export {CreateSlide, EditSlide, GetSlidesById, DeleteSlide, getSlides, getImagesSlides };
