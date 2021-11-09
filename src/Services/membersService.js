import axios from "axios";
import getAuthorizationHeader from "./privateApiService";

const URL = "http://ongapi.alkemy.org/api";
const authorizationHeader = getAuthorizationHeader();

const getMembers = () => {
  const response = axios.get(`${URL}/members`, authorizationHeader);
  return response;
};

const createMember = (data) => {
  const response = axios.post(`${URL}/members`, data, authorizationHeader);
  return response;
};

const getMember = (id) => {
  const response = axios.get(`${URL}/members/${id}`, authorizationHeader);
  return response;
};

const updateMember = (id, data) => {
  const response = axios.put(`${URL}/members/${id}`, data, authorizationHeader);
  return response;
};

const removeMember = (id) => {
  const response = axios.delete(`${URL}/members/${id}`, authorizationHeader);
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
