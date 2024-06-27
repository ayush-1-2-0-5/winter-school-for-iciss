import React,{useState,useEffect} from 'react';
import LogoutP from './logoutpannel';

const NavbarA = ({userDetails}) => {
    return (
    <nav className="bg-black border-b border-white flex items-center justify-between px-4 py-2 h-16 sticky top-0 z-50"> 
      <div className="text-2xl font-bold text-white">WINTER-SCHOOL</div>
      <div className="flex items-center space-x-4 mr-6">
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarA;
