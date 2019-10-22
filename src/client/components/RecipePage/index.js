import React from 'react';
import { PUBLIC_URL, RECIPES_URL, SPECIALS_URL } from '@config/index.js';
import useFetch from '@hooks/useFetch';

import './index.css';

const RecipePage = props => {
    const recipe_response = useFetch(RECIPES_URL + props.match.params.uuid);
    const specials_response = useFetch(SPECIALS_URL);

    const recipe = recipe_response.response;
    const specials = specials_response.response;

    const { title, description, ingredients, directions, images } = recipe;

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
        <div id='recipe-page'>
            <div id='header'>
                {
                    images &&
                    <img src={PUBLIC_URL + recipe.images.medium}/>
                }
                <div id='header-info'>

                    <div>
                        <h2>{recipe.title}</h2>
                        <span>{recipe.description}</span>
                    </div>

                    <div className='header-icons'>
                        <div className='icons'>
                            <span>Prep Time</span>
                            <p>{recipe.prepTime}</p>
                        </div>

                        <div className='icons'>
                            <span>Cook Time</span>
                            <p>{recipe.cookTime}</p>
                        </div>

                        <div className='icons'>
                            <span>Servings</span>
                            <p>{recipe.servings}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>            
                <div id='ingredients'>
                    <h2>Ingredients</h2>
                    {
                        ingredients &&
                            ingredients.map((ingredient, index) =>
                                <>
                                    <div className='ingredient' key={index}>
                                        <p>{ingredient.name}</p>
                                        <p>{ingredient.amount} {ingredient.measurement}</p>
                                    </div>
                                    {
                                        ingredient.special &&
                                        <div className='special'>
                                            <p>Special Offer!</p>
                                            <p>{ingredient.special.title}</p>
                                            <p>{ingredient.special.type.toUpperCase()}</p>
                                            <p dangerouslySetInnerHTML={{__html: ingredient.special.text}} />
                                        </div>
                                    }
                                </>
                            )
                    }
                </div>

                <div id='directions'>
                    <h2>Directions</h2>
                    {
                        directions &&
                        directions.map((direction, index) =>
                            <div className='direction' key={index}>
                                <p>
                                    <span>{index}</span>
                                    {direction.instructions}
                                </p>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default RecipePage;