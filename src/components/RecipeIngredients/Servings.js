import React, { useContext } from 'react';
import Control from '../UI/Control';
import RecipeFormContext from '../../context/recipe-form-context';
import FormIsValidContext from '../../context/form-isvalid-context';

const Servings = () => {
    const { servingsState, onServingsChange, onServingsBlur } =
        useContext(RecipeFormContext);

    const { formIsValid } = useContext(FormIsValidContext);

    return (
        <Control invalid={servingsState.isValid === false && !formIsValid}>
            <label htmlFor='servings'>Servings</label>
            <input
                onChange={onServingsChange}
                onBlur={onServingsBlur}
                value={servingsState.value}
                id='servings'
                type='number'
            />
        </Control>
    );
};

export default Servings;
