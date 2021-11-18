import axios from 'axios';

const URL = process.env.REACT_APP_ACTIVITY_URL;

export const getActivityById = async (id) => {
    let {data}= await axios.get(`${URL}/${id}`);
    return data;
}
export const modifyActivity = async (id,body) => {
    let {data}= await axios.put(`${URL}/${id}`,body);
    return data;
};

export const createActivity = async (body) => {
    let {data}= await axios.post(`${URL}`,body);
    return data;
};

export const deleteActivityById = async (activityId) => {
    return await axios.delete(`${URL}/${activityId}`)
        .then(response => response.data);
}

export const createOrUpdateActivity = async (activityId,body)=>{
    const activityCreatedOrUpdated = await getActivity(activityId)
        .then(activity => modifyActivity(activityId, body))
        .catch(_ => createActivity(body));
    return activityCreatedOrUpdated;
};

const getActivity = async (id) => {
    const activity = await axios.get(`${URL}/${id}`)
        .then(response => response.data.data)
    return activity;
};

export const getAllActivities = async () =>{
    const allActivities = await axios.get(`${URL}`)
        .then(response => response.data.data);
    return allActivities;
};

export const isValidList = list => list && list.length > 0;

export default getActivity;
