import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import Conversations from './Conversations';


const Sidebar = ({ tkn, onConversationSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/allusers`, {
          headers: {
            Authorization: `Bearer ${tkn}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [tkn]);

  return (
    <div className='border-r bg-[#030712] drop-shadow-[0_0_2.4px_#5C2E00] max-h-screen overflow-y overflow-auto flex flex-col'>
      <div className='text-center mb-5 mt-2 font-bold'> CHAT-BAR</div>

      <div className='flex justify-center ml-2  mr-2 items-center'>
       <SearchInput />
      </div>

      <div className='divider px-3'></div>
      <div className='flex  w-full flex-cols ml-5 overflow-auto'>
      <Conversations users={users} onConversationSelect={onConversationSelect} tkn={tkn} />
      </div>
    </div>
  );
};

export default Sidebar;
