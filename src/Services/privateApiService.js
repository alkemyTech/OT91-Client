import axios from 'axios';
const URL = 'http://ongapi.alkemy.org/api'
const token = localStorage.getItem('token');

const headers = {
    'Authorization': token,
};

const config = {
    headers: {
        Group: 91                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}



export const privateRequestPut = async(path,id,body) => {
    if (!path || !id || !body) {
        throw new Error(`props not specified for async action put`);
    }
 let {data} = await axios.put(`${URL}/${path}/${id},`,headers,body)
 return data
}

export default Get
