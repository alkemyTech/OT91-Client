import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './activitiesReducer/activitiesReducer';
import authReducer from './authReducer/authReducer';
import membersReducer from './MembersReducer/membersReducer';

const store = configureStore({
  reducer: {
    authorization: authReducer,
    members: membersReducer,
    activities: activitiesReducer
  },
});

export default store
