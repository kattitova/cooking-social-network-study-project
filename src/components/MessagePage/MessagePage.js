import React from "react";
import styles from "./MessagePage.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const dialogsData = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
  { id: 5, name: "User 5" },
  { id: 6, name: "User 6" },
];

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "I am good" },
];

const dialogsElements = dialogsData.map(user => <Dialog key={`dialog-${user.id}`} name={user.name} id={user.id} />);
const messagesElements = messagesData.map(mes => <Message key={`message-${mes.id}`} message={mes.message} />);

const MessagePage = () => (
  <div className={styles.messagesPage}>
    <div className="pageTitle">
      Message Page
    </div>
    <div className={styles.messagesContent}>
      <div className={styles.dialogsBlock}>
        { dialogsElements }
      </div>
      <div className={styles.messagesBlock}>
        { messagesElements }
      </div>
    </div>
  </div>
);

export default MessagePage;
