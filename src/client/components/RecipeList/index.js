import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecipeCard from '@components/Recipe';

const PUBLIC_URL = "http://127.0.0.1:63423/recipes";

const StyledRecipeList = styled.div`
    flex: 1;
    display: grid;
    /* This will result in 2 columns, each one of 1fr */
    grid-template-columns: repeat(3, 1fr);
    /* This will result in 2 rows, each one of 250px */
    grid-template-rows: repeat(auto-fill, 500px);

    justify-items: center;
    align-items: center;
    
    padding: 1em;

    min-height: 100%;
    background-color: rgb(20,20,20);
`;

const RecipeList = () => {
    const [hasError, setErrors] = useState(false);
    const [recipes, setRecipes] = useState({});

    const fetchData = async () => {
        const response = await fetch(PUBLIC_URL);
        response
            .json()
            .then(response => setRecipes(response))
            .catch(error => setErrors(error));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <StyledRecipeList>
            {           
                Object.keys(recipes).map((recipe) => 
                    <RecipeCard key={recipe} {...recipes[recipe]} />
                )
            }
        </StyledRecipeList>
    );
}

export default RecipeList;