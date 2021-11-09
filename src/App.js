function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
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
