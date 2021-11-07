import NewsList from './Components/News/NewsList'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/backoffice/categories' component={NewsList} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
