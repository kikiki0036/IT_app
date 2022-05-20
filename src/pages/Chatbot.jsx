import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Widget, addResponseMessage, markAllAsRead } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
const Chatbot = () => {
    const chat = (newMessage) => {
        axios.defaults.withCredentials = false;
        axios.post('http://localhost:8000/chatbot', { msg: newMessage }).then((response) => {
          addResponseMessage(`bot: ${response.data}`);
        });
        markAllAsRead();
        // axios.defaults.withCredentials = true;
      };
    return (
        <div className="layout-component m_r">
            <h2 className="page-header">
                {"work schedule".toUpperCase()}
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g  dataEmp-min-h">
                        <Widget
                            handleNewUserMessage={chat}
                            title="Bot"
                            subtitle="You can ask some basic question and basic problem"
                            senderPlaceHolder="Insert your question"
                        />


                    </div>
                </div>
            </div>
        </div>
    )

}

export default Chatbot