import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import RecipeList from '@components/RecipeList';
import RecipePage from '@components/RecipePage';

const MainContent = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={RecipeList} />
                <Route path='/recipes/:uuid' component={RecipePage}></Route>
                <Route path='/specials'/>
            </Switch>
        </div>
    );
}

export default MainContent;