// -- COmponent / Join
import React ,{useState} from 'react';
import {Link} from "react-router-dom";

const Join =()=>{
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    return (
      
        <div className='text-center w-50 p-4 m-auto bg-dark text-light'>

    <h1>Connectez Vous </h1>

    <form method='post' action=''>
    <div className="form-group m-4">
      <input onChange={(e)=>setName(e.target.value) } type="text" name="name" className="form-control" placeholder="Nom" aria-describedby="helpId"/>
    </div>
    
    <div className="form-group m-4">
      <input onChange={(e)=>setRoom(e.target.value) } type="text" name="romm" className="form-control" placeholder="Room" aria-describedby="helpId"/>
    </div>
    <Link onClick={e=>(!name || !room) && e.preventDefault()  } to={`/chat?name=${name}&room=${room}`} >
    <button onChange={(e)=>setRoom(e.target.value) } type="button" className="btn btn-primary">Rejoindre </button>
    </Link>
    </form>
    </div>

    
    
    
    )
}

export default Join 
 