import { useEffect, useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome icons
import './Studlogin.css';
import axios from 'axios';
import SideBar from './SideBar';
import { useNavigate } from "react-router-dom";


function PersonLogo() {
  return (
    <div className="person-logo">
      <FontAwesomeIcon icon={faUser} size="3x" />
    </div>
  );
}

function Studlogin({ history }) {

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [showPassword, setShowPassword] = useState(false);
  let [loggedIn, setLoggedIn] = useState(false); 
  
  
  
  
  


  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post('http://127.0.0.1:8000/user/api/users/', { username, password });
      console.log(response.data);
      // navigate('/dashboard');
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };




  const handleLogin = () => {
    setLoggedIn(true);
  };




  if (loggedIn) {
    return <SideBar />;
  }

  return (
    <div className="Studentlogin">
      <div className="login-container">
        <PersonLogo />
        <h2 id="headname">Login</h2>
        <form onClick={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

        <button type="submit"  onClick={handleLogin}>Login</button>
        </form>
        <div className="reset-password">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Studlogin;
