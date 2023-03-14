import React from 'react';
import ReactDOM from 'react-dom';
import styles from './AddRecipeWindow.module.css';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import Backdrop from './Backdrop';
import Button from '../UI/Button';
import Card from '../UI/Card';

function AddRecipeWindow({ onCancel }) {
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
                    <AddRecipeForm />
                </Card>,
                document.querySelector('#overlay-root')
            )}
        </>
    );
}

export default AddRecipeWindow;
