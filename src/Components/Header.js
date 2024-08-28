import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    // Log out function
    const submitHandler = e => {
        e.preventDefault();
        console.log("You are out!")
        navigate("/")
    }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>EnglishGPT</div>
      <form className={styles.searchContainer} onSubmit={submitHandler}>
        <Button>Log out</Button>
      </form>
    </header>
  );
};

export default Header;  