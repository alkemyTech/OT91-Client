import axios from 'axios';
const URL = 'http://ongapi.alkemy.org/private/api';

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

const privateGet = async (url,id,params={}) => {
    const idPlaceholder = id ? `/${id}` : '';
    const { data } = axiosInstance.get(`${url}${idPlaceholder}`, {params})
    return data
};

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

const getAuthorizationHeader = () => {
    const token = localStorage.getItem('token');
    if(!token) return;
    return {Authorization: `Bearer: ${token}`};
};

const verifyProps = (path,id,body) => {
    if (!path || !id || !body) {
        throw new Error(`props not specified for async action put`);
    };
};

const privateRequestPut = async(path,id,body) => {
    verifyProps(path,id,body)

    const {Authorization}=getAuthorizationHeader();

    const headers={...config.headers,Authorization}

    let {data} = await axios.put(`${URL}/${path}/${id}`,body,headers);

    return data;
};
 const privateDelete = async(url,id) =>{
    const getAuthorization = getAuthorizationHeader();
    if(!getAuthorization.Authorization) return;
    else{
        return await axios.delete(url,id,{
            headers:getAuthorization,
        })
        .then((response) => (response.data))
          .catch((error) => console.log(error));
    }
}
const privatePost = async (url, data) => {
    const authorizationHeader = getAuthorizationHeader();
    if (!authorizationHeader.Authorization) throw new Error('No token');
    return await axios
      .post(url, data, {
        headers: authorizationHeader,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
export {privatePost, Get, privateRequestPut,getAuthorizationHeader,privateGet, privateDelete }
