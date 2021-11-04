import axios from 'axios';

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

export default Get;

export const tokenExists = () => {
    const token = localStorage.getItem('token');
    const HeaderAuthorization = {Bearer: token};
    return token ? HeaderAuthorization : {};
}
