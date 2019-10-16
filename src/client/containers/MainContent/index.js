import * as React from 'react';
import './index.css';
import styled from 'styled-components';
import RecipeList from '@components/RecipeList';

const MainContent = () => {
    return (
        <div className= 'main-content'>
            <RecipeList></RecipeList>
        </div>
    );
}

export default MainContent;