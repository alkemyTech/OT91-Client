import axios from "axios";
import Swal from 'sweetalert2';

const getSlides = async () => {
  const response = await axios.get(`http://ongapi.alkemy.org/api/slides`);
  return(response.data.data);
};

const getImagesSlides = async () => {
  try {
    const res = await getSlides();
    const dataImage = res.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch (err) {
    console.log(err);
  }
};

const CreateSlide = async (data) => {
  try {
    const response = await axios.post('http://ongapi.alkemy.org/api/slides',data)
    Swal.fire('Slide Creado!')
    return response
  } catch (error) {
    console.log(error)
  }
}
const EditSlide = async (id,data) => {
  try{
    const response = await axios.put(`http://ongapi.alkemy.org/api/slides/${id}`,data)
    return response;
  }catch(error){
    console.log(error)
  }
}

const GetSlidesById = async (id) => {
  try {
    const data = await axios.get(`http://ongapi.alkemy.org/api/slides/${id}`)
    return data
  }catch (error) {
    console.log(error)
  }
}
const DeleteSlide = async (id) => {
  try{
    const slideToDelete = await axios.delete(`http://ongapi.alkemy.org/api/slides/${id}`)
    return slideToDelete
  }catch(error) {
    console.log(error)
  }
}

export {CreateSlide, EditSlide, GetSlidesById, DeleteSlide, getSlides, getImagesSlides };
