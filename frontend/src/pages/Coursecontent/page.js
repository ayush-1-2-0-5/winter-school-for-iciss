import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavbarC from '../../components/NavbarC';
import Content from '../../components/Content';

const Page = () => {
  const [userDetails, setUserDetails] = useState({});
  const [content, setContent] = useState(null);
  const [contenttt, setContentt] = useState([]); // Initialize as an array
  const [contentLength, setContentLength] = useState(null);
  const [currpage, setCurrPage] = useState(1);
  const [titles, setTitles] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state || {};

  const handleData = async (token) => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/user/session', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserDetails(response.data);
    } catch (error) {
      console.error('Data fetch error:', error);
    }
  };

  const fetchContent = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/content/${id}`);
      setContent(response.data);

      if (response.data && response.data.content && Array.isArray(response.data.content)) {
        setContentt(response.data.content);
        setContentLength(response.data.content.length);
      } else {
        console.error('Content data is not an array');
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const onPageChange = (page) => {
    setCurrPage(page);
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      handleData(token);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (id) {
      fetchContent(id);
    }
  }, [id]);
  useEffect(() => {
    if (content && content.content && Array.isArray(content.content)) {
      const titles = content.content.map(item => item.maintitle);
      setContentt(content.content);
      setTitles(titles);
    }
  }, [content]);

  // console.log(titles);
  
// console.log(titles);
  

  return (
    <>
      <div className='bg-[#2f3437] min-h-screen '>
        <NavbarC 
          userDetails={userDetails} 
          title={title} 
          length={contentLength} 
          currentPage={currpage} 
          onPageChange={onPageChange} 
          maintitle={titles}
       
        />

        <div className='mr-20 ml-20 mt-10 '>
          {contenttt.length > 0 && <Content content={contenttt[currpage - 1]} page={currpage} />}
        </div>
      </div>
    </>
  );
};

export default Page;
