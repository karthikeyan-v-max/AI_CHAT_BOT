import React, { useState } from 'react'
import MessageFormUi from './MessageFormUi';

const StandardMessageForm = ({ props , activeChat }) => {
    const [message, setMessage] = useState('')
    const [attachment , setAttachment] = useState('');
    const handleChange =(e) =>{
        setMessage(e.target.value);
    }
    const handleSubmit= ()=>{
        const date = new Date().toISOString().replace("T"," ").replace("Z",`${Math.floor(Math.random() * 1000)}+00:00`)
        const at = attachment ? [{ blob: attachment, file: attachment.name}]:[];
        const form = {
            attachments : at,
            created : date,
            sender_username : props.username,
            text : message,
            activeChatId : activeChat.id, 
        }
        props.onSubmit(form);
        setMessage('')
        setAttachment('');
    };
  return (
    
        <MessageFormUi
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            message={message}
            setAttachment={setAttachment}
        />
    );
}

export default StandardMessageForm