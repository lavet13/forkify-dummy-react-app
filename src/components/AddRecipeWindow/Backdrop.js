import React from 'react';
import styles from './Backdrop.module.css';

function Backdrop({ onStopEditing, isEditing }) {
    return (
        <div
            onClick={onStopEditing}
            className={`${styles.overlay} ${
                isEditing ? '' : styles.hidden
            }`.trim()}
        ></div>
    );
}

export default Backdrop;
