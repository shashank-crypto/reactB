import React from 'react'

const Recipe = ({title, calories , image , ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
            <ol>
                <li>{ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}</li>
            </ol>
        </div>
    )
}

export default Recipe;