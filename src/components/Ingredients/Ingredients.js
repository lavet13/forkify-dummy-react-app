import React, { useState } from 'react';
import IngredientItem from './IngredientItem';

function Ingredients({ items, onSaveIngredient }) {
    console.log(items);

    return (
        <div className="upload__column">
            <h3 className="upload__heading">Ingredients</h3>
            {items.map(([_, value], i) => (
                <IngredientItem
                    key={i}
                    id={i}
                    value={value}
                    onSaveIngredient={onSaveIngredient}
                />
            ))}
        </div>
    );
}

export default Ingredients;
