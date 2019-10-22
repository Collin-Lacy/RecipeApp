import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '@config/index.js';

import './index.css';

const RecipeCard = props => {
    const {
        uuid, 
        title, 
        description,
        images,
        servings,
        prepTime,
        cookTime,
    } = props;
    
    return (
        <div className='recipe-card'>
            <img src={PUBLIC_URL + images.full} />

            <div className='card-body'>
                <h3>{title}</h3>

                <hr className='divider' />

                <div className='card-info'>
                    <div className='info'>
                        <span>Prep Time</span>
                        <p>{prepTime}</p>
                    </div>

                    <div className='info'>
                        <span>Cook Time</span>
                        <p>{cookTime}</p>
                    </div>

                    <div className='info'>
                        <span>Servings</span>
                        <p>{servings}</p>
                    </div>
                </div>

                <p>{description}</p>

                <button className='card-button'><Link to={'/recipes/' + uuid}> View Recipe </Link></button>
            </div>
        </div>
    )
}

export default RecipeCard;