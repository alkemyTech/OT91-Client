import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import { createOrUpdateNews } from "../../Services/newsServices";
import { getCategory } from "../../Services/categoriesServices";
import InputImg from "../Inputs/InputImg";
import InputEditor from "../Inputs/InputEditor";

const NewsForm = () => {
  const [news, setNews] = useState({
    name: "",
    content: "",
    category: [],
    categoryId: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNews({ ...news, name: e.target.value });
        break;
      case "content":
        setNews({ ...news, content: e.target.value });
        break;
      case "category":
        const newCategorySelected = categories?.find(
          (category) => category.name === e.target.value
        );
        setNews({
          ...news,
          category: e.target.value,
          categoryId: newCategorySelected?.id,
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNews();
  };

  const sendNews = async () => {
    createOrUpdateNews(news);
    setNews({
      name: "",
      content: "",
      category: [],
      categoryId: "",
      image: "",
    });
  };

  useEffect(async () => {
    const data = await getCategory();
    setCategories(data);
  }, []);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <input
        className="input-field"
        type="text"
        name="name"
        value={news.name || ""}
        onChange={handleChange}
        minLength="5"
        required
      ></input>
      <InputEditor news={news} setNews={setNews} />
      <label htmlFor="category">Category</label>
      <select
        className="select-field"
        name="category"
        value={news.category || ""}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories?.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
      <InputImg news={news} setNews={setNews} />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default NewsForm;
