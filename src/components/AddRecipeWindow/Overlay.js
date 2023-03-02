import './Overlay.scss';

function Overlay({ className = 'hidden', onCancel, isEditing }) {
    const classes = 'overlay ' + (!isEditing && (className || ''));
    return <div onClick={onCancel} className={classes}></div>;
}

export default Overlay;
