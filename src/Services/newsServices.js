import axios from "axios";

const getNews = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/public/api/news");
  const data = response.data.data;
  return data;
};

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

export { createOrUpdateNews };
