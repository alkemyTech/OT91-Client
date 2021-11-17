import axios from "axios";
const URL = process.env.REACT_APP_API_URL_CONTACT;

export const getContactId = async (contactId) => {
    let {data}= await axios.get(`${URL}/${contactId}`);
    return data;
};

export const getContactsAll = async () => {
    let {data}= await axios.get(`${URL}`);
    return data;
};

export const modifyContact = async (contactId,body) => {
    let {data}= await axios.put(`${URL}/${contactId}`,body);
    return data;
};

export const createContact = async (body) => {
    let {data}= await axios.post(`${URL}`,body);
    return data;
};

export const deleteContac = async (contactId) =>{
    let {data} = await axios.delete(`${URL}/${contactId}`);
    return data;
};

export const createOrUpdateContact = async (contactId,body)=>{
    if(contactId){
        let {data} = await getContactId(contactId);
        data && modifyContact(contactId,body);
    }else createContact(body);
};
