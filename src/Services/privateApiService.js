import axios from 'axios';

const config = {
    headers: {
        Group: 91                //Aqui va el ID del equipo!!
    }
}

const axiosInstance = axios.create({
    baseURL: 'http://ongapi.alkemy.org/private/api',
});

axiosInstance.interceptors.request.use((config)=> {
    config.headers.Authorization = getAuthorizationHeader();
    config.headers.Group = 91;
    return config
})

export const privateGet = async (url,id,params={}) => {
    const idPlaceholder = id ? `/${id}` : '';
    axiosInstance.get(`${url}${idPlaceholder}`, {params})
};

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getAuthorizationHeader = () => {
    const token = localStorage.getItem('token');
    if(!token) return;
    return {Authorization: `Bearer: ${token}`};
}

export default Get
