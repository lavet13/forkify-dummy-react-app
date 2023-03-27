import React, { useContext } from 'react';
import Control from '../UI/Control';
import FormIsValidContext from '../../context/form-isvalid-context';
import RecipeFormContext from '../../context/recipe-form-context';

const Image = () => {
    const { imageState, onImageChange, onImageBlur } =
        useContext(RecipeFormContext);

    const { formIsValid } = useContext(FormIsValidContext);

    return (
        <Control invalid={imageState.isValid === false && !formIsValid}>
            <label htmlFor='image'>Image URL</label>
            <input
                onChange={onImageChange}
                onBlur={onImageBlur}
                value={imageState.value}
                id='image'
                type='text'
            />
        </Control>
    );
};

export default Image;
