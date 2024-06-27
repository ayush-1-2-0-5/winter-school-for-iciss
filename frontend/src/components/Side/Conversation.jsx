import React from 'react';

const Conversation = ({ user,key}) => {
  return (
    <>
        <div className="border-b border-gray-200 overflow-hidden">
      <div className="flex items-center rounded">
        <div className="rounded-full bg-[#ec407a] w-6 h-6 mt-2 ml-0 mr-1 text-white flex items-center justify-center">
          {user.firstName?.[0]}
        </div>
        <div className="flex ml-4 flex-col flex-1">
          <div className="flex">
            <span className="text-sm mt-2 mr-2 text-gray-100 ml-2">{user.username}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 ml-5  text-base">{user.firstName}</div>
      <div className="divider my-1 py-0 h-1" />
    </div>
    </>
  );
};

export default Conversation;

// const Conversation = ({ user }) => {
//   return (
//     <div className='conversation'>
//       <p>Username: {user.username}</p>
//       <p>First Name: {user.firstName}</p>
//       <p>Last Name: {user.lastName}</p>
//     </div>
//   );
// };

// export default Conversation;