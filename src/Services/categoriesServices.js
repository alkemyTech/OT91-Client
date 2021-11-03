import axios from "axios";

const getCategory = async () => {
  try {
    const response = await axios.get(
      "http://ongapi.alkemy.org/public/api/categories"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export { getCategory };
