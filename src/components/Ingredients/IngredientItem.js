import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: grid;
    grid-column: 1 / span 2;
    grid-template-columns: 1fr 2.8fr;
    align-items: center;
    gap: 1.5rem;
`;

function IngredientItem({ id, value, onSaveIngredient }) {
    const ingredientChangeHandler = e => {
        onSaveIngredient([id, e.target.value]);
    };

    return (
        <Div>
            <label>Ingredient {id + 1}</label>
            <input
                onChange={ingredientChangeHandler}
                value={value}
                type="text"
                name={`ingredient-${id}`}
                placeholder="Format: 'Quantity,Unit,Description'"
            />
        </Div>
    );
}

export default IngredientItem;
