import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarL from "../components/Navbars/NavbarL";
import LearningPaths from '../components/LearningPath';
import axios from 'axios';
import Cards from '../components/LearningCard/Cards';
import Sidebar from '../components/Side/Sidebar';
import MessageContainer from '../components/Message/MessageContainer'; 
import { MessageContextProvider } from '../context/messageContext';
import MessageSkeleton from '../components/Skeletons/messageskeleton';
import { SocketContextProvider } from '../context/SocketContext';


const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
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
      return response.data; 
    } catch (error) {
      console.error('Data fetch error:', error);
      throw error; 
    }
  };

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleSearchTagChange = (newSearchTag) => {
    setSearchTag(newSearchTag);
  };

  const handleConversationSelect = async (user) => {
    if (selectedConversation && selectedConversation._id === user._id) {
      setSelectedConversation(null);
      setShowMessage(false);
    } else {
      setSelectedConversation(user);
      setShowMessage(true);
      try {
        const token = localStorage.getItem('jwtToken');
        const userData = await handleData(token);
        setUserDetails(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  const tkn = localStorage.getItem('jwtToken');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      handleData(token)
        .then(userData => setUserDetails(userData))

        .catch(error => console.error('Error fetching user details:', error));
    } else {
      navigate('/login');
    }
  }, [navigate]);
 
  console.log(userDetails);

  return (
    <SocketContextProvider user={userDetails} >
    <MessageContextProvider>
    <div className='bg-[#030712] min-h-screen flex overflow-auto flex-col'>
      <div className='w-full'>
        <NavbarL userDetails={userDetails} toggleSidebar={toggleSidebar} onSearchTermChange={handleSearchTermChange} />
      </div>
      <div className='flex flex-grow'>
        <div className='flex-grow'>
          <div className='mt-12 text-[36px] font-bold text-white text-center'>
            Learning Paths
          </div>
          <div className='mt-6 flex justify-center'>
            <LearningPaths onSearchTagChange={handleSearchTagChange} />
          </div>
          
          <Cards searchTerm={searchTerm} buttonTag={searchTag} />
          
        </div>
        {showSidebar && (
          <div className='w-72 text-white p-4 border-l  border-[#2c2e73] border-solid relative ml-4'>
            <Sidebar tkn={tkn} onConversationSelect={handleConversationSelect}  />
          </div>
        )}
        {showMessage && selectedConversation && (
          <div className='w-72 text-white p-4 border border-[#2c2e73] border-solid position fixed ml-4 right-80 bottom-0 z-20 bg-[#030712]'>
            <MessageContainer user={selectedConversation} curruser={userDetails} tkn={tkn}/> 
          </div>
        )}
      </div>
    </div>
    </MessageContextProvider>
    </SocketContextProvider>
  );
};

export default Dashboard;
