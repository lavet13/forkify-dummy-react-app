import React from 'react';
import styles from './AddRecipeWindow.module.css';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import Button from '../UI/Button';
import Card from '../UI/Card';

function AddRecipeWindow({ isEditing, onCancel }) {
    return (
        <Card
            className={`${styles['add-recipe-window']} ${
                isEditing ? '' : styles.hidden
            }`.trim()}
        >
            <Button btnCloseModal onClick={onCancel}>
                &times;
            </Button>
            <AddRecipeForm />
        </Card>
    );
}

export default AddRecipeWindow;
