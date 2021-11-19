import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer/authReducer';
import userReducer from './usersReducer/userReducer';

const store = configureStore({
  reducer: {
    authorization: authReducer,
    users : userReducer
  },
});

export default store
