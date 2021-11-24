import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from './app/store'
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
import Detail from "./Components/Activities/Detail/Detail";
import NewsDetailLayout from "./Components/News/Detail/NewsDetailLayout";
import BackofficeRouter from "./Components/Backoffice/BackofficeRouter";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import Home from "./Components/Home";
import AboutUs from "./Components/About/AboutUs";
import ListSlides from './Components/Slides/ListSlides/ListSlides';
import ContactForm from "./Components/Contact/ContactForm";
import NewsList from "./Components/News/NewsList";
import Donation from "./Components/Donations/Donation";
import Thanks from "./Components/Donations/Thanks";
import LoginForm from './Components/Auth/LoginForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
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
              <Route path="/novedades/:id" component={NewsDetailLayout} />
              <Route path="/novedades" component={NewsList} />
              <Route path="/activity-detail/:id" component={Detail} />
              <Route path="/activities" component={ActivitiesList} />
              <Route path="/nosotros" component={AboutUs} />
              <Route path="/create-contact-message" component={ContactForm} />
              <Route path="/donate" component={Donation} />
              <Route path="/thanks" component={Thanks} />
              <PrivateRoute path="/backoffice" component={BackofficeRouter}/>
              <Route path="/login" component={LoginForm} />
              <LoginForm></LoginForm>
            </Switch>
          </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
