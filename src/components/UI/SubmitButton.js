import React, { useContext } from 'react';
import Button from './Button';
import FormIsValidContext from '../../context/form-isvalid-context';

const SubmitButton = ({ iconUploadCloud }) => {
    const { formIsValid } = useContext(FormIsValidContext);

    if (formIsValid)
        return (
            <Button btn uploadBtn type='submit'>
                <svg>
                    <use href={iconUploadCloud}></use>
                </svg>
                <span>Upload</span>
            </Button>
        );

    return (
        <Button
            btn
            uploadBtn
            type='submit'
            disabled={!formIsValid}
            btnDisabled={!formIsValid}
        >
            <svg>
                <use href={iconUploadCloud}></use>
            </svg>
            <span>Upload</span>
        </Button>
    );
};

export default SubmitButton;
