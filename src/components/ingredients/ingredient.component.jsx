import React from 'react';
import Control from '../UI/control/control.component';
import Button from '../UI/button/button.component';

import icons from '../../resources/icons.svg';
const iconMinusCircle = `${icons}#icon-minus-circle`;

const IngredientItem = ({ id, index, isValid, ...otherProps }) => {
  return (
    // <Control invalid={isValid === false} btnDelete>
    <Control btnDelete>
      <label htmlFor={id}>Ingredient {index + 1}</label>
      <input id={id} {...otherProps} />
      <Button btnTiny type='button'>
        <svg>
          <use href={iconMinusCircle}></use>
        </svg>
      </Button>
    </Control>
  );
};

export default IngredientItem;
