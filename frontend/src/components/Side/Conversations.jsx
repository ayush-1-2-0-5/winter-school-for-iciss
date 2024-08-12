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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/message/${isActive}`, {
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
    <div className="flex flex-col  justify-center p-2 items-center w-9/12 mb-2 min-h-[300px] max-h-[600px]  overflow-auto ">
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
