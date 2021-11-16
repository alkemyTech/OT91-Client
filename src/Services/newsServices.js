import axios from "axios";

const getNews = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/public/api/news");
  const data = response.data.data;
  return data;
};

const getNewById = async (id) => {
    const {data}= await axios.get(`http://ongapi.alkemy.org/api/news/${id}`)
    return data
}

const updateNewById = async (news) => {
  const data = await getNews();
  const toUpdateNew = data.find(news => news.id === news.categoryId);
  try {
    await axios.put(`http://ongapi.alkemy.org/public/api/news/${toUpdateNew.categoryId}`,
    toUpdateNew)
  }catch (error) {
    console.log(error)
  }
}

const createNew = async (news) => {
  try{
    await axios.put('http://ongapi.alkemy.org/public/api/news', news)
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
    await axios.delete(`http://ongapi.alkemy.org/public/api/news/${newToRemove.categoryId}`)
  }catch(error){
    console.log(error)
  }
}

export const createNewsObject = (id, name, image, createdAt) => ({id, name, image, createdAt});

export { createOrUpdateNews,getNewById,deleteNewByid,getNews,updateNewById,createNew };
