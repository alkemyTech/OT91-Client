import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import { getCategories } from "../../Services/categoriesServices";
import * as newsService from "../../Services/newsServices";
import InputImg from "../Inputs/InputImg";
import InputEditor from "../Inputs/InputEditor";

import { useDispatch, useSelector } from "react-redux";
import * as newsActions from "../../app/NewsReducer/newsReducer";
import { useParams } from "react-router";

const NewsForm = () => {
  const currentNews = useSelector((state) => state.news.currentNews);
  const { newsid } = useParams();
  const [news, setNews] = useState({
    name: "",
    content: "",
    category_id: "",
    image: "",
  });
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
      case "image":
        const imageFile = e.target.files[0];
        const imageUrl = new FileReader();
        imageUrl.readAsDataURL(imageFile);
        imageUrl.onload = (e) => {
          setNews({ ...news, image: e.target.result });
        };
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
    console.group("sendFormNEws");
    console.log(news);
    console.groupEnd("sendFormNEws");
    if (newsid) dispatch(newsActions.createOrUpdate({ newsid, news }));
    // dispatch(newsActions.update({ newsid, news }));
    else dispatch(newsActions.create(news));
    setNews({
      name: "",
      content: "",
      category_id: "",
      image: "",
    });
  };
  const getNewsforEdit = (idForEdit) =>
    idForEdit && dispatch(newsActions.getById(idForEdit));

  useEffect(async () => {
    const { data } = await getCategories();
    setCategories(data);
  }, []);

  useEffect(() => {
    getNewsforEdit(newsid);
  }, [newsid]);

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
      <input
        className="input-image"
        type="file"
        accept="image/png, image/jpg"
        id="image"
        name="image"
        value={undefined}
        onChange={handleChange}
      />
      {/* <InputImg news={news} setNews={setNews} /> */}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default NewsForm;
