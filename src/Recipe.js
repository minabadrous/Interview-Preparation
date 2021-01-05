import React from 'react';

const Recipe = ({title, calories, imageSrc}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={imageSrc}/>
        </div>
    );
}

export default Recipe;