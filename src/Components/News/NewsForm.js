import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../Components/FormStyles.css";
import {
  getCategories,
  getNews,
  updateNews,
  createNews,
} from "../../Services/newsFormApiService";

const NewsForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    content: "",
    category: [],
    id: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);

  const getDataCategories = async (setCategories) => {
    await getCategories(setCategories);
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "category") {
      const newCategorySelected = categories?.find(
        (category) => category.name === e.target.value
      );
      setInitialValues({
        ...initialValues,
        category: e.target.value,
        id: newCategorySelected?.id,
        image: newCategorySelected?.image,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNews();
  };

  const postNews = async () => {
    try {
      const data = await getNews();
      const sameData = data.find((news) => news.id === initialValues.id);
      if (sameData) {
        await updateNews(initialValues);
      } else {
        try {
          await createNews(initialValues, setInitialValues);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataCategories(setCategories);
  }, []);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <input
        className="input-field"
        type="text"
        name="name"
        value={initialValues.name || ""}
        onChange={handleChange}
        minLength="5"
        required
      ></input>

      <label htmlFor="content">Content</label>
      <CKEditor
        editor={ClassicEditor}
        data={initialValues.content || ""}
        required={true}
        onChange={(event, editor) => {
          const data = editor.getData();
          setInitialValues({ ...initialValues, content: data });
        }}
      />

      <label htmlFor="category">Category</label>
      <select
        className="select-field"
        name="category"
        value={initialValues.category || ""}
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
      {initialValues.image ? (
        <img src={initialValues.image} alt={initialValues.category}></img>
      ) : null}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default NewsForm;
