import React from 'react';
import RecipeCard from '@components/RecipeCard';
import { RECIPES_URL } from '@config/index.js';
import useFetch from '@hooks/useFetch';

import './index.css';

const RecipeList = () => {
    const { response, error } = useFetch(RECIPES_URL);
    
    return (
        <div id='recipe-list'>
            {           
                Object.keys(response).map((recipe) => 
                    <RecipeCard key={recipe} {...response[recipe]} />
                )
            }
        </div>
    );
}

export default RecipeList;