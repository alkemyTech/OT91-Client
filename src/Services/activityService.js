import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/public/api';

export const modifyActivity = async (id,body) => {
    let {data}= await axios.put(`${URL}/activities/${id}`,body);
    return data;
};

export const createActivity = async (body) => {
    let {data}= await axios.post(`${URL}/activities`,body);
    return data;
};

export const deleteActivityById = async (activityId) => {
    return await axios.delete(`${URL}/activities/${activityId}`)
        .then(response => response.data);
}

export const createOrUpdateActivity = async (activityId,body)=>{
    const activityCreatedOrUpdated = await getActivity(activityId)
        .then(activity => modifyActivity(activityId, body))
        .catch(_ => createActivity(body));
    return activityCreatedOrUpdated;
};

const getActivity = async (id) => {
    const activity = await axios.get(`${URL}/activities/${id}`)
        .then(response => response.data.data)
    return activity;
};

export const getAllActivities = async () =>{
    const allActivities = await axios.get(`${URL}/activities`)
        .then(response => response.data.data);
    return allActivities;
};

export default getActivity;

