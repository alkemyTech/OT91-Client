import axios from 'axios';

export const getNewById = async (id) => {
    const {data}= await axios.get(`http://ongapi.alkemy.org/api/news/${id}`)
    return data
}