import React from 'react';



const InfoBar = ({room}) => {
    
    return (
        <div className='bg-primary text-light w-100 p-3'>
        <span className='float-left'><svg width="1em" height="1em" viewBox="0 0 16 16" className="text-success bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="8"/>
</svg>
</span>  <span> <strong>{room}</strong></span> <a className='float-right' href='/'><svg width="1em" height="1em" viewBox="0 0 16 16" className=" text-danger bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg> </a>
        </div>
    );
};


export default InfoBar