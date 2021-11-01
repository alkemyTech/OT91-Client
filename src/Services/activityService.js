import axios from "axios";

const getActivity = (id) => {

  const response = axios.get(`http://ongapi.alkemy.org/api/slides/${id}`);
  return response;
};

export default getActivity;
