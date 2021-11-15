import axios from "axios";

const getNews = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/public/api/news");
  const data = response.data.data;
  return data;
};

export const getNewById = async (id) => {
    const {data}= await axios.get(`http://ongapi.alkemy.org/api/news/${id}`)
    return data
}

const createOrUpdateNews = async (news) => {
  const data = await getNews();
  const sameData = data.find((news) => news.id === news.categoryId);
  try {
    if (sameData) {
      await axios.patch(
        `http://ongapi.alkemy.org/public/api/news/${news.categoryId}`,
        news
      );
    } else {
      axios.post("http://ongapi.alkemy.org/public/api/news", news);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteNewByid = async (news) => {
  const data = await getNews();
  const newToRemove = data.find(news => news.id === news.categoryId)
  try {
    await axios.delete(`http://ongapi.alkemy.org/public/api/news/${newToRemove.categoryId}`)
  }catch(error){
    console.log(error)
  }
}

export const createNewsObject = (id, name, image, createdAt) => ({id, name, image, createdAt});

export { createOrUpdateNews };
