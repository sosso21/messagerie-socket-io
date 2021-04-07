import React from 'react';

const ListUsers = (users) => {
    const allUser = users.users.users

    console.log('allUser:', allUser)
    
    
    return(
        <div>
        <h3>Users </h3>
        { allUser ? 
        <ul className="list-group">
         { allUser.map(user=> <li className='list-group-item'>{user.name}</li>) }
        </ul>
           :null}

      
       </div>
 )
};



export default ListUsers