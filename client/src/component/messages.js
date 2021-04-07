import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message'

const Messages = ({messages,name}) => {
    return (
        <ScrollToBottom className="text-wrap text-break w-100" >
        {messages.map((message,i)=> <div key={i}><Message message={message} name={name}/></div>) }
        </ScrollToBottom>
        
    );
};



export default Messages