import axios from "axios";
import getAuthorizationHeader from "./privateApiService";

const URL = process.env.REACT_APP_API_URL_MEMBERS;
const authorizationHeader = getAuthorizationHeader();

const getMembers = () => {
  const response = axios.get(`${URL}`, authorizationHeader);
  return response;
};

const createMember = (data) => {
  const response = axios.post(`${URL}`, data, authorizationHeader);
  return response;
};

const getMember = (id) => {
  const response = axios.get(`${URL}/${id}`, authorizationHeader);
  return response;
};

const updateMember = (id, data) => {
  const response = axios.put(`${URL}/${id}`, data, authorizationHeader);
  return response;
};

const removeMember = (id) => {
  const response = axios.delete(`${URL}/${id}`, authorizationHeader);
  return response;
};

const membersApiActions = {
  getMembers,
  createMember,
  getMember,
  updateMember,
  removeMember,
};

export default membersApiActions;
