import axios from "axios";

const getSlides = () => {
        const response = axios.get(
          `http://ongapi.alkemy.org/api/slides`
        );
        return response;
    }

export default getSlides;
