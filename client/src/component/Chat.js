// -- COmponent / chat;
import React ,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './infoBar';
import Input from './input';
import Messages from './messages';
import ListUsers from './listUsers';
let socket ;

const Chat =({location})=>{

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users,setUsers] = useState("");
    
    const localhost = 'localhost:5000';

useEffect(() => {
    const{ name,room} = queryString.parse(location.search);
    socket = io(localhost)
    
    setName(name);
    setRoom(room); 

    socket.emit('join',{name,room},()=>{} )

    return(()=>{
        socket.emit('disconnect')
        socket.off()
    })
},[location.search ,localhost] )
    
useEffect(() => {
    socket.on('message',(message)=>{
        setMessages(messages => [ ...messages, message ]);
    })
    socket.on('roomData',(usersList)=>{
        setUsers(usersList)
        console.log('usersList:', users)
    })
}, [])

const sendMessage =(event)=>{
    event.preventDefault()


    if (message) {
        socket.emit('sendmessage',message,()=>setMessage(''))
    }
}



    return (
        <div className='container  '>
    <h1>Chat</h1>
    <div className="w-60  float-left">
    <InfoBar room={room}/>
    <Messages className="border" messages={messages} name={name} />
    <Input message={message}  sendMessage={sendMessage} setMessage={setMessage}/>
    </div>

    <div className="float-right mt-4  text-break w-25 ">
    <ListUsers users={users} />
    </div>

        </div>


    )
}

export default Chat 