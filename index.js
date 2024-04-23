import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Services from './Services';
import Abt from './Abt';
import Home from './Home';
import Contactus from './Contactus';
import Blogs from './Blogs';
import Joinform from './JoinForm';
import SideBar from './SideBar';
import Studlogin from './Studlogin';


import reportWebVitals from './reportWebVitals';       


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
