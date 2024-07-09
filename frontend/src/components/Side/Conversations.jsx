import React, { useState, useEffect } from 'react';
import Conversation from './Conversation';
import { useMessageContext } from '../../context/messageContext';
import axios from 'axios';
import { useSocketContext } from '../../context/SocketContext';

const Conversations = ({ users, onConversationSelect, tkn }) => {
  const [isActive, setIsActive] = useState(null);
  const { messages, setMessages, setLoading } = useMessageContext(); 
  const { onlineUsers } = useSocketContext();

  // Sort users by online status
  const sortedUsers = users.sort((userA, userB) => {
    // Online users come first
    if (onlineUsers.includes(userA._id) && !onlineUsers.includes(userB._id)) {
      return -1;
    } else if (!onlineUsers.includes(userA._id) && onlineUsers.includes(userB._id)) {
      return 1;
    }
    // For users with the same online status, maintain existing order
    return 0;
  });

  const getMessages = async () => {
    try {
      setLoading(true); 
      const response = await axios.get(`http://localhost:3001/api/v1/message/${isActive}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tkn}`
        }
      });
      setMessages(response.data);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching messages:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (isActive) {
      getMessages();
    }
  }, [isActive]);

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {sortedUsers.map(user => (
        <Conversation
          key={user._id}
          user={user}
          onClick={() => {
            onConversationSelect(user);
            setMessages([]); 
            setIsActive(isActive === user._id ? null : user._id);
          }}
          isActive={isActive === user._id}
        />
      ))}
    </div>
  );
};

export default Conversations;
