import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as routes from 'constants/routes/ui';
import { getAuthUserRequest } from 'actions/auth'
import HomePage from 'containers/HomePage';
import history from './history';
import SignInPage from 'containers/SignInPage';
import SignUpPage from 'containers/SignUpPage';
import AuthCheck from 'containers/AuthCheck';
import {isLoading} from 'selectors/auth';
import {CircleLoader} from 'react-spinners';
import { Grid } from '@material-ui/core';
import './App.css';

const loaderSylesWrp = {
  position: 'absolute', 
  left: 'calc(50% - 75px)', 
  top: 'calc(40% - 75px)'
}

class App extends Component {
  componentDidMount(){
    localStorage.getItem('token') && this.props.actions.getAuthUserRequest()
  }
  
  render() {
    if(this.props.isLoading){
      // TEMP SPINNER, change in future
      return (
        <div style={loaderSylesWrp}>
          <CircleLoader
            sizeUnit={"px"}
            size={150}
            color={'#36D7B7'}
          />
        </div>
      )
    }

    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={routes.signUp} render={ () => <AuthCheck Component={SignUpPage}/> }/>
          <Route path={routes.signIn} render={ () => <AuthCheck Component={SignInPage}/> }/>  
          <Route path={routes.home} render={ () => <AuthCheck Component={HomePage} /> }/>
          <Redirect to ={routes.home} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: isLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAuthUserRequest
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
