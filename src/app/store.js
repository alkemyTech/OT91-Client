import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer/authReducer';

const store = configureStore({
  reducer: {
    authorization: authReducer,
  },
});

export default store
