import React from 'react'; 


const Input = ({message,sendMessage,setMessage}) => {

    return(
        <form action="" method='post' onSubmit={e=> sendMessage(e)}>

        <input value={message} onKeyPress={(event)=>(event.key==="Enter") &&sendMessage(event)} onChange={(e)=>setMessage(e.target.value)} type="text" name="msg" className="form-control w-90 mt-4" placeholder="type your message" aria-describedby="helpId"/> 
        

         <button className='btn btn-outline-primary'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>

        </form>
    )
};

export default Input