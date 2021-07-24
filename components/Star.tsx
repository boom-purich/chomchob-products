import { useState } from 'react';
import { StarStyled } from 'styles/Star';

const Star = ({rating}) => {
    return (
        <>
            {
                Array.from(new Array(5)).map((list,index) => (
                    <StarStyled key={`rating-${index+1}`} full={(index+1) <= rating}/>
                ))
            }
        </>
    );
}

export default Star;
