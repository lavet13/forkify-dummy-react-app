import React, { useContext } from 'react';
import Control from '../UI/Control';
import FormIsValidContext from '../../context/form-isvalid-context';
import RecipeFormContext from '../../context/recipe-form-context';

const SourceUrl = () => {
    const { sourceUrlState, onSourceUrlChange, onSourceUrlBlur } =
        useContext(RecipeFormContext);

    const { formIsValid } = useContext(FormIsValidContext);

    return (
        <Control invalid={sourceUrlState.isValid === false && !formIsValid}>
            <label htmlFor='sourceUrl'>URL</label>
            <input
                onChange={onSourceUrlChange}
                onBlur={onSourceUrlBlur}
                value={sourceUrlState.value}
                id='sourceUrl'
                type='text'
            />
        </Control>
    );
};

export default SourceUrl;
