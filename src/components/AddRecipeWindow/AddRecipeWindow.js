import React from 'react';
import styles from './AddRecipeWindow.module.css';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import Button from '../UI/Button';

function AddRecipeWindow({ isEditing, onCancel }) {
    return (
        <div
            className={`${styles['add-recipe-window']} ${
                isEditing ? '' : styles.hidden
            }`.trim()}
        >
            <Button btnCloseModal onClick={onCancel}>
                &times;
            </Button>
            <AddRecipeForm />
        </div>
    );
}

export default AddRecipeWindow;
