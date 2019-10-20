import * as React from 'react';
import styled from 'styled-components';
const PUBLIC_URL = "http://127.0.0.1:63423";

import { Link } from 'react-router-dom';

const StyledRecipeCard = styled.div`
    display: flex;
    flex-direction: column;

    /* testing delete later */
    border: 1px solid black;
    
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    background-color: white;
    width: 320px;
    height: 450px;
`;

const Img = styled.img`
    width: 100%;
    max-height: 200px;
`;

const CardBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1em;

    p {
        font-size: .75rem;
    }
`;

const CardIcons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    height: 35px;
    width: 50%;
    align-self: center;
    font-size: 1rem;
    border-radius: 20px;
    background-color: rgb(20,20,20);
    color: white;
    a {
        text-decoration: none;
        color: white;
    }
    
`;

const Divider = styled.hr`
    margin-top: .5em;
    margin-bottom: .5em;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

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
        <StyledRecipeCard>
            <Img src={PUBLIC_URL + images.full}/>

            <CardBody>
                <h3>{title}</h3>

                <Divider />

                <CardIcons>
                    <div>
                        <span>Prep Time</span>
                        <p>{prepTime}</p>
                    </div>

                    <div>
                        <span>Cook Time</span>
                        <p>{cookTime}</p>
                    </div>

                    <div>
                        <span>Servings</span>
                        <p>{servings}</p>
                    </div>
                </CardIcons>

                <div>
                    <p>{description}</p>
                </div>

                <Button> <Link to={'/recipes/' + uuid}> View Recipe  </Link></Button>
                
            </CardBody>
        </StyledRecipeCard>
    )
}

export default RecipeCard;