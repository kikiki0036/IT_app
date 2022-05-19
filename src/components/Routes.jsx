import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Request from '../pages/Request'
import History from '../pages/History'
import Generate from '../pages/Generate'
import config from '../pages/config'

import Logout from './Logout'


const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard'exact component={Dashboard}/>
            <Route path='/dashboard/customers' component={Customers}/>
            <Route path='/dashboard/history' component={History}/>
            <Route path='/dashboard/request' component={Request}/>
            <Route path='/dashboard/generate' component={Generate}/>
            <Route path='/dashboard/config' component={config}/>
            <Route path='/logout' component={Logout}/>
          
        </Switch>
    )
}

export default Routes
