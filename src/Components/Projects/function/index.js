import axios from "axios";

const URL = 'http://ongapi.alkemy.org/api';

export const getDataForm = async (id) => {
    let {data}= await axios.get(`${URL}/projects/${id}`);
    return data
}

export const putDataForm = async (id,body) => {
    let {data}= await axios.patch(`${URL}/projects/${id}`,body);
    return data
}

export const postDataForm = async (body) => {
    try {
        let data= await axios.post(`${URL}/projects`,body);
        return data
    } catch (error) {
        return error
    }

}