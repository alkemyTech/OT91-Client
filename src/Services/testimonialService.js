import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/api';

export const getTestimonial = async (id) => {
    let {data}= await axios.get(`${URL}/testimonials/${id}`);
    return data;
};

export const modifyTestimonial = async (id,body) => {
    let {data}= await axios.put(`${URL}/testimonials/${id}`,body);
    return data;
};

export const createTestimonial = async (body) => {
    let {data}= await axios.post(`${URL}/testimonials`,body);
    return data;
};

export const createOrUpdateTestimonial = (testimonialId,body)=>{
    testimonialId ? modifyTestimonial(testimonialId,body) : createTestimonial(body)
};
