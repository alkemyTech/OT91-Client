import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from './app/store';
import {AnimatedSwitch} from 'react-router-transition';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BackofficeRouter from "./Components/Backoffice/BackofficeRouter";
import LoginForm from './Components/Auth/LoginForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { GlobalTheme } from "./Styles/Theme"
import PublicRouter from "./Components/PublicWeb/PublicRouter";
function App() {

  return (
    <>
      <Provider store={store}>
      <ThemeProvider theme={GlobalTheme}>
          <BrowserRouter>
            <AnimatedSwitch
              atEnter={{opacity:0}}
              atLeave={{opacity:1}}
              atActive={{opacity:1}}
            >
              <Route path="/login" component={LoginForm} />
              <PrivateRoute path="/backoffice" component={BackofficeRouter} />
              <PublicRouter/>
            </AnimatedSwitch>
          </BrowserRouter>
          </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
