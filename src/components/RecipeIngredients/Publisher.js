import React, { useContext } from 'react';
import Control from '../UI/Control';
import FormIsValidContext from '../../context/form-isvalid-context';
import RecipeFormContext from '../../context/recipe-form-context';

const Publisher = () => {
    const { publisherState, onPublisherChange, onPublisherBlur } =
        useContext(RecipeFormContext);

    const { formIsValid } = useContext(FormIsValidContext);

    return (
        <Control invalid={publisherState.isValid === false && !formIsValid}>
            <label htmlFor='publisher'>Publisher</label>
            <input
                onChange={onPublisherChange}
                onBlur={onPublisherBlur}
                value={publisherState.value}
                id='publisher'
                type='text'
            />
        </Control>
    );
};

export default Publisher;
