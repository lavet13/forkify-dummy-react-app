import React from 'react';
import styles from './IngredientsActions.module.css';
import Button from '../UI/Button';

function IngredientsActions({ onAddingIngredient }) {
    return (
        <div className={styles.actions}>
            <Button btn btnUpload onClick={onAddingIngredient}>
                Add ingredient
            </Button>
        </div>
    );
}

export default IngredientsActions;
