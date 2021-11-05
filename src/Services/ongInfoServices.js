import axios from "axios";

const getImageInfo = async () => {
  try {
    const res = await axios.get("http://ongapi.alkemy.org/public/api/slides");
    const dataImage = res.data.data.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch (err) {
    console.log(err);
  }
};

export { getImageInfo };
