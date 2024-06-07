import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarL from "../components/NavbarL";
import LearningPaths from '../components/LearningPath';
import axios from 'axios';
import Cards from '../components/Cards';


const Dashboard = () => {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({})
  

  const handleData = async(token) => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/user/session', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserDetails(response.data)
   
    } catch (error) {
      console.error('datafetch error:', error);
    }
};



  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      handleData(token)
    } else {
      navigate('/login');
    }
  }, []);

 

  return (
    <>
    <div className='bg-[#030712] min-h-screen'>
    <NavbarL userDetails={userDetails}/>
    <div className='mt-12 text-[50px] font-family:Times  font-bold text-white text-center'> Learning Paths</div>
    <div className='mt-6 flex justify-center'><LearningPaths/></div>
    <Cards/>
    </div>
    </>
  );
};

export default Dashboard;
