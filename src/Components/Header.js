import React from 'react';
import styles from './Header.module.css';
import Button from './Button';

// Define the Header component
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyLogo</div>
      <div className={styles.searchContainer}>
        <Button>Log out</Button>
      </div>
    </header>
  );
};

export default Header;  