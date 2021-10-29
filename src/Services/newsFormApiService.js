import axios from "axios";

const getCategories = async (setCategories) => {
  try {
    const response = await axios.get(
      "http://ongapi.alkemy.org/public/api/categories"
    );
    setCategories(response.data.data);
  } catch (err) {
    console.log(err);
  }
};

const getNews = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/public/api/news");
  const data = response.data.data;
  return data;
};

const updateNews = async (initialValues) => {
  await axios.patch(
    `http://ongapi.alkemy.org/public/api/news/${initialValues.id}`,
    initialValues
  );
};

const createNews = async (initialValues, setInitialValues) => {
  const res = await axios.post(
    "http://ongapi.alkemy.org/public/api/news",
    initialValues
  );
  if (res.status === 200) {
    setInitialValues({
      name: "",
      content: "",
      category: [],
      id: "",
      image: "",
    });
  }
  return res;
};

export { getCategories, getNews, updateNews, createNews };
