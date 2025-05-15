import React, { useEffect } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Auth from './components/layouts/auth';
import Main from './components/layouts/main';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const App: React.FC = () => {

  const { commonStore, sessionStore } = SessionStore();

  useEffect(() => {
    if (commonStore.token) {
      sessionStore.getUser();
    }
  }, [commonStore.token]);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" exact component={Auth}></Route>
        <Route path="/" exact component={Main}></Route>
      </Switch>
    </Router>
  );
};

export default App;
