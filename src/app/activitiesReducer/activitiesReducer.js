import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as activityService from '../../Services/activityService';
import axios from 'axios';

const URL = process.env.REACT_APP_ACTIVITY_URL

export const getAllActivities = createAsyncThunk(
    "activities/getAllActivities",
    activityService.getAllActivities
)
export const getActivity = createAsyncThunk(
    'activities/getActivity',
    activityService.getActivityById
)
export const createOrUpdateActivity = createAsyncThunk(
    'activities/createOrUpdateActivity',
    activityService.createOrUpdateActivity
)
export const deleteActivity = createAsyncThunk(
    'activities/deleteActivity',
    activityService.deleteActivityById()
)
const activitiesSlice = createSlice({
    name:"activitiesReducer",
    initialState: {
        activities: [],
        activity: {},
        status: ''
    },
    extraReducers: {
        [getAllActivities.pending]: (state) => state.status = 'loading',
        [getAllActivities.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activities = action.payload;
        },
        [getAllActivities.rejected]: (state) => state.status = 'failed',
        [getActivity.pending]: (state) => state.status = 'loading',
        [getActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activity = action.payload;
        },
        [getActivity.rejected]: (state) => state.status = 'failed',
        [createOrUpdateActivity.pending]: (state) => state.status = 'loading',
        [createOrUpdateActivity.fulfilled]: (state, action) => {
            state.status = 'sucess';
            state.activity = action.payload;
        },
        [createOrUpdateActivity.rejected]: (state) => state.status = 'failed',
        [deleteActivity.pending]: (state) => state.status = 'loading',
        [deleteActivity.fulfilled]: (state) => state.status = 'success',
        [deleteActivity.rejected]: (state) => state.status = 'failed'
    }
});

export default activitiesSlice.reducer;
