import axios from "axios";

const getNews = async () => {
  try{
    const response = await axios.get("http://ongapi.alkemy.org/public/api/news");
    const data = response.data.data;
    return data ;
  }catch(error){
    console.log(error)
  }
};

const getNewById = async (id) => {
  try {
    const {data}= await axios.get(`http://ongapi.alkemy.org/api/news/${id}`)
    return data
  }catch(error) {
    console.log(error)
  }
}

const updateNewById = async (id,dataToUpdate) => {
  try {
    const data = await axios.put(`http://ongapi.alkemy.org/public/api/news/${id}`,
    dataToUpdate)
    return data
  }catch (error) {
    console.log(error)
  }
}

const createNew = async (news) => {
  try{
    const data = await axios.post('http://ongapi.alkemy.org/public/api/news', news)
    return data
  }catch ( error ) {
    console.log(error)
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
    const data = await axios.delete(`http://ongapi.alkemy.org/public/api/news/${id}`)
    return data
  }catch(error){
    console.log(error)
  }
}

export const createNewsObject = (id, name, image, createdAt) => ({id, name, image, createdAt});

export { createOrUpdateNews,getNewById,deleteNewByid,getNews,updateNewById,createNew };
