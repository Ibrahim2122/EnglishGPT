import React from 'react'
import PageLayout from '../Components/PageLayout'
import Form from '../Components/Form';
import styles from "./ChatPage.module.css"

function ChatPage() {
  return (
    <PageLayout>
      <div className={styles.wrapper}>
        {/* {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-black self-start"
            } p-2 rounded-lg mb-2 max-w-xs`}
          >
            {message.text}
          </div>
        ))} */}
        Text Area
      </div>
      <Form>
        <div className="flex items-center w-full bg-gray-800 rounded-full px-4 py-2">
          <textarea
            type="text"
            placeholder="Message ChatGPT"
            className="flex-grow bg-transparent border-none text-white placeholder-gray-400 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="ml-2 bg-gray-600 p-2 rounded-full text-white hover:bg-gray-500"
          > 
          </button>
        </div>
      </Form>
    </PageLayout>
  );
}

export default ChatPage