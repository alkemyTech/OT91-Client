import axios from 'axios';

const config = {
    headers: {
        Group: 91                //Aqui va el ID del equipo!!
    }
}

const privateInstance = axios.create({
    baseURL: 'http://ongapi.alkemy.org/public/api',
});

privateInstance.interceptors.request.use((config)=> {
    config.headers.Authorization = localStorage.getItem('token');
    config.headers.Group = 91;
    return config
})

export const privateGet = async (url,id,params={}) => {privateInstance.get(`${url}${id?`/${id}`:''}`,{params})};

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get;
