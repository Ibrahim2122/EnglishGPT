import React from 'react';
import styles from './Input.module.css';

function Input({
  id,
  type,
  placeholder,
  children,
  userRef,
  onChangeHandler,
  onFocusHandler,
  onBlurHandler,
}) {
  return (
    <>
      <label htmlFor={id} className={styles.labels}>
        {children}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.inputField}
        ref={userRef}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
    </>
  );
}

export default Input