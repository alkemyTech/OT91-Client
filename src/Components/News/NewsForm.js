import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import { getCategories } from "../../Services/categoriesServices";
import InputImg from "../Inputs/InputImg";
import InputEditor from "../Inputs/InputEditor";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../app/NewsReducer/newsReducer";

const NewsForm = () => {
  const currentNews = useSelector((state) => state.news.currentNews);

  const [news, setNews] = useState(currentNews);

  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState("");

  const dispatch = useDispatch();
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
          (element) => e.target.value === element.name
        );
        setNews({
          ...news,
          category_id: newCategorySelected?.id,
        });
        setCategorySelect(newCategorySelected.name);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNews();
  };

  const sendNews = async () => {
    dispatch(actions.createOrUpdate(news));
    setNews({
      name: "",
      content: "",
      category_id: "",
      image: "",
    });
  };

  useEffect(async () => {
    const { data } = await getCategories();
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
        value={categorySelect || ""}
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
