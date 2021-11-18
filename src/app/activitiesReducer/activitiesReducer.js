import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as activityService from '../../Services/activityService';

export const getAllActivities = createAsyncThunk("activities/getAllActivities", activityService.getAllActivities);
export const getActivity = createAsyncThunk('activities/getActivity', activityService.getActivityById);
export const createActivity = createAsyncThunk('activities/createActivity', activityService.createActivity);
export const updateActivity = createAsyncThunk('activities/updateActivity', activityService.modifyActivity);
export const deleteActivity = createAsyncThunk('activities/deleteActivity', activityService.deleteActivityById);

const activitiesSlice = createSlice({
    name:"activitiesReducer",
    initialState: {
        activities: [],
        activity: {},
        status: ''
    },
    extraReducers: {
        [getAllActivities.pending]: (state) => { state.status = 'loading' },
        [getAllActivities.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activities = action.payload;
        },
        [getAllActivities.rejected]: (state) => { state.status = 'failed' },
        [getActivity.pending]: (state) => { state.status = 'loading' },
        [getActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activity = action.payload.data;
        },
        [getActivity.rejected]: (state) => { state.status = 'failed' },
        [createOrUpdateActivity.pending]: (state) => { state.status = 'loading' },
        [createOrUpdateActivity.fulfilled]: (state, action) => {
            state.status = 'sucess';
            state.activity = action.payload;
        },
        [createOrUpdateActivity.rejected]: (state) => { state.status = 'failed' },
        [deleteActivity.pending]: (state) => { state.status = 'loading' },
        [deleteActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activities = state.activities.filter(deletedActivity => deletedActivity.id != action.meta.arg);
        },
        [deleteActivity.rejected]: (state) => { state.status = 'failed' }
    }
});

export default activitiesSlice.reducer;
