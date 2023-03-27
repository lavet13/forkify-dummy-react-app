import React, { useContext } from 'react';
import styles from './IngredientsActions.module.css';
import Button from '../UI/Button';
import IngredientsContext from '../../context/ingredients-context';

function IngredientsActions() {
    const { onAddIngredient } = useContext(IngredientsContext);

    return (
        <div className={styles.actions}>
            <Button btn btnUpload onClick={onAddIngredient}>
                Add ingredient
            </Button>
        </div>
    );
}

export default IngredientsActions;
