import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleCheckboxChange = () => {
      setKeepLoggedIn(!keepLoggedIn);
  };
  const [href, setHref] = useState('#');

  const handleClick = () => {
    setHref('http://localhost:3000/signup');
  };


  const handleLogin = () => {
    console.log('Logging in...');
  };


  return (
    <div className="login-container">
      <div className="left-half">
        <img src="/Rectangle 1.png" alt="Login Image" />
      </div>

        <div className='login'>Login</div>
        <div className='b'>Login your account in seconds</div>
        <input
          type="text"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='inputa'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='inputb'
        />
      <div className="checkbox-container">
          <input
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={handleCheckboxChange}
          />
      </div>
       <div  className='kp'>Keep me logged in</div>
        <a href="#" className='fp'>Forgot password?</a>
        <button className="login-button" onClick={handleLogin}>Log in</button>

        <div>
      <p className='dont'>Don't have an account?  <a className="sign" href={href} onClick={handleClick}>Signup</a></p>
    </div>
      

      <div className="container" style={{ position: 'absolute', width: '422px', height: '19px', left: '925px', top: '627px', display: 'flex', alignItems: 'center'  }}>
        <hr className="line" style={{ flex: '1', marginRight: '10px', borderTop: '1px solid black' }} />
        <span className="text">    Or continue with    </span>
        <hr className="line" style={{ flex: '1', marginLeft: '10px', borderTop: '1px solid black' }} />
      </div>

      <div class="social-login-container">
          <div class="social-login-option" >
              <img  className='g' src="/Google.png"/>
             <img  className='f'  src="/Facebook.png"/>
             <img  className='i'  src="/Instagram.png"  />
             <img  className='t'  src="/Twitter.png"  />
             
              
             
          </div>
      </div>



      </div>
       
  
  );
};

export default LoginPage;
