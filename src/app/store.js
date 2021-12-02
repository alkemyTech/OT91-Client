import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "./activitiesReducer/activitiesReducer";
import authReducer from "./authReducer/authReducer";
import userReducer from "./usersReducer/userReducer";
import membersReducer from "./MembersReducer/membersReducer";
import newsReducer from "./NewsReducer/newsReducer";
import aboutUsReducer from "./aboutUsReducer/aboutUsReducer";
import slidesReducer from "./SlidesReducer/slidesReducer";

const store = configureStore({
  reducer: {
    authorization: authReducer,
    users: userReducer,
    members: membersReducer,
    activities: activitiesReducer,
    news: newsReducer,
    aboutUs: aboutUsReducer,
    slides: slidesReducer,
  },
});

export default store;
