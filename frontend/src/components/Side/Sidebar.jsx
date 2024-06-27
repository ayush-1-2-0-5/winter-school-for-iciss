import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import MessageContainer from '../messagecointainer/MessageContainer';

const Sidebar = ({tkn}) => {
  const [users, setUsers] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  console.log(`Bearer ${tkn}`);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/allusers', {
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
  }, []);

  return (
    <div className='border-r border-slate-500 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations users={users} setSelectedConversation={setSelectedConversation} />
    </div>
  );
};

export default Sidebar;



