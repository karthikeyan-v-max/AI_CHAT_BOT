import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import Dropzone from 'react-dropzone';

const MessageFormUi = ({
    setAttachment,
    handleChange,
    handleSubmit,
    message,
    handleKeyDown,
    appendText
}) => {
    const [preview , setPreview] = useState('');

  return (
    <div className='message-form-container'>
        {preview && ( 
        <div className='message-form-preview'>
            <img className = "message-form-preview-image"src={preview} onLoad = {()=> URL.revokeObjectURL(preview)} alt="message-form-preview-image" />
            <XMarkIcon 
                className='message-form-icon-x'
                onClick={() =>{
                    setPreview('')
                    setAttachment('')
                }}
            />
        </div>
        )}
        <div className='message-form'>
            <div className='message-form-input-container'>
                <input 
                    type="text"
                    className='message-form-input'
                    value={message}
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    placeholder='send a message...'   
                />
                <input 
                    type="text"
                    className='message-form-assist'
                    disabled = "disbaled"
                    value={`${message} ${appendText}`} 
                />
            </div>
            <div className='message-form-icons'>
                <Dropzone 
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple = {false}
                    noClick = {false}
                    onDrop={(acceptedFiles)=>{
                        setAttachment(acceptedFiles[0]);
                        setPreview(URL.createObjectURL(acceptedFiles[0]))
                    }}
                    >
                    {({ getRootProps, getInputProps, open})=>{
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <PaperClipIcon
                                className='message-form-icon-clip'
                                onClick={open} 
                            />
                        </div>
                    }}
                </Dropzone>
                <hr className='vertical-line'/>
                <PaperAirplaneIcon 
                    className='message-form-icon-airplane'
                    onClick={()=>{
                        handleSubmit();
                        setPreview('')
                       
                    }}
                />
            </div>
        </div>
    </div>
  )
}
  

export default MessageFormUi