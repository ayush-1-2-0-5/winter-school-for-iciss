import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = ({user,curruser,tkn}) => {
   console.log(user);
   console.log(tkn);
  return (
    <div className='md:min-w-[450px] flex flex-col'>
   <>
       <div  className='border border-[#2c2e73] border-solid px-4 py-2 mb-2'>
        <span className='label-text'>To:</span> <span className='text-white font-bold'>{user.firstName}</span>        
        </div>  
   <Messages user={user} curruser={curruser}/>
   <MessageInput userid={user._id} tkn={tkn} />
   </>
    </div>
  )
}

export default MessageContainer