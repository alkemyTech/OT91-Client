import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from './app/store';
import {AnimatedSwitch} from 'react-router-transition';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import BackofficeRouter from "./Components/Backoffice/BackofficeRouter";
import LoginForm from './Components/Auth/LoginForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { GlobalTheme } from "./Styles/Theme"
import PublicRouter from "./Components/PublicWeb/PublicRouter";
function App() {

  return (
    <>
      <Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
          <BrowserRouter>
            <AnimatedSwitch
              atEnter={{opacity:0}}
              atLeave={{opacity:0}}
              atActive={{opacity:1}}
            >
              <PrivateRoute path="/create-activity" component={ActivitiesForm} />
              <PrivateRoute path="/create-category" component={CategoriesForm} />
              <PrivateRoute path="/create-news" component={NewsForm} />
              <PrivateRoute path="/create-testimonials" component={TestimonialForm} />
              <PrivateRoute path="/create-user" component={UserForm} />
              <PrivateRoute path="/create-member" component={MembersForm} />
              <PrivateRoute path="/create-project" component={ProjectsForm} />
              <Route path="/school-campaign" component={SchoolCampaign} />
              <Route path="/toys-campaign" component={ToysCampaign} />
              <PrivateRoute path="/edit-activity/:activityId" component={ActivitiesForm} />
              <PrivateRoute
                path="/edit-testimonial/:testimonialId"
                component={TestimonialForm}
              />
              <PrivateRoute path="/edit-project/:projectId" component={ProjectsForm} />
              <PrivateRoute path="/backoffice" component={BackofficeRouter}/>
              <PrivateRoute path="/edit-news/:newsid" component={NewsForm} />
              <Route path="/login" component={LoginForm} />
              <LoginForm></LoginForm>
              <PublicRouter/>
            </AnimatedSwitch>
          </BrowserRouter>
          </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
