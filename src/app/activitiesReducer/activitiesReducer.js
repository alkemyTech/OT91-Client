import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = process.env.REACT_APP_ACTIVITY_URL

export const getAllActivities = createAsyncThunk(
    "activities/getAllActivities",
    async () => {
        return await axios.get(URL)
            .then(response => response.data.data);
    }
)

export const getActivity = createAsyncThunk(
    'activities/getActivity',
    async(id) => {
        return await axios.get(`${URL}/${id}`)
            .then(response => response.data.data)
    }
)

const activitiesSlice = createSlice({
    name:"activitiesReducer",
    initialState: {
        activities: [],
        activity: {},
        status: ''
    },
    extraReducers: {
        [getAllActivities.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getAllActivities.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activities = action.payload;
        },
        [getAllActivities.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [getActivity.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activity = action.payload;
        },
        [getActivity.pending]: (state, action) => {
            state.status = 'failed';
        },
    }
});

export default activitiesSlice.reducer;
