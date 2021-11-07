import NewsList from './Components/News/NewsList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/novedades' component={NewsList} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
