import React from 'react';
import { Link } from "react-router-dom"; // or use "a" tag for basic HTML link
import styles from './NotFound.module.css';
import Button from '../Components/Button';

function NotFound() {
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Page not found</h2>
        </header>
        <p className={styles.description}>
          The page you are looking for does not exist or has been moved.
        </p>
        <nav>
          <Button>
            <Link
              to="/"
            >
              Go to Homepage
            </Link>
          </Button>
        </nav>
      </section>
    </main>
  );
}

export default NotFound