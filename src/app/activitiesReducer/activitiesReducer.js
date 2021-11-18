import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as activityService from '../../Services/activityService';

export const getAllActivities = createAsyncThunk("activities/getAllActivities", activityService.getAllActivities);
export const getActivity = createAsyncThunk('activities/getActivity', activityService.getActivityById);
export const createActivity = createAsyncThunk('activities/createActivity', activityService.createActivity);
export const updateActivity = createAsyncThunk('activities/updateActivity', activityService.modifyActivity);
export const deleteActivity = createAsyncThunk('activities/deleteActivity', activityService.deleteActivityById);
export const createOrUpdateActivity = createAsyncThunk('activities/createOrUpdateActivity', activityService.createOrUpdateActivity);

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
        [deleteActivity.pending]: (state) => { state.status = 'loading' },
        [deleteActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activities = state.activities.filter(deletedActivity => deletedActivity.id != action.meta.arg);
        },
        [deleteActivity.rejected]: (state) => { state.status = 'failed' },
        [createActivity.pending]: (state) => { state.status = 'loading' },
        [createActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            state.activities = [...state.activities, action.payload];
        },
        [createActivity.rejected]: (state) => { state.status = 'failed' },
        [updateActivity.pending]: (state) => { state.status = 'loading' },
        [updateActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            const updatedActivityIndex = state.activities.findIndex(activity => activity.id == action.payload.id);
            state.activities[updatedActivityIndex] = action.payload;
        },
        [updateActivity.rejected]: (state) => { state.status = 'failed' },
        [createOrUpdateActivity.pending]: (state) => { state.status = 'loading'},
        [createOrUpdateActivity.fulfilled]: (state, action) => {
            state.status = 'success';
            getAllActivities(action.payload.id);
        },
        [createOrUpdateActivity.rejected]: (state) => { state.status = 'failed' }
    }
});

export default activitiesSlice.reducer;
