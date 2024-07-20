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
    <div className='border-r border-slate-500 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations users={users} onConversationSelect={onConversationSelect} tkn={tkn} />
    </div>
  );
};

export default Sidebar;
