import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../assets/logo.png';

const Header = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.header__logo} src={logo} alt='Logo' />
        {children}
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
