import axios from "axios";

const URL = "http://ongapi.alkemy.org/api";

const getMembers = () => {
  const response = axios.get(`${URL}/members`);
  return response;
};

const storeMember = (data) => {
  const response = axios.post(`${URL}/members`, data);
  return response;
};

const getMember = (id) => {
  const response = axios.get(`${URL}/members/${id}`);
  return response;
};

const updateMember = (id, data) => {
  const response = axios.put(`${URL}/members/${id}`, data);
  return response;
};

const removeMember = (id) => {
  const response = axios.delete(`${URL}/members/${id}`);
  return response;
};

const membersApiActions = {
  getMembers,
  storeMember,
  getMember,
  updateMember,
  removeMember,
};

export default membersApiActions;
