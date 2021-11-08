import axios from 'axios';
const URL = 'http://ongapi.alkemy.org/private/api';

const config = {
    headers: {
        Group: 91                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

export const getAuthorizationHeader = () => {
    const token = localStorage.getItem('token');
    if(!token) return;
    return {Authorization: `Bearer: ${token}`};
};

const verifyProps = (path,id,body) => {
    if (!path || !id || !body) {
        throw new Error(`props not specified for async action put`);
    };
};

export const privateRequestPut = async(path,id,body) => {
    verifyProps(path,id,body)

    const {Authorization}=getAuthorizationHeader();

    const headers={...config.headers,Authorization}

    let {data} = await axios.put(`${URL}/${path}/${id}`,body,headers);

    return data;
};

export default Get;
