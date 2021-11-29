import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditHomeForm from "./Home/EditHomeForm";
import MembersResults from "./Members/MembersResults";
import ActivitiesTable from "./ActivitiesBackOffice/ActivitiesTable";
import CategoriesList from "./Categories/CategoriesList";
import BackofficeUsers from "./Users/BackofficeUsers";
import MemberEditCreate from "../Members/MemberEditCreate";
import OrganizationEditionForm from "../Organization/OrganizationEditionForm";
import SlidesForm from "../Slides/SlidesForm";
import NewsListEditTable from "../News/NewsListEditTable";
import BackofficeHeader from "./BackofficeHeader";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BackofficeLayout from "./BackofficeLayout/BackofficeLayout";

const BackOfficeRouter = () => {
  return (
    <div>
      <BackofficeHeader />

      <Router>
        <Switch>
          <PrivateRoute exact path="/backoffice" component={BackofficeLayout} />
          <PrivateRoute path="/backoffice/home" component={EditHomeForm} />
          <PrivateRoute path="/backoffice/members" component={MembersResults} />
          <PrivateRoute
            path="/backoffice/create-category"
            component={CategoriesList}
          />
          <PrivateRoute
            path="/backoffice/users/create"
            component={BackofficeUsers}
          />
          <PrivateRoute
            path="/backoffice/activities"
            component={ActivitiesTable}
          />
          <PrivateRoute
            path="/backoffice/members/edit"
            component={MemberEditCreate}
          />
          <PrivateRoute
            path="/backoffice/organization/edit"
            component={OrganizationEditionForm}
          />
          <PrivateRoute
            path="/backoffice/create-slide"
            component={SlidesForm}
          />
          <PrivateRoute path="/backoffice/news" component={NewsListEditTable} />
        </Switch>
      </Router>
    </div>
  );
};

export default BackOfficeRouter;
