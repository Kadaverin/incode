import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import * as routes from 'constants/routes/ui';
import history from './history';
import SignInPage from 'containers/SignInPage';
import SignUpPage from 'containers/SignUpPage';
import HomePage from 'containers/HomePage';
import configureStore from 'store';
import App from './App';
import './index.css';

const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={routes.root} exact component={App} />
        <Route path={routes.signIn} component={SignInPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
