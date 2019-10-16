import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Recipe from '@components/Recipe';

const StyledRecipeList = styled.div`
    display: grid;
    /* This will result in 2 columns, each one of 1fr */
    grid-template-columns: repeat(1, 1fr);
    /* This will result in 2 rows, each one of 250px */
    grid-template-rows: repeat(6, 200px);

    gap: 150px;
    padding-left: 6em;
    padding-top: 3em;
    /* testing delete later */
    background-color: white;
    min-height: 100%;
`;

const RecipeList = () => {
    const [hasError, setErrors] = useState(false);
    const [recipes, setRecipes] = useState({});

    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:53241/recipes");
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
                    <Recipe key={recipe} {...recipes[recipe]} />
                )
            }
        </StyledRecipeList>
    );
}

export default RecipeList;