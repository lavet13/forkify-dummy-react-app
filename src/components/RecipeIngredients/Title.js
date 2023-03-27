import React, { useContext } from 'react';
import Control from '../UI/Control';
import FormIsValidContext from '../../context/form-isvalid-context';
import RecipeFormContext from '../../context/recipe-form-context';

const Title = () => {
    const { formIsValid } = useContext(FormIsValidContext);
    const { titleState, onTitleChange, onTitleBlur } =
        useContext(RecipeFormContext);

    return (
        <Control invalid={titleState.isValid === false && !formIsValid}>
            <label htmlFor='title'>Title</label>
            <input
                onChange={onTitleChange}
                onBlur={onTitleBlur}
                value={titleState.value}
                id='title'
                type='text'
            />
        </Control>
    );
};

export default Title;
