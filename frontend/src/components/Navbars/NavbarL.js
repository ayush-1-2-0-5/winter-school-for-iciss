import React,{useState,useEffect} from 'react';
import LogoutP from './logoutpannel';

const NavbarL = ({ userDetails, toggleSidebar, onSearchTermChange }) => {
  const [searchTermTitle, setSearchTermTitle] = useState("");

  const handleSearchTitle = (e) => {
    setSearchTermTitle(e.target.value);
    onSearchTermChange(searchTermTitle); 
  };
  
  return (
    <nav className="bg-black flex items-center justify-between px-4 py h-16 sticky "> 
      <div className="text-2xl font-bold text-white">E-LEARNING SCHOOL</div>
      <div className="flex items-center space-x-4 mr-6">
      <input
          type="text"
          placeholder="Search by Title"
          value={searchTermTitle}
          onChange={handleSearchTitle}
          className="px-4 py-2 mr-8 rounded-md placeholder-gray-100 bg-[#030712] border border-[#2c2e73] text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button onClick={toggleSidebar} className="bg-[#030712] border border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md">Chat</button>
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarL;
