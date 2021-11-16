import axios from "axios";
import { AlertError } from '../Components/common/alerts/Alerts';

const getSlides = () => {
  const response = axios.get(`http://ongapi.alkemy.org/api/slides`);
  return response;
};

const getImagesSlides = async () => {
  try {
    const res = await axios.get("http://ongapi.alkemy.org/public/api/slides");
    const dataImage = res.data.data.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch (error) {
    AlertError(error.response.status,error.response.data.message);
    return {success:false};
  }
};

export { getSlides, getImagesSlides };
