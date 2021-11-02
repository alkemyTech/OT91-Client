import axios from 'axios';

export const createUser = async (user) => {
    const {data} = await axios.post('http://ongapi.alkemy.org/api/users',user)
    return data
}

export const updateUser = async (id,user) => {
    const {data} = await axios.put(`http://ongapi.alkemy.org/api/users/${id}`,user)
    return data
}