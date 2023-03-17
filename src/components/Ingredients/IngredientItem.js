import React from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div`
    display: grid;
    grid-column: 1 / span 2;
    grid-template-columns: 1fr 2.8fr;
    align-items: center;
    gap: 1.5rem;

    ${({ invalid }) =>
        invalid &&
        css`
            & label {
                color: red;
            }

            & input {
                border-color: red;
                background: #f89aab;
            }
        `}
`;

function IngredientItem({ id, value, onSaveIngredient, isValid }) {
    const ingredientChangeHandler = e => {
        onSaveIngredient([id, e.target.value]);
    };

    return (
        <Div invalid={!isValid}>
            <label>Ingredient {id + 1}</label>
            <input
                onChange={ingredientChangeHandler}
                value={value}
                type="text"
                name={`ingredient-${id + 1}`}
                placeholder="Format: 'Quantity,Unit,Description'"
            />
        </Div>
    );
}

export default IngredientItem;
