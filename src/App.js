import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
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
import OrganizationEditionForm from "./Components/Organization/OrganizationEditionForm";
import NewsDetailLayout from "./Components/News/Detail/NewsDetailLayout";
import Backoffice from "./Components/Backoffice/Backoffice";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import MemberEditCreate from "./Components/Members/MemberEditCreate";
import Home from "./Components/Home";
import AboutUs from "./Components/About/AboutUs";
import ContactForm from "./Components/Contact/ContactForm";
import NewsListEditTable from "./Components/News/NewsListEditTable";
import MembersResults from "./Components/Backoffice/Members/MembersResults";
import EditHomeForm from "./Components/Backoffice/Home/EditHomeForm";
import CategoriesList from "./Components/Backoffice/Categories/CategoriesList";
import NewsList from "./Components/News/NewsList";
import Donation from "./Components/Donations/Donation";
import Thanks from "./Components/Donations/Thanks";
function App() {

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create-activity" component={ActivitiesForm} />
              <Route path="/create-category" component={CategoriesForm} />
              <Route path="/create-news" component={NewsForm} />
              <Route path="/backoffice/members/edit" component={MemberEditCreate} />
              <Route
                path="/backoffice/organization/edit"
                component={OrganizationEditionForm}
              />
              <Route path="/backoffice/create-slide" component={SlidesForm} />
              <Route path="/backoffice/news" component={NewsListEditTable} />
              <Route path="/create-testimonials" component={TestimonialForm} />
              <Route path="/create-user" component={UserForm} />
              <Route path="/create-member" component={MembersForm} />
              <Route path="/create-project" component={ProjectsForm} />
              <Route path="/school-campaign" component={SchoolCampaign} />
              <Route path="/toys-campaign" component={ToysCampaign} />
              <Route path="/edit-activity/:activityId" component={ActivitiesForm} />
              <Route
                path="/edit-testimonial/:testimonialId"
                component={TestimonialForm}
              />
              <Route path="/edit-project/:projectId" component={ProjectsForm} />
              <Route path="/novedades/:id" component={NewsDetailLayout} />
              <Route path="/novedades" component={NewsList} />
              <Route path="/activity-detail/:id" component={Detail} />
              <Route path="/backoffice" component={Backoffice} />
              <Route path="/backoffice/members" component={MembersResults} />
              <Route path="/activities" component={ActivitiesList} />
              <Route path="/nosotros" component={AboutUs} />
              <Route path="/create-contact-message" component={ContactForm} />
              <Route path="/donate" component={Donation} />
              <Route path="/thanks" component={Thanks} />
              <Route path="/backoffice/home" component={EditHomeForm} />
            </Switch>
          </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
