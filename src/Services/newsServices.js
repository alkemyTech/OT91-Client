import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";

const URL = process.env.REACT_APP_API_URL_NEWS;
const handleCatch = (error) =>
  showErrorAlert(error.response.data.message || error.message);

export const getAll = async () => {
  try {
    const response = await axios.get(URL);
    const data = response.data.data;
    return data;
  } catch (error) {
    handleCatch(error);
  }
};

export const getById = async (id) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const update = async (newsdata, id) => {
  try {
    const data = await axios.put(`${URL}/${id}`, newsdata);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const create = async (news) => {
  try {
    const data = await axios.post(URL, news);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const createOrUpdate = async (newsdata, id) => {
  const allNews = await getNews();
  const sameData = allNews.find((element) => element.id === id);
  try {
    if (sameData) {
      const data = await updateNewById(newsdata, id);
      return data;
    } else if (!id && newsdata) {
      const data = await createNew(newsdata);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteByid = async (id) => {
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

