import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToArc, faShare } from '@fortawesome/free-solid-svg-icons';
import styles from './ChatInput.module.css';

function ChatInput({ onSend }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(message);
        setMessage('');
    };

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className={styles.textarea}
            />
            <button type="submit" className={styles.button}>
                <FontAwesomeIcon icon={faShare} />
            </button>
        </form>
    );
}

export default ChatInput;
