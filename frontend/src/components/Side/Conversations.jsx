import React from 'react';
import Conversation from './Conversation';

const Conversations = ({ users }) => {
  console.log(users);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {users.map(user => (
        <Conversation
          key={user._id}
          user={user}
        />
      ))}
    </div>
  );
};

export default Conversations;
