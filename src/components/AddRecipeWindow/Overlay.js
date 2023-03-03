import './Overlay.scss';

function Overlay({ onCancel, isEditing }) {
    return (
        <div
            onClick={onCancel}
            className={`overlay ${isEditing ? '' : 'hidden'}`.trim()}
        ></div>
    );
}

export default Overlay;
