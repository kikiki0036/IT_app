import React,{useState,useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Request from '../pages/Request'
import History from '../pages/History'
import Generate from '../pages/Generate'
import GenerateEmp from '../pages/Generate(EMP)'
import Chatbot from '../pages/Chatbot'
import NotebookCenterBooking from '../pages/NotebookCenterBooking'
import ManageTeam from '../pages/ManageTeam'
import Config from '../pages/config'

import Logout from './Logout'


const Routes = (props) => {

    // console.log(props.IdEmp);

    localStorage.setItem('id_emp', props.IdEmp)
   

    return (
        <Switch>
            <Route path='/dashboard'exact component={Dashboard}/>
            <Route path='/dashboard/customers' component={Customers}/>
            <Route path='/dashboard/history' component={History}/>
            <Route path='/dashboard/request' component={Request}/>
            <Route path='/dashboard/generate' component={Generate}/>
            <Route path='/dashboard/generate-emp' component={GenerateEmp}/>
            <Route path='/dashboard/chatbot' component={Chatbot}/>
            <Route path='/dashboard/notebook_center' component={NotebookCenterBooking}/>
            <Route path='/dashboard/team-manage' component={ManageTeam}/> 
            <Route path='/dashboard/config' component={Config}/>
            <Route path='/logout' component={Logout}/>
          
        </Switch>
        
    )
}

export default Routes
