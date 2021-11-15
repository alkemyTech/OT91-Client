import axios from 'axios';

const URL = process.env.REACT_APP_API_URL_TESTIMONIALS
 const getTestimonial = async (id) => {
    let {data}= await axios.get(`${URL}/${id}`);
    return data;
};

 const modifyTestimonial = async (id,body) => {
    let {data}= await axios.put(`${URL}/${id}`,body);
    return data;
};

const createTestimonial = async (body) => {
    let {data}= await axios.post(`${URL}`,body);
    return data;
};

const createOrUpdateTestimonial = async (testimonialId,body)=>{
    if(testimonialId){
        let {data} = await getTestimonial(testimonialId)
        data && modifyTestimonial(testimonialId,body)
    }else createTestimonial(body)
};

export { getTestimonial, modifyTestimonial, createTestimonial, createOrUpdateTestimonial,}
