import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";

const URL = process.env.REACT_APP_API_URL_NEWS;
const handleCatch = (error) =>
  showErrorAlert(error.response.data.message || error.message);

const getNews = async () => {
  try {
    const response = await axios.get(URL);
    const data = response.data.data;
    return data;
  } catch (error) {
    handleCatch(error);
  }
};

const getNewById = async (id) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

const updateNewById = async (id, dataToUpdate) => {
  try {
    const data = await axios.put(`${URL}/${id}`, dataToUpdate);
    return data;
  } catch (error) {
    handleCatch(error);
  }
};

const createNew = async (news) => {
  try {
    const data = await axios.post(URL, news);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

const createOrUpdateNews = async (newsdata, id) => {
  const allNews = await getNews();
  const sameData = allNews.find((element) => element.id === id);
  try {
    if (sameData) {
      const data = await updateNewById(id, newsdata);
      return data;
    } else if (!id && newsdata) {
      const data = await createNew(newsdata);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteNewByid = async (id) => {
  try {
    const data = await axios.delete(`${URL}/${id}`);
    return data;
  } catch (error) {
    handleCatch(error);
  }
};

export const createNewsObject = (id, name, image, createdAt) => ({
  id,
  name,
  image,
  createdAt,
});

export {
  createOrUpdateNews,
  getNewById,
  deleteNewByid,
  getNews,
  updateNewById,
  createNew,
};
