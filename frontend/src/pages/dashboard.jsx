import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarL from "../components/Navbars/NavbarL";
import LearningPaths from '../components/LearningPath';
import axios from 'axios';
import Cards from '../components/LearningCard/Cards';
import Sidebar from '../components/Side/Sidebar';
import MessageContainer from '../components/Message/MessageContainer'; 
import { MessageContextProvider } from '../context/messageContext';
import { SocketContextProvider } from '../context/SocketContext';
import Footer from '../components/Footer';  // Import the Footer component

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingUserDetails, setLoadingUserDetails] = useState(false);
  const [loadingConversation, setLoadingConversation] = useState(false);

  const navigate = useNavigate();
  const toggleSidebar = () => setShowSidebar(prevState => !prevState);

  const handleData = async (token) => {
    setLoadingUserDetails(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/session`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data; 
    } catch (error) {
      console.error('Data fetch error:', error);
      throw error; 
    }
    finally {
      setLoadingUserDetails(false);
    }
  };

  const handleSearchTermChange = (newSearchTerm) => setSearchTerm(newSearchTerm);

  const handleConversationSelect = async (user) => {
    if (selectedConversation && selectedConversation._id === user._id) {
      setSelectedConversation(null);
      setShowMessage(false);
    } else {
      setLoadingConversation(true);
      setSelectedConversation(user);
      setShowMessage(true);
      try {
        const token = localStorage.getItem('jwtToken');
        const userData = await handleData(token);
        setUserDetails(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
      finally {
        setLoadingConversation(false);
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

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  return (
    <SocketContextProvider user={userDetails}>
      <MessageContextProvider>
        <div className='bg-[#030712] min-h-screen flex overflow-hidden flex-col'>
          <div className='container mx-auto'>
            <div className='border-l border-r border-b border-solid border-[#2c2e73]'>
              {loadingUserDetails ? (
                <div className="text-white text-center mt-4">Loading...</div>
              ) : (
                <NavbarL userDetails={userDetails} toggleSidebar={toggleSidebar} onSearchTermChange={handleSearchTermChange} />
              )}
            </div>
            <div className='flex flex-grow'>
              <div className='flex-grow'>
                <div className='mt-12 text-[36px] font-bold text-white text-center'>
                  Learning Paths
                </div>
                <Cards 
                  searchTerm={searchTerm} 
                  buttonTag={searchTag} 
                  currentPage={currentPage} 
                  onPageChange={handlePageChange} 
                  setTotalPages={setTotalPages} 
                />
              </div>
              {showSidebar && (
                <div className='w-72 text-white p-4 border-solid border max-h-[700px] border-[#2c2e73] relative ml-4'>
                  <Sidebar tkn={tkn} onConversationSelect={handleConversationSelect} />
                </div>
              )}
              {showMessage && selectedConversation && ( 
                <div className='w-72 text-white p-4 border border-solid border-[#2c2e73] fixed ml-4 right-80 bottom-0 z-20 bg-[#030712]'>
                  <MessageContainer user={selectedConversation} curruser={userDetails} tkn={tkn} />
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </MessageContextProvider>
    </SocketContextProvider>
  );
};

export default Dashboard;
