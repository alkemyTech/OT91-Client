import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import EditHomeForm from './Home/EditHomeForm';
import MembersResults from './Members/MembersResults';
import ActivitiesTable from './ActivitiesBackOffice/ActivitiesTable';
import CategoriesList from './Categories/CategoriesList';
import BackofficeUsers from './Users/BackofficeUsers';
import MemberEditCreate from "../Members/MemberEditCreate";
import OrganizationEditionForm from "../Organization/OrganizationEditionForm";
import SlidesForm from "../Slides/SlidesForm";
import NewsListEditTable from "../News/NewsListEditTable";
import BackofficeHeader from './BackofficeHeader'


const BackOfficeRouter = () => {
    return (
        <div>
            <BackofficeHeader/>
            <h1>Bienvenid@ a Backoffice</h1>
            <p>Aqui podras administrar el sitio</p>
            <Router>
                <Switch>
                    <Route path="/backoffice/home" component={EditHomeForm}/>
                    <Route path="/backoffice/members" component={MembersResults} />
                    <Route path="/backoffice/create-category" component={CategoriesList}/>
                    <Route path="/backoffice/users/create" component={BackofficeUsers}/>
                    <Route path="/backoffice/activities" component={ActivitiesTable}/>
                    <Route path="/backoffice/members/edit" component={MemberEditCreate} />
                    <Route
                        path="/backoffice/organization/edit"
                        component={OrganizationEditionForm}
                    />
                    <Route path="/backoffice/create-slide" component={SlidesForm} />
                    <Route path="/backoffice/news" component={NewsListEditTable} />
                </Switch>
            </Router>
        </div>
    )
};

export default BackOfficeRouter;
