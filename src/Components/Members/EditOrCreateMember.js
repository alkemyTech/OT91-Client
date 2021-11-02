import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";
import "../FormStyles.css";

const EditCreateMember = () => {
  const [member, setMember] = useState({
    name: "",
    description: "",
    imageMember: "",
    social_media: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setMember({ ...member, name: e.target.value });
    }

    if (e.target.name === "image") {
      const fileValid =
        e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/png";
      if (fileValid) {
        setMember({ ...member, imageMember: e.target.value });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please select a valid image",
        });
      }
    }
    if (e.target.name === "social_media") {
      setMember({ ...member, social_media: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (member.description === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in the description",
      });
    } else {
      console.log(member);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className="input-field"
        type="text"
        name="name"
        value={member.name}
        onChange={handleChange}
        placeholder="Name"
        minLength="4"
        required
      ></input>
      <label>Description</label>
      <CKEditor
        editor={ClassicEditor}
        data={member.description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setMember({ ...member, description: data });
        }}
      />
      <label>Image</label>
      <input
        type="file"
        onChange={handleChange}
        name="image"
        value={member.imageMember}
        id="file-id"
        accept="image/png, image/jpeg"
        required
      />

      <label>Social media</label>
      <input
        className="input-field"
        type="url"
        name="social_media"
        value={member.social_media}
        onChange={handleChange}
        placeholder="url"
        required
      ></input>

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default EditCreateMember;
