import React, { useContext } from 'react';
import Control from '../UI/Control';
import FormIsValidContext from '../../context/form-isvalid-context';
import RecipeFormContext from '../../context/recipe-form-context';

const CookingTime = () => {
    const { cookingTimeState, onCookingTimeChange, onCookingTimeBlur } =
        useContext(RecipeFormContext);

    const { formIsValid } = useContext(FormIsValidContext);

    return (
        <Control invalid={cookingTimeState.isValid === false && !formIsValid}>
            <label htmlFor='cookingTime'>Prep time</label>
            <input
                onChange={onCookingTimeChange}
                onBlur={onCookingTimeBlur}
                value={cookingTimeState.value}
                id='cookingTime'
                type='number'
            />
        </Control>
    );
};

export default CookingTime;
