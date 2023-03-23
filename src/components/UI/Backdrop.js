import React from 'react';
import styles from './Backdrop.module.css';

function Backdrop({ onStopEditing }) {
    return <div onClick={onStopEditing} className={styles.overlay}></div>;
}

export default Backdrop;
