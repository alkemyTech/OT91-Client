import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/api';

export const getActivity = async (id) => {
    let {data}= await axios.get(`${URL}/activities/${id}`);
    return data;
};

export const modifyActivity = async (id,body) => {
    let {data}= await axios.put(`${URL}/activities/${id}`,body);
    return data;
};

export const createActivity = async (body) => {
    let {data}= await axios.post(`${URL}/activities/`,body);
    return data;
};

export const createOrUpdateActivity = (activityId,body)=>{
    activityId ? modifyActivity(activityId,body) : createActivity(body)
};