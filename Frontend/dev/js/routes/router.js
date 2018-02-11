import React, {Component} from 'react'
import {connect} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {Link, IndexRoute, Switch} from 'react-router';
import {Router,BrowserRouter , Route} from 'react-router-dom';

import Parent from "AppContainers/Parent"
import Login from "AppContainers/Login"

const history = createBrowserHistory()

class AllRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render(){
      return(
          <BrowserRouter history={history}>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/' component={Parent}/>
            </Switch>
          </BrowserRouter>
      )
    }
}

const mapState = (state) => ({
  userData: state.users
});

export default connect(mapState)(AllRoutes)
