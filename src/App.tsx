import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Auth from './components/layouts/auth';
import Main from './components/layouts/main';
import { createBrowserHistory } from 'history';
import { RootStoreContext } from './stores/rootStore';
import { observer } from 'mobx-react';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import LoaderPage from './components/common/loading/Loader';

export const history = createBrowserHistory();

const App: React.FC = () => { 

  const rootStore = useContext(RootStoreContext)
  const { setAppLoaded, appLoaded, token } = rootStore.commonStore
  const { getUser } = rootStore.sessionStore

  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded())
    }
    else{ 
      setAppLoaded()
    }
    console.log(`is apploaded : ${appLoaded}`)
  }, [getUser, setAppLoaded, token, appLoaded])

  if(!appLoaded) return <LoaderPage/>

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/auth" component={Auth}></PublicRoute>
        <PrivateRoute path="/" component={Main}></PrivateRoute>
      </Switch>
    </Router>
  );
};

export default observer(App);
