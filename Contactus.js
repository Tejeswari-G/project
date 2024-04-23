import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Contactus.css';
import styled from 'styled-components';
import  react, { useState,useEffect} from 'react';
import Validation from './Validation';
import ReactTransitionGroup from 'react-transition-group';
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faLinkedin, faPhone } from '@fortawesome/free-brands-svg-icons';
import { FaBars } from 'react-icons/fa';


function Contactus(){
  let wrapper=styled.section``;
  // let [isHomePage, setIsHomePage] = useState(true);
  // let [isMenuOpen, setIsMenuOpen] = useState(false);
  let [scrollPosition, setScrollPosition] = useState(0);



  // useEffect(() => {
  //   let handleOutsideClick = (event) => {
  //     // Check if the click is outside of the nav-links container
  //     if (
  //       event.target.closest('.nav-links') === null &&
  //       event.target.closest('.menu-icon') === null
  //     ) {
  //       setIsMenuOpen(false);
  //     }
  //   };
    

  //   // Add event listener when the component mounts
  //   document.addEventListener('click', handleOutsideClick);

  //   // Cleanup event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);


  useEffect(() => {
    let handleScroll = () => {
      let position=window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  let [submited,setsubmited]=useState(false);
  let [values, setValues] = useState({
    name: '',
    email: '',
    phone:''
  });
  let [errors,setErrors]=useState({});
  function handleInput(event){
    let newobj={...values, [event.target.name]: event.target.value };
    setValues(newobj);
  }
  function handleValidation(event){
    event.preventDefault();
    setErrors(Validation(values));
    setsubmited(true);
    event.target.reset();
  
  
  // Here you can handle form submission, such as sending data to a backend server
  console.log('Form submitted:', values);
  // You can also clear the form fields after submission
  
};

  // let toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  


  const handleLocationClick = () => {
    // Open Google Maps when the location icon is clicked
    window.open('https://www.google.com/maps?q=2nd+Floor+Above+Raymonds+Clothing+Store+KPHB+Phase-1+Kukatpally+Hyderabad');
  };



    return(
        <div className='header'>

        <div className='contactus'>

            <h1 id='titlebl'></h1>
          </div>





    <br/>



            <div class="sub-containera animatedElement">
    <div class="boxa">
      <h3>Make a call</h3>
      <br></br>
      <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
      <a style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }} href="tel:+91 7675070124">+91 7675070124</a>
      <br></br>
    </div>
    <div class="boxa">
      <h3>Send a Mail</h3>
      <br></br>
      
      <img src='https://img.icons8.com/office/24/000000/email.png' alt='Email' />
      <a style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }} href="mailto:contact@vcubegroup.com">contact@vcubegroup.com</a>
      <br></br>
    </div>
    <div class="boxa">
    
      <h3>Office Address</h3>
      <br></br>
      <img src='https://img.icons8.com/office/24/000000/address.png' alt='Location' onClick={handleLocationClick} style={{cursor: 'pointer'}} />
      
      2nd Floor
        Above Raymond's Clothing Store KPHB,
        Phase-1, Kukatpally, Hyderabad9
        <br></br>
    </div>
    </div>
       <div class="containera">
       <h2 className='common-heading mt-40'>Our Branches</h2>
       
        <div class="sub-containera">
          <div class="boxa">
            <h3>Corporate office</h3>
            <h5>Address:-</h5>
            <p>2nd Floor , above Raymond cloth shoroom, KPHB phase 1, Hyderabad, TS – 500 072 </p>
          </div>
          <div class="boxa">
            <h3>Python Branch</h3>
            <h5>Address:-</h5>
            <p>HIG-211, 2nd Floor, Dhanalakshmi Center, Beside Annamayya Hotel, HYD – 500072 </p>
          </div>
          <div class="boxa">
            <h3>Java Branch</h3>
            <h5>Address:-</h5>
            <p>Road No:1, Behind Chaithanya restaurant, near KPHB Kaman, 2nd floor, Hyderabad, TS – 500 072</p>
          </div>
          <div class="boxa">
            <h3>Java Branch - 2</h3>
            <h5>Address:-</h5>
            <p>MIG-211, 2nd floor, Above VLCC Wellness center, Phase-1, KPHB Colony, Hyderabad, TS – 500 072 </p>
          </div>
          <div class="boxa">
            <h3>Devops Branch</h3>
            <h5>Address:-</h5>
            <p> MIG-211, 2nd floor, Above VLCC Wellness center, Phase-1, KPHB Colony, Hyderabad, TS – 500 072 </p>
          </div>
          <div class="boxa">
            <h3>Consultancy Office</h3>
            <h5>Address:-</h5>
            <p>HIG-218, 3rd Floor, Rd No. 3, Beside Sree Vastav Silks, KPHB Colony, Hyderabad, TS – 500 072 </p>
          </div>    
        </div>
      </div>
      
       
        {/* Main Branch google Location  */}
  <wrapper>
  <div className='heading_adjust'>
    <h2 className='common-heading'>Feel Free to Contact us</h2>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.303343301365!2d78.39948817454255!3d17.493027199754536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9126cc644eb3%3A0x3ba13d860d4f3ae2!2sV%20Cube%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709526267888!5m2!1sen!2sin" 
    width="100%" 
    height="350" 
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
{/* Contact form */} 

<div className='signup_container w-100  d-flex justify-content-center animatedElement'>
  <div className='signup_form mt-5 w-50 '>
    <div className='form  mt-3 boxa'>
    <h2>Contact Form</h2>
      <form className='p-3' onSubmit={handleValidation}>
        <label for="name" className='mt-2'><strong></strong></label>
        <input type='text' placeholder='Enter name' name='name' className='form-control' onChange={handleInput}/>
        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

        <label for="email" className='mt-2'><strong></strong></label>
        <input type='text' placeholder='Enter Email' name='email' className='form-control' onChange={handleInput}/>
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

        <label for="phone" className='mt-2'><strong></strong></label>
        <input type='text' placeholder='Enter number' name='phone' className='form-control' onChange={handleInput}/>
        {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}

        <div className='mt-3'>
          <button className='btn btn-success w-50'>Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
  </wrapper>

<br></br>
<br></br>



 

<div className="content1">
        <div className="container1">
          <div className="grid-container1">
            <div className="grid-item1">
              <img />
            </div>
            <div className="grid-item2">
              <h2>Contact Info</h2>
              <p id='para'><a style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }} href="mailto:contact@vcubegroup.com">Email: contact@vcubegroup.com</a></p>
              <p id='para'>Address: 2nd Floor Above Raymond’s Clothing Store KPHB, Phase-1, Kukatpally, Hyderabad​</p>
              <p id='para'> <a style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }} href="tel:+91 7675070124"> Mobile: +91 7675070124</a> </p>
            </div>
            <div className="grid-item3">
  <h2>Social Media</h2>
  <br/>
  <br/>
  <a id='iconh' href="https://www.instagram.com/vcubesoftwaresolutions/?igshid=ZDc4ODBmNjlmNQ%3D%3D">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '10px' }} />
  </a>

  <a id='iconh' href="https://www.youtube.com/@VCUBESoftwareSolutions">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/800px-YouTube_icon_%282013-2017%29.png" alt="YouTube" style={{ maxWidth: '25px', maxHeight: '20px', marginRight: '10px' }} />
  </a>

  <a id='iconh' href="https://www.facebook.com/VCubeSoftwareSolutions">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '10px' }} />
  </a>

  <a id='iconh' href="https://www.linkedin.com/company/v-cube-software-solutions-pvt-ltd-official/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '10px' }} />
  </a>
</div>
          </div>
        </div>
      </div>




  </div>

    );
};
export default Contactus;