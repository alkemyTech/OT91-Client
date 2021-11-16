import axios from "axios";
import { alertCrudMessages as alert } from "../Utils/alertCrudMessages";

const URL = process.env.REACT_APP_ACTIVITY_URL;

const getActivity = async (id) => {
  return await axios
    .get(`${URL}/${id}`)
    .then((response) => response.data.data)
    .catch(() => alert.READ_ERROR("la actividad"));
};

const getAllActivities = async () => {
  return await axios
    .get(`${URL}`)
    .then((response) => response.data.data)
    .catch(() => alert.READ_ERROR("las actividades"));
};
const createActivity = async (body) => {
  return await axios
    .post(`${URL}`, body)
    .then((response) => response.data)
    .catch(() => alert.CREATE_ERROR("la actividad"));
};

const modifyActivity = async (id, body) => {
  return await axios
    .put(`${URL}/${id}`, body)
    .then((response) => response.data)
    .catch(() => alert.UPDATE_ERROR("la actividad"));
};

const deleteActivityById = async (activityId) => {
  return await axios
    .delete(`${URL}/${activityId}`)
    .then((response) => response.data)
    .catch(() => alert.DELETE_ERROR("la actividad"));
};

const createOrUpdateActivity = async (body, activityId) => {
  if (activityId) {
    await getActivity(activityId);
    const data = await modifyActivity(body, ac);
    return data;
  } else if (!activityId && body) {
    const data = await createActivity(body);
    return data;
  }
};
const isValidList = (list) => list && list.length > 0;

const activityService = {
  getActivity,
  getAllActivities,
  createActivity,
  modifyActivity,
  deleteActivityById,
  createOrUpdateActivity,
  isValidList,
};

export default activityService;
