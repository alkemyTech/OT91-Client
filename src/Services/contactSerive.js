import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";
const URL = "http://ongapi.alkemy.org/public/api/";

export const getContactId = async (contactId) => {
  try {
    let { data } = await axios.get(`${URL}/contacts/${contactId}`);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const getContactsAll = async () => {
  try {
    let { data } = await axios.get(`${URL}/contacts`);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const modifyContact = async (contactId, body) => {
  try {
    let { data } = await axios.put(`${URL}/contacts/${contactId}`, body);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const createContact = async (body) => {
  try {
    let { data } = await axios.post(`${URL}/contacts`, body);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const deleteContac = async (contactId) => {
  try {
    let { data } = await axios.delete(`${URL}/contacts/${contactId}`);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const createOrUpdateContact = async (contactId, body) => {
  try {
    if (contactId) {
      let { data } = await getContactId(contactId);
      data && modifyContact(contactId, body);
    } else createContact(body);
  } catch (err) {
    showErrorAlert(err);
  }
};
