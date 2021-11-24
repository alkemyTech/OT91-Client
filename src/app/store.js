import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './activitiesReducer/activitiesReducer';
import authReducer from './authReducer/authReducer';
import userReducer from './usersReducer/userReducer';
import membersReducer from './MembersReducer/membersReducer';
const store = configureStore({
  reducer: {
    authorization: authReducer,
    users : userReducer,
    members: membersReducer,
    activities: activitiesReducer
  },
});

export default store;
