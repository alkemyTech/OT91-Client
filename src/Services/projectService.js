import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/api';

export const getProject = async (id) => {
    let {data}= await axios.get(`${URL}/activities/${id}`);
    return data;
};

export const modifiedProject = async (id,body) => {
    let {data}= await axios.put(`${URL}/activities/${id}`,body);
    return data;
};

export const createProject = async (body) => {
    let {data}= await axios.post(`${URL}/activities/`,body);
    return data;
};
