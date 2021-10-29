import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/api';

export const getActivity = async (id) => {
    let {data}= await axios.get(`${URL}/activities/${id}`);
    return data;
};

export const modifiedActivity = async (id,body) => {
    let {data}= await axios.put(`${URL}/activities/${id}`,body);
    return data;
};

export const createActivity = async (body) => {
    let {data}= await axios.post(`${URL}/activities/`,body);
    return data;
};
