import axios from "axios";

const config = {
  headers: {
    Group: 91, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;

export const getAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  return { Authorization: `Bearer: ${token}` };
};

export const privatePost = async (url, data) => {
  const authorizationHeader = getAuthorizationHeader();
  if (!authorizationHeader.Authorization) return;
  return await axios
    .post(url, data, {
      headers: authorizationHeader,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
