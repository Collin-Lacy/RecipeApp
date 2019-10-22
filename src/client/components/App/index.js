import React from 'react';
import "regenerator-runtime/runtime";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import RecipeList from '@components/RecipeList';
import RecipePage from '@components/RecipePage';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={RecipeList} />
          <Route path='/recipes/:uuid' component={RecipePage} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;