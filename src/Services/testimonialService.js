import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/api';

export const getTestimonial = async (id) => {
    let {data}= await axios.get(`${URL}/testimonials/${id}`);
    return data;
};

export const modifiedTestimonial = async (id,body) => {
    let {data}= await axios.put(`${URL}/testimonials/${id}`,body);
    return data;
};

export const createTestimonial = async (body) => {
    console.log(body)
    let {data}= await axios.post(`${URL}/testimonials`,body);
    console.log(data)
    return data;
};