import React from 'react';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ user, onClick, isActive }) => {
  const {onlineUsers}=useSocketContext();

  const isonline=onlineUsers.includes(user._id)
  console.log(isonline);
  return (
    <div className='border-b border-gray-200 cursor-pointer  overflow-auto-y'>
      <div
        className={` rounded-lg ${
          user._id === isActive ? 'bg-[#9898d3]' : 'bg-[#1e293b]'
        } hover:bg-[#9898d3]`}
        onClick={onClick}
      >
        <div className="flex m-1 items-center rounded">
       
          <div className={`rounded-full avatar ${isonline?"online":""} bg-[#ec407a] w-6 h-6 mt-2 ml-0 mr-1 text-white flex items-center justify-center`}>
           {user.firstName?.[0]}
          </div>
          <div className="flex ml-4 flex-col flex-1">
            <div className="flex">
              <span className="text-sm mt-2 mr-2 text-gray-500 ml-2">{user.username}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 ml-5 mb-2 text-base text-white">{user.firstName}</div>
      </div>
      <div className="divider my-1 py-0 h-1" />
    </div>
  );
};

export default Conversation;
