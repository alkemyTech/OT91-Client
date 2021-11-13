import axios from 'axios';

const URL = process.env.REACT_APP_ACTIVITY_URL;

export const getActivityId = async (id) => {
    let {data}= await axios.get(`${URL}/${id}`);
    return data;
};

export const modifyActivity = async (id,body) => {
    let {data}= await axios.put(`${URL}/${id}`,body);
    return data;
};

export const createActivity = async (body) => {
    let {data}= await axios.post(`${URL}`,body);
    return data;
};

export const createOrUpdateActivity = async (activityId,body)=>{
    if(activityId){
        let {data} = await getActivityId(activityId)
        data && modifyActivity(activityId,body)
    }else createActivity(body)
};

export const getAllActivities = async () =>{
    let {data} =await axios.get(`${URL}`)
    return data
};

export default getActivityId;

