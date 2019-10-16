import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { HashRouter, Switch, Route} from 'react-router-dom';
import Layout from '@containers/Layout';

import RecipeList from '@components/RecipeList';
import "regenerator-runtime/runtime";

const GlobalStyle = createGlobalStyle`
  /* Remove browser defaults */
  * {
    margin: 0;
    padding: 0;
  }

  /* Remove browser defaults for button */
  button {
    border: 0;
    background: transparent;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
  }

  html {
    height: 100%;
    width: 100%;
    background-color: rgb(51,51,51);
    font-size: 18px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Layout />
          <Switch>
            <Route path='/' exact/>
            <Route path='/recipes' />
            <Route path='/specials'/>
          </Switch>
      </HashRouter>
    </>
  );
};

export default App;