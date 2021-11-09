function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/backoffice/organization/edit" component={OrganizationEditionForm}/>
          <Route path="/backoffice/create-slide" component={SlidesForm} />
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
          <Route path="/activity-detail/:id" component={Detail} />
          <Route path="/activities" component={ActivitiesList} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
