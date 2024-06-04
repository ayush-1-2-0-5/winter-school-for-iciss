import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarL = ({userDetails}) => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  
const handleLogout = () => {
  localStorage.removeItem('jwtToken');
  navigate('/login');
};

  return (
    <nav className="bg-black border  sticky border-white  flex items-center justify-between px-4 py-2 h-16 top-0">
      
      <div className="text-[22px] font-family:Times  font-bold text-white">WINTER-SCHOOL</div>


      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div
          onClick={()=>setIsOpen(!isOpen)}
          className='rounded-full bg-white w-8 h-8 cursor-pointer flex items-center justify-center'
        >
          {userDetails?.firstName?.[0]}
        </div>
        {
          isOpen? <div className='absolute top-full right-5 p-4 bg-slate-500 flex flex-col gap-4 z-50'>
            <div >
            <div className='font-semibold text-sm'>
              {userDetails?.firstName + ' ' + userDetails?.lastName}
            </div>
            <div className='text-xs'>
              {userDetails?.username}
            </div>
            </div>
            <div className="w-full h-px bg-slate-800"></div>
            <button
          onClick={handleLogout}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Logout
        </button>
        
          </div>: null
        }
        
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-white"></div>
    </nav>
  );
};

export default NavbarL;
