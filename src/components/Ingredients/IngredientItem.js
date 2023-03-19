import React from 'react';
import Control from '../UI/Control';

function IngredientItem({ id, value, onSaveIngredient, isValid }) {
    const ingredientChangeHandler = e => {
        onSaveIngredient([id, e.target.value]);
    };

    return (
        <Control invalid={!isValid}>
            <label>Ingredient {id + 1}</label>
            <input
                onChange={ingredientChangeHandler}
                value={value}
                type="text"
                name={`ingredient-${id + 1}`}
                placeholder="Format: 'Quantity,Unit,Description'"
            />
        </Control>
    );
}

export default IngredientItem;
