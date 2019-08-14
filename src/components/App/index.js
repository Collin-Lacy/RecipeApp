import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import AuthenticateService from '../../../src/services/AuthenticateService';

import './index.css';

const App = () => (
  <React.Fragment>
    <AuthenticateService />
  </React.Fragment>
);

export { App };
export default hot(App);
