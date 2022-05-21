import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import Layout from './components/layout/Layout'
import Verify from './Verify';
import Chatbot from './pages/Chatbot2'
import { StyledEngineProvider } from '@mui/material/styles';
import NewTable from './components/m-ui/NewTable';
import Test_dialog_reqItem from './components/fileTest/Test_dialog_reqItem'
import Signin from "./components/Login/Signin";

function App() {

  return (

    <BrowserRouter>

      <React.Fragment>

        <Route exact path="/">
          <Verify />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/dashboard">
          <Layout />
        </Route>
        <Route path="/xxx">
          <Test_dialog_reqItem />
        </Route>
        <Route path="/zzz">
          <Signin />
        </Route>
        <Route path="/ooo">
          <NewTable />
        </Route>

      </React.Fragment>
      <Chatbot /> 
    </BrowserRouter>
  );
}

export default App;