import axios from "axios";
const URL = 'http://ongapi.alkemy.org/public/api/contacts';

const apiService = async(params,method,body) => {
    if (!method) {
        throw new Error(`'method' not specified for async action`);
    }

    if(params){
        switch (method) {
            case "GET":
                var {data}= await axios.get(`${URL}/${params}`)
                break;
            case "PUT":
                var {data} =  await axios.put(`${URL}/${params}`,body);
                break;
            case "DELETE":
                var {data} = await axios.delete(`${URL}/${params}`);
                break;
        }
    }else {
        switch(method){
            case "POST":
                var {data} = await axios.post(`${URL}`,body);
                break
            case "GET":
                var {data}= await axios.get(`${URL}`);
                break
        }
    }
    return data;
};

export default apiService;
