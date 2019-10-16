import * as React from 'react';
import styled from 'styled-components';

const PUBLIC_URL = "http://127.0.0.1:53241";

const StyledRecipe = styled.div`
    display: flex;
    justify-content: center;
    
    /* testing delete later */
    background-color: grey;

    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;

    width: 200px;
    height: 133px;
`;

const Img = styled.img`
    border-radius: 25px;
    background-size: cover;
`;

const Recipe = props => {
    const {
        uuid, 
        title, 
        description,
        images,
        servings,
        prepTime,
        cookTime,
        postDate,
        editDate,
        ingredients,
        directions
    } = props;

    return (
        <StyledRecipe>
            <div>
                <img src={PUBLIC_URL + images.small}/>
                <div>
                    <h3>{title}</h3>
                    <div>{description}</div>
                </div>
            </div>
        </StyledRecipe>
    )
}

export default Recipe;