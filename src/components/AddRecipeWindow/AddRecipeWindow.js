import './AddRecipeWindow.scss';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import Button from '../UI/Button';

function AddRecipeWindow({ isEditing, onCancel }) {
    return (
        <div
            className={`add-recipe-window ${isEditing ? '' : 'hidden'}`.trim()}
        >
            <Button btnCloseModal onClick={onCancel}>
                &times;
            </Button>
            <AddRecipeForm />
        </div>
    );
}

export default AddRecipeWindow;
