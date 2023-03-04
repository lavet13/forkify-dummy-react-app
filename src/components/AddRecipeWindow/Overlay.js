import React from 'react';
import styles from './Overlay.module.css';

function Overlay({ onCancel, isEditing }) {
    return (
        <div
            onClick={onCancel}
            className={`${styles.overlay} ${
                isEditing ? '' : styles.hidden
            }`.trim()}
        ></div>
    );
}

export default Overlay;
