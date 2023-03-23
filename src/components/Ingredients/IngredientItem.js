import React from 'react';
import Control from '../UI/Control';
import Button from '../UI/Button';

import icons from '../../resources/icons.svg';
const iconMinusCircle = `${icons}#icon-minus-circle`;

const IngredientItem = ({
    id,
    index,
    value,
    onSaveIngredient,
    onBlurIngredient,
    onDeleteIngredient,
    isValid,
}) => {
    const ingredientChangeHandler = e => {
        onSaveIngredient([index, e.target.value]);
    };

    const ingredientBlurHandler = () => {
        onBlurIngredient(index);
    };

    const deleteIngredientHandler = () => {
        onDeleteIngredient(id);
    };

    return (
        <Control invalid={isValid === false}>
            <label htmlFor={`ingredient-${index + 1}`}>
                Ingredient {index + 1}
            </label>
            <input
                onChange={ingredientChangeHandler}
                onBlur={ingredientBlurHandler}
                value={value}
                type="text"
                id={`ingredient-${index + 1}`}
                placeholder="Format: 'Quantity,Unit,Description'"
            />
            <Button btnTiny onClick={deleteIngredientHandler}>
                <svg>
                    <use href={iconMinusCircle}></use>
                </svg>
            </Button>
        </Control>
    );
};

export default IngredientItem;
