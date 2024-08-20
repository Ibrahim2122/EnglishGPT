import React from 'react';
import styles from './Message.module.css';

function Message({ text, sender }) {
    return (
        <div className={`${styles.message} ${styles[sender]}`}>
            <div className={styles.messageText}>{text}</div>
        </div>
    );
}

export default Message;
