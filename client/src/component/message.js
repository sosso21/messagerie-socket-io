import React from 'react';
import ReactEmoji from 'react-emoji';
import reactEmoji from 'react-emoji';


const Message = ({message:{ text, user }, name}) => {
    let isSendByCurrentUser = false;
    const toLowerCase = name.trim().toUpperCase()

    if (user == toLowerCase) {
        isSendByCurrentUser = true;
    }

    return (
         isSendByCurrentUser ? (
             
            <div  className="my-2 messageDroite ">
                   <p className='bg-primary text-light rounded-pill px-4 py-2  max-w-75 w-min-c'>
                {reactEmoji.emojify(text)}
                </p>
            </div>
        ):(
            <div className=" my-2 ">
                   <p className=' bg-secondary text-light rounded-pill px-4 py-2 max-w-75 w-min-c'>
                <strong className='font-weight-bold'>{user} : </strong> {reactEmoji.emojify(text)}
                </p>
            </div>
        )
        
    );
};



export default Message