import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarL from "../components/Navbars/NavbarL";
import LearningPaths from '../components/LearningPath';
import axios from 'axios';
import Cards from '../components/LearningCard/Cards';
import Sidebar from '../components/Side/Sidebar';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false); 
  const [userDetails, setUserDetails] = useState({}); 
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const navigate = useNavigate(); 
  
  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };
  
  const handleData = async (token) => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/user/session', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(token);
      setUserDetails(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Data fetch error:', error);
    }
  };

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    console.log(newSearchTerm);
  };

  const handleSearchTagChange = (newSearchTag) => {
    setSearchTag(newSearchTag);
  };

  const tkn=localStorage.getItem('jwtToken');
  console.log(tkn);
  
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      handleData(token);
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  return (
    <div className='bg-[#030712] min-h-screen flex overflow-auto flex-col'>
      <div className='w-full'>
      <NavbarL userDetails={userDetails} toggleSidebar={toggleSidebar} onSearchTermChange={handleSearchTermChange} />
      </div>
     
      
      <div className='flex flex-grow'>
        <div className='flex-grow'>
          <div className='mt-12 text-[36px] font-bold text-white text-center'>
            Learning Paths
          </div>
          <div className='mt-6 flex justify-center'><LearningPaths onSearchTagChange={handleSearchTagChange}/></div>
          <Cards searchTerm={searchTerm} buttonTag={searchTag}/> 
        </div>

      
      
        {showSidebar && (
          <div className='w-72 text-white p-4 border-l border-gray-300 border-solid relative ml-4 '>
            <Sidebar tkn={tkn}/>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Dashboard;
