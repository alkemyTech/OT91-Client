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

export const postAutorizationHeader = async (url, data) => {
  const token = getAuthorizationHeader();
  if (!token.Authorization) return;
  return await axios
    .post(url, data, {
      headers: token,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
