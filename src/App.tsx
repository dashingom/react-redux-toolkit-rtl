import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import {Security, SecureRoute, LoginCallback} from '@okta/okta-react';
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js';
import Home from './Home';
import Login from './Login';
import config from './okta-config';
import AddDevice from './pages/AddDevice';
import MyProfile from './pages/MyProfile';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}>
          <SecureRoute path="/" exact component={Home} />
          <SecureRoute path="/add-device" exact component={AddDevice} />
          <SecureRoute path="/my-profile" exact component={MyProfile} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/login/callback" component={LoginCallback} />
        </Security>
      </header>
    </div>
  );
};

export default App;
