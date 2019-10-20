import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import "regenerator-runtime/runtime";

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import RecipeList from '@components/RecipeList';
import RecipePage from '@components/RecipePage';

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
    font-size: 18px;
  }
`;

const Main = styled.main`
    display: flex;
    min-height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={RecipeList} />
            <Route path='/recipes/:uuid' component={RecipePage} />
          </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;