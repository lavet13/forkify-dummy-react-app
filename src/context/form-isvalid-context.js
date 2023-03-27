import React, { useState } from 'react';

const FormIsValidContext = React.createContext({
    formIsValid: null,
    setFormIsValid: () => {},
});

export const FormIsValidContextProvider = ({ children }) => {
    const [formIsValid, setFormIsValid] = useState(false);

    return (
        <FormIsValidContext.Provider value={{ formIsValid, setFormIsValid }}>
            {children}
        </FormIsValidContext.Provider>
    );
};

export default FormIsValidContext;
