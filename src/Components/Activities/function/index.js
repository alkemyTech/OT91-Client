import axios from "axios";

const URL = 'http://ongapi.alkemy.org/api';

export const getDataForm = async (id) => {
    let {data}= await axios.get(`${URL}/activities/${id}`);
    return data;
};

export const putDataForm = async (id,body) => {
    let {data}= await axios.put(`${URL}/activities/${id}`,body);
    return data;
};

export const postDataForm = async (body) => {
    let {data}= await axios.post(`${URL}/activities/`,body);
    return data;
};