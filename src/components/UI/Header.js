import React from 'react';
import styles from './Header.module.css';
import logo from '../../resources/logo.png';

const Header = ({ children }) => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt='Logo' />
            {children}
        </header>
    );
};

export default Header;
