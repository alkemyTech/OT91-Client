import axios from "axios";

const URL = 'http://ongapi.alkemy.org/api'

const getActivity = (id) => {

  const response = axios.get(`http://ongapi.alkemy.org/api/slides/${id}`);
  return response;
};

export const getAllActivities = async () =>{
  let {data} =await axios.get(`${URL}/activities`)
  return data
}

export default getActivity;
