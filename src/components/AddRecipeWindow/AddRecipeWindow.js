import React from 'react';
import ReactDOM from 'react-dom';
import styles from './AddRecipeWindow.module.css';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import Backdrop from '../UI/Backdrop';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { IngredientsContextProvider } from '../../context/ingredients-context';
import { RecipeFormContextProvider } from '../../context/recipe-form-context';
import { FormIsValidContextProvider } from '../../context/form-isvalid-context';

const AddRecipeWindow = ({ onCancel }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onStopEditing={onCancel} />,
                document.querySelector('#backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Card className={styles['add-recipe-window']}>
                    <Button btnCloseModal onClick={onCancel}>
                        &times;
                    </Button>
                    <IngredientsContextProvider>
                        <RecipeFormContextProvider>
                            <FormIsValidContextProvider>
                                <AddRecipeForm />
                            </FormIsValidContextProvider>
                        </RecipeFormContextProvider>
                    </IngredientsContextProvider>
                </Card>,
                document.querySelector('#overlay-root')
            )}
        </>
    );
};

export default AddRecipeWindow;
