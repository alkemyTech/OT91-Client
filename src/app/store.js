import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer/authReducer';
import membersReducer from './MembersReducer/membersReducer';

const store = configureStore({
  reducer: {
    authorization: authReducer,
    members: membersReducer,
   },
});

export default store
