import axios from 'axios';
import { AlertError } from '../Components/common/alerts/Alerts';
import { ERROR_CREATE, ERROR_EDIT } from '../Components/common/text/textTestimonial';
const URL = 'http://ongapi.alkemy.org/api';

function verifyStatus (status,message='An error occurred') {
    return AlertError(status,message)
}

export const getTestimonial = async (id) => {
    try {
        let  {data}= await axios.get(`${URL}/testimonials/${id}`);
        return data;
    } catch (error) {
        verifyStatus('buscar')
    }
};

export const modifyTestimonial = async (id,body) => {
    try {
        let  {data}= await axios.put(`${URL}/testimonials/${id}`,body);
        return data;
    } catch (error) {
        verifyStatus('editar',ERROR_EDIT)
    }
};

export const createTestimonial = async (body) => {
    try {
        let data= await axios.post(`${URL}/testimonials`,body);
        return data;
    }catch(error){
        verifyStatus('crear',ERROR_CREATE)
    }
};

export const createOrUpdateTestimonial = async (testimonialId,body)=>{
    if(testimonialId){
        let {data} = await getTestimonial(testimonialId)
        data && modifyTestimonial(testimonialId,body)
    }else createTestimonial(body)
};
