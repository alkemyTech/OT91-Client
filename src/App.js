import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import Detail from "./Components/Activities/Detail/Detail";
import OrganizationEditionForm from './Components/Organization/OrganizationEditionForm';
import NewsDetailLayout from './Components/News/Detail/NewsDetailLayout';
import Home from './Components/Home';
import Donation from './Components/Donations/Donation';
import Thanks from './Components/Donations/Thanks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/organization/edit" component={OrganizationEditionForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/edit-activity/:activityId" component={ActivitiesForm} />
          <Route path="/edit-testimonial/:testimonialId" component={TestimonialForm} />
          <Route path="/edit-project/:projectId" component={ProjectsForm} />
          <Route path="/novedades/:id" component={NewsDetailLayout} />
          <Route path="/activity-detail/:id" component={Detail} />
          <Route path="/donate" component={Donation} />
          <Route path="/thanks" component={Thanks} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
