import React from 'react';
import Control from '../UI/control/control.component';
import Button from '../UI/button/button.component';

import icons from '../../resources/icons.svg';
const iconMinusCircle = `${icons}#icon-minus-circle`;

const IngredientItem = ({ ingredient, index, onDelete, ...otherProps }) => {
  const { id, value, isValid } = ingredient;
  const handleDelete = () => onDelete(ingredient);

  return (
    // <Control invalid={isValid === false} btnDelete>
    <Control btnDelete>
      <label htmlFor={id}>Ingredient {index + 1}</label>
      <input
        id={id}
        name={id}
        title={id}
        value={value}
        type='text'
        placeholder="Format: 'Quantity,Unit,Description'"
        {...otherProps}
      />
      <Button btnTiny type='button' onClick={handleDelete}>
        <svg>
          <use href={iconMinusCircle}></use>
        </svg>
      </Button>
    </Control>
  );
};

export default IngredientItem;
