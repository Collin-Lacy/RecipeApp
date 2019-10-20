import * as React from 'react';
import styled from 'styled-components';
const PUBLIC_URL = "http://127.0.0.1:63423";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StyledRecipePage = styled.div`
    display: flex;
    min-height: 100vh;
    padding: 1em;
    background-color: rgb(205,205,205);
`;

const Ingredients = styled.div`
    flex: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1em 0 5em;
    background-color: rgb(242,242,242);
    h2 {
        padding: 1em;
    }
`;

const Ingredient = styled.div`
    min-height: 75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-top: 1px solid rgba(20,20,20, 0.15);
`;

const Directions = styled.div`
    flex: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(205,205,205);
    h2 {
        padding: 1em;
    }
`;

const Direction = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Img = styled.img`
    width: 100%;
    max-height: 200px;
`;

const RecipePage = props => {
    const [hasError, setErrors] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [specials, setSpecials] = useState({});

    const fetchRecipes = async () => {
        const response = await fetch(PUBLIC_URL + '/recipes/' + props.match.params.uuid);
        response
            .json()
            .then(response => setRecipe(response))
            .catch(error => setErrors(error));
    }

    const fetchSpecials = async () => {
        const response = await fetch(PUBLIC_URL + '/specials');
        response
            .json()
            .then(response => setSpecials(response))
    }

    useEffect(() => {
        fetchRecipes();
        fetchSpecials();
    }, []);

    const { ingredients, directions } = {...recipe};

    if (specials && ingredients) {
        for (let x = 0; x < ingredients.length; x++) {
            for (let y = 0; y < specials.length; y++) {
                if (ingredients[x].uuid === specials[y].ingredientId) {
                    ingredients[x].special = specials[y];
                    console.log(ingredients[x].special);
                }
            }
        }
    }

    return (
        <StyledRecipePage>
            <Ingredients>
                <h2>Ingredients</h2>
                {
                    ingredients &&
                        ingredients.map((ingredient, index) => 
                            <Ingredient key={index}>
                                <p>{ingredient.amount} {ingredient.measurement} {ingredient.name}</p>

                                <div>
                                    <p>{ingredient.special ? ingredient.special.type : ''}</p>
                                    <p>{ingredient.special ? ingredient.special.title : ''}</p>
                                    <div dangerouslySetInnerHTML={ingredient.special ? {__html: ingredient.special.text} : {__html: ''}} />
                                </div>
                            </Ingredient>
                        )
                }
            </Ingredients>
            <Directions>
                <h2>Directions</h2>
                {
                    directions &&
                    directions.map((direction, index) =>
                        <Direction key={index}>
                            <p>{index} {direction.instructions}</p>
                        </Direction>
                    )
                }
            </Directions>
        </StyledRecipePage>
    )
}

export default RecipePage;