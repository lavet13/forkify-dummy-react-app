import React, { useReducer } from 'react';

const IngredientsContext = React.createContext({
    ingredientsState: null,

    onDeleteIngredient: () => {},
    onSaveIngredient: () => {},
    onBlurIngredient: () => {},
    onAddIngredient: () => {},

    clearIngredients: () => {},
});

export const IngredientsContextProvider = ({ children }) => {
    // ingredients: key, value, isValid
    const initialIngredientsCount = 6;
    const initialIngredientsState = {
        value: Array.from({ length: initialIngredientsCount }, (_, i) => [
            `ingredient-${i + 1}`,
            '',
            null,
        ]),
    };
    const isValidIngredient = ingredients => {
        const ingArray = ingredients.split(',');

        return (
            ingArray.length > 2 &&
            ingArray.every(ing => ing.trim().length !== 0)
        );
    };

    const ingredientsReducer = (state, action) => {
        switch (action.type) {
            case 'USER_INPUT': {
                const [savedIndex, savedValue] = action.payload;

                const [ingredientId] = state.value[savedIndex];
                state.value.splice(savedIndex, 1, [
                    ingredientId,
                    savedValue,
                    isValidIngredient(savedValue),
                ]);

                return { value: [...state.value] };
            }

            case 'INPUT_BLUR': {
                const savedIndex = action.payload;

                const [ingredientId, ingValue] = state.value[savedIndex];
                state.value.splice(savedIndex, 1, [
                    ingredientId,
                    ingValue,
                    isValidIngredient(ingValue),
                ]);

                return { value: [...state.value] };
            }

            case 'CLEAR_INPUT': {
                return initialIngredientsState;
            }

            case 'ADD_INGREDIENT': {
                return {
                    value: [
                        ...state.value,
                        [`ingredient-${state.value.length + 1}`, '', null],
                    ],
                };
            }

            case 'REMOVE_INGREDIENT': {
                const deleteId = action.payload;

                return {
                    value: state.value.filter((_, index) => index !== deleteId),
                };
            }

            default:
                return state;
        }
    };

    const addIngredientHandler = () => {
        dispatchIngredients({ type: 'ADD_INGREDIENT' });
    };

    const deleteIngredientHandler = deleteId => {
        dispatchIngredients({ type: 'REMOVE_INGREDIENT', payload: deleteId });
    };

    const [ingredientsState, dispatchIngredients] = useReducer(
        ingredientsReducer,
        initialIngredientsState
    );

    const saveIngredientHandler = savedIngredient => {
        dispatchIngredients({ type: 'USER_INPUT', payload: savedIngredient });
    };

    const blurIngredientHandler = savedId => {
        dispatchIngredients({ type: 'INPUT_BLUR', payload: savedId });
    };

    const clearIngredients = () => {
        dispatchIngredients({ type: 'CLEAR_INPUT' });
    };

    return (
        <IngredientsContext.Provider
            value={{
                ingredientsState,

                onDeleteIngredient: deleteIngredientHandler,
                onBlurIngredient: blurIngredientHandler,
                onSaveIngredient: saveIngredientHandler,
                onAddIngredient: addIngredientHandler,

                clearIngredients,
            }}
        >
            {children}
        </IngredientsContext.Provider>
    );
};

export default IngredientsContext;
