import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "../Activities/Detail/Detail";
import NewsDetailLayout from "../News/Detail/NewsDetailLayout";
import ActivitiesList from "../Activities/ActivitiesList";
import Home from "../Home";
import AboutUs from "../About/AboutUs";
import ListSlides from "../Slides/ListSlides/ListSlides";
import ContactForm from "../Contact/ContactForm";
import NewsList from "../News/NewList/NewsList";
import Donation from "../Donations/Donation";
import Thanks from "../Donations/Thanks";
import Layout from "../Layout/Layout";

const PublicRouter = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/novedades/:id" component={NewsDetailLayout} />
            <Route path="/novedades" component={NewsList} />
            <Route path="/activity-detail/:id" component={Detail} />
            <Route path="/activities" component={ActivitiesList} />
            <Route path="/nosotros" component={AboutUs} />
            <Route path="/create-contact-message" component={ContactForm} />
            <Route path="/donate" component={Donation} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/list-slides" component={ListSlides} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default PublicRouter;
