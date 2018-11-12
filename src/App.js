import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as routes from 'constants/routes/ui';
import { getAuthUserRequest } from 'actions/auth'
import HomePage from 'containers/HomePage';
import history from './history';
import { Redirect } from 'react-router-dom'
import './App.css';


class App extends Component {
  componentDidMount(){
    this.props.actions.getAuthUserRequest()
  }
  
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={routes.home} component={HomePage} />
          <Redirect to={routes.home}/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAuthUserRequest
  }, dispatch)
})

export default connect(null, mapDispatchToProps)(App);
