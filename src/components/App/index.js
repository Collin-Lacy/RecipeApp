import * as React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import Header from '@containers/Header';
import LoginForm from '@views/LoginForm';

import './index.css';

const App = () => (
  <HashRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact/>
        <Route path='/login' component={LoginForm}/>
      </Switch>
    </React.Fragment>
  </HashRouter>
);

export default App;