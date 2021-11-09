import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/public/api';
const emptyActivity = {id: 0, name: '', description: '', image: ''}

export const getActivityId = async (id) => {
    let {data}= await axios.get(`${URL}/activities/${id}`);
    return data;
};

export const modifyActivity = async (id,body) => {
    let {data}= await axios.put(`${URL}/activities/${id}`,body);
    return data;
};

export const createActivity = async (body) => {
    let {data}= await axios.post(`${URL}/activities`,body);
    return data;
};

export const createOrUpdateActivity = async (activityId,body)=>{
    if(activityId){
        let {data} = await getActivityId(activityId)
        data && modifyActivity(activityId,body)
    }else createActivity(body)
};

const getActivity = async (id) => {
    const activity = await axios.get(`${URL}/activities/${id}`)
        .then(response => {
            if(response.status === 200) return response.data.data;
        })
        .catch(_ => emptyActivity);
    return activity;
};

export const getAllActivities = async () =>{
    let {data} =await axios.get(`${URL}/activities`)
    return data
};

export default getActivity;

