import React, { useState } from "react";
import Message from "../Components/Message";
import ChatInput from "../Components/ChatInput";
import styles from "./Chatbot.module.css";
import Header from "../Components/Header";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    if (message.trim() !== "") {
      const userMessage = { text: message, sender: "user" };
      setMessages([...messages, userMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botMessage = { text: `Echo: ${message}`, sender: "bot" };
        setMessages([...messages, userMessage, botMessage]);
      }, 1000);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.pageLayout}>
        <div className={styles.container}>
          <div className={styles.chatWrapper}>
            <div className={styles.messages}>
              {messages.map((msg, index) => (
                <Message key={index} text={msg.text} sender={msg.sender} />
              ))}
            </div>
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
