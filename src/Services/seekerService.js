import axios from "axios";

export const searchIn = async (
  endpointName,
  valueSearched,
  minLength,
  getAll
) => {
  if (valueSearched.length >= minLength) {
    return await axios
      .get(
        `http://ongapi.alkemy.org/api/${endpointName}?search=${valueSearched}`
      )
      .then((res) => res.data.data);
  } else {
    return getAll();
  }
};
