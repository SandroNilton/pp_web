import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/layouts/auth';
import Main from './components/layouts/main';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" exact component={Auth}></Route>
        <Route path="/" exact component={Main}></Route>
      </Switch>
    </Router>
  );
};

export default App;
