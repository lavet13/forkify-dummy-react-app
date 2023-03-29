import React from 'react';
import Control from '../UI/Control';
import Button from '../UI/Button';

import icons from '../../resources/icons.svg';
const iconMinusCircle = `${icons}#icon-minus-circle`;

const IngredientItem = ({
    id,
    value,
    isValid,
    onSaveIngredient,
    onBlurIngredient,
    onDeleteIngredient,
}) => {
    const ingredientChangeHandler = e => {
        onSaveIngredient([id, e.target.value]);
    };

    const ingredientBlurHandler = () => {
        onBlurIngredient(id);
    };

    const deleteIngredientHandler = () => {
        onDeleteIngredient(id);
    };

    return (
        <Control invalid={isValid === false} btnDelete>
            <label htmlFor={`ingredient-${id + 1}`}>Ingredient {id + 1}</label>
            <input
                onChange={ingredientChangeHandler}
                onBlur={ingredientBlurHandler}
                value={value}
                type="text"
                title={`ingredient ${id + 1}`}
                id={`ingredient-${id + 1}`}
                placeholder="Format: 'Quantity,Unit,Description'"
            />
            <Button btnTiny type="button" onClick={deleteIngredientHandler}>
                <svg>
                    <use href={iconMinusCircle}></use>
                </svg>
            </Button>
        </Control>
    );
};

export default IngredientItem;
