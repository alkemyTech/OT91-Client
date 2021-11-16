import axios from "axios";

const URL = process.env.REACT_APP_API_URL_NEWS;

const getNews = async () => {
  const response = await axios.get(URL);
  const data = response.data.data;
  return data;
};

const getNewById = async (id) => {
    const {data}= await axios.get(`${URL}/${id}`)
    return data
}

const updateNewById = async (news) => {
  const data = await getNews();
  const toUpdateNew = data.find(news => news.id === news.categoryId);
  try {
    await axios.put(`${URL}/${toUpdateNew.categoryId}`,
    toUpdateNew)
  }catch (error) {
    console.log(error)
  }
}

const createNew = async (news) => {
  try{
    await axios.put(URL, news)
  }catch ( error ) {
    console.log(error)
  }
}

const createOrUpdateNews = async (news) => {
  const data = await getNews();
  const sameData = data.find((news) => news.id === news.categoryId);
  try {
    if (sameData) {
      await updateNewById(news)
    } else {
      await createNew(news)
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteNewByid = async (newsRemove) => {
  const data = await getNews();
  const newToRemove = data.find(news => news.id === newsRemove.categoryId)
  try {
    await axios.delete(`${URL}/${newToRemove.categoryId}`)
  }catch(error){
    console.log(error)
  }
}

export const createNewsObject = (id, name, image, createdAt) => ({id, name, image, createdAt});

export { createOrUpdateNews,getNewById,deleteNewByid,getNews,updateNewById,createNew };
