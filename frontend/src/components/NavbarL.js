import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutP from './logoutpannel';

const NavbarL = ({userDetails}) => {
  return (
    <nav className="bg-black border  sticky border-white  flex items-center justify-between px-4 py-2 h-16 top-0"> 
      <div className="text-[22px] font-family:Times  font-bold text-white">WINTER-SCHOOL</div>
      <div className="flex items-center space-x-4 mr-6">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 mr-8 rounded-md bg-[#030712] border border-gray-300 border-solid  text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <LogoutP userDetails={userDetails}/>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
    </nav>
  );
};

export default NavbarL;
