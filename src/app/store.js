import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer/authReducer';

export default configureStore({
  reducer: {
    authorization: authReducer,
  },
});
