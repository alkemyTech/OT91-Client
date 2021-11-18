import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";

const URL = process.env.REACT_APP_API_URL_NEWS;
const handleCatch = (error) => showErrorAlert(error.message);

const getNews = async () => {
  try{
      const response = await axios.get(URL);
      const data = response.data.data;
      return data;
  }catch(error){
    console.log(error)
  }
};

const getNewById = async (id) => {
  try{
    const {data}= await axios.get(`${URL}/${id}`)
      .catch(handleCatch);
    return data
  }catch(error) {
    console.log(error)
  }
}

const updateNewById = async (id,dataToUpdate) => {
  try {
    const data = await axios.put(`${URL}/${id}`,dataToUpdate)
    return data
  }catch (error) {
    handleCatch(error);
  }
}

const createNew = async (news) => {
  try{
    const data = await axios.put(URL, news)
    return data
  }catch ( error ) {
    handleCatch(error)
  }
}

const createOrUpdateNews = async (news) => {
  const data = await getNews();
  const sameData = data.find((news) => news.id === news.categoryId);
  try {
    if (sameData) {
      await updateNewById(id,dataToUpdate)
    } else {
      await createNew(news)
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteNewByid = async (id) => {
  try {
    const data = await axios.delete(`${URL}/${id}`)
    return data
  }catch(error){
    handleCatch(error);
  }
}

export const createNewsObject = (id, name, image, createdAt) => ({id, name, image, createdAt});

export { createOrUpdateNews,getNewById,deleteNewByid,getNews,updateNewById,createNew };
