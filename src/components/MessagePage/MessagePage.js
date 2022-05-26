import React from "react";
import PropsType from "prop-types";

import styles from "./MessagePage.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const MessagePage = (props) => {
  const { state } = props;
  const dialogsElements = state.dialogsData.map(user => <Dialog key={`dialog-${user.id}`} name={user.name} id={user.id} avatar={user.avatar} />);

  // вся эта конструкция для добавления класса noTail, если в переписке идет несклько
  // сообщений от одного пользователя, то у первых сообщений нет хвостика,
  // а у последнего есть хвостик
  const messagesElements = state.messagesData.map((mes, i) => {
    const numElement = state.messagesData.length;
    if (i + 1 < numElement) {
      if (mes.sender === state.messagesData[i + 1].sender) {
        return <Message key={`message-${mes.id}`} message={mes.message} sender={mes.sender} tail="noTail" />;
      }
    }
    return <Message key={`message-${mes.id}`} message={mes.message} sender={mes.sender} tail="tail" />;
  });

  // если хвостики пофиг, то можно просто так
  /* const messagesElements = state.messagesData.map(mes => <Message key={`message-${mes.id}`} message={mes.message} sender={mes.sender} />); */

  return (
    <div className={styles.messagesPage}>
      <div className="pageTitle">
        Message Page
      </div>
      <div className={styles.messagesContent}>
        <div className={styles.dialogsBlock}>
          {dialogsElements}
        </div>
        <div className={styles.messagesBlock}>
          {messagesElements}
        </div>
      </div>
    </div>
  );
};

MessagePage.propTypes = {
  state: PropsType.objectOf(PropsType.object).isRequired,
};

export default MessagePage;
