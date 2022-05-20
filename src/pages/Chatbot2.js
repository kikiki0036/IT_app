import { React, useState, useEffect } from "react";
import axios from "axios";
import { Widget, addResponseMessage, markAllAsRead } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

function Chatbot2() {


  const chat = (newMessage) => {
    axios.defaults.withCredentials = false;
    axios.post(' https://flask-api-deploy1.herokuapp.com/chatbot', { msg: newMessage }).then((response) => {
      addResponseMessage(`bot: ${response.data}`);
    });
    markAllAsRead();
    // axios.defaults.withCredentials = true;
  };


  return (
    <div>
      <Widget
        handleNewUserMessage={chat}
        title="Bot"
        subtitle="You can ask some basic question and basic problem"
        senderPlaceHolder="Insert your question"
      />

    </div>
  );
}
export default Chatbot2;