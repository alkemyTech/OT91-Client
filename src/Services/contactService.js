import axios from "axios";
const URL = 'http://ongapi.alkemy.org/public/api/';


export const getContactId = async (contactId) => {
    let {data}= await axios.get(`${URL}/contacts/${contactId}`);
    return data;
};

export const getContactsAll = async () => {
    let {data}= await axios.get(`${URL}/contacts`);
    return data;
}

export const modifyContact = async (contactId,body) => {
    let {data}= await axios.put(`${URL}/contacts/${contactId}`,body);
    return data;
};

export const createContact = async (body) => {
    let {data}= await axios.post(`${URL}/contacts`,body);
    return data;
};

export const deleteContac = async (contactId) =>{
    let {data} = await axios.delete(`${URL}/contacts/${contactId}`);
    return data;
};

export const createOrUpdateContact = async (contactId,body)=>{
    if(contactId){
        let {data} = await getContactId(contactId)
        data && modifyContact(contactId,body)
    }else createContact(body)
};



