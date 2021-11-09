import axios from "axios";

const config = {
  headers: {
    Group: 91, //Aqui va el ID del equipo!!
  },
};

const axiosInstance = axios.create({
  baseURL: "http://ongapi.alkemy.org/public/api",
});

export const publicGet = (path, id) => {
  const idCheck = id ? `/${id}` : "";
  return axiosInstance.get(`/${path}${idCheck}`);
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;
