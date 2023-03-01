import './AddRecipeWindow.scss';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';

function AddRecipeWindow({ className = 'hidden', isEditing, onCancel }) {
    const classes = 'add-recipe-window ' + (!isEditing && (className || ''));

    return (
        <div className={classes}>
            <button onClick={onCancel} className="btn--close-modal">
                &times;
            </button>
            <AddRecipeForm />
        </div>
    );
}

export default AddRecipeWindow;
