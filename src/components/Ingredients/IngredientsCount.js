import React from 'react';
import styles from './IngredientsCount.module.css';
import Button from '../UI/Button';

function IngredientsCount({ onAddingIngredient }) {
    return (
        <div className={styles.actions}>
            <Button btn btnUpload onClick={onAddingIngredient}>
                Add ingredient
            </Button>
        </div>
    );
}

export default IngredientsCount;
