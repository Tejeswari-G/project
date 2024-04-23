// App.js
import { useEffect, useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faLinkedin, faPhone } from '@fortawesome/free-brands-svg-icons';
import image1 from './assets/qdq.png'
// import { FaBars } from 'react-icons/fa';
import './Home.css';
import img1 from './assets/pc1.jpg';
import img2 from './assets/pc2.jpg';
import img3 from './assets/pc3.jpg';
import img4 from './assets/pc4.jpg';
import img5 from './assets/pc5.jpg';
import img6 from './assets/pc6.jpg';
import img7 from './assets/pc7.jpg';
import img8 from './assets/t1.jpeg.jpg';
import img9 from './assets/t2.jpeg.jpg';
import img10 from './assets/t3.jpeg.jpg';
import img11 from './assets/t4.jpeg.jpg';
import img12 from './assets/t5.jpeg.jpg';
import img13 from './assets/t6.jpeg.jpg';
import img14 from './assets/t7.jpeg.jpg';
import img15 from './assets/t8.jpeg.jpg';
import img16 from './assets/t9.jpeg.jpg';
import img17 from './assets/t10.jpeg.jpg';
import img18 from './assets/t11.jpeg.jpg';
import img19 from './assets/t12.jpeg.jpg';

import VisibilitySensor from 'react-visibility-sensor';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function Home() {


  // let [isHomePage, setIsHomePage] = useState(true);
  // let [isMenuOpen, setIsMenuOpen] = useState(false);

  // let toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

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



  let [isVisible, setIsVisible] = useState(false);

  let onChangeVisibility = (isVisible) => {
    setIsVisible(isVisible);
  };




  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isVisible, 
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };





  let [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  let [popupVisible, setPopupVisible] = useState(false);
  let [selectedImage, setSelectedImage] = useState(null);

  let handleMouseEnter = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  let handleMouseLeave = () => {
    setSelectedImage(null);
  };







  
  const [stageInfo, setStageInfo] = useState(null);
  
  const stages = [
  { stageNumber: 1, title: 'Choosing the Right Course', description: 'In this initial stage, students are guided through selecting the most suitable course that aligns with their career goals and interests, ensuring a strong foundation for their learning journey.', imageUrl: img8 },
  { stageNumber: 2, title: 'Real-time Training', description: 'Students dive into immersive real-time training sessions, led by experienced instructors, where they gain hands-on experience and practical skills essential for success in the software industry.', imageUrl: img9 },
  { stageNumber: 3, title: 'Daily Lab', description: 'Participants engage in daily lab sessions, providing them with the opportunity to apply the theoretical knowledge gained in class to practical, real-world scenarios, fostering a deeper understanding of concepts.', imageUrl: img10 },
  { stageNumber: 4, title: 'Daily or Weekly Assignments', description: 'Students tackle daily or weekly assignments designed to reinforce learning objectives, encouraging critical thinking and problem-solving skills essential for success in the field of software development.', imageUrl: img11 },
  { stageNumber: 5, title: 'Weekly Tests', description: 'Weekly tests assess students comprehension and progress, providing valuable feedback to both learners and instructors, helping tailor the learning experience to individual needs.', imageUrl: img12 },
  { stageNumber: 6, title: 'Online Aptitude Classes', description: 'Students hone their analytical and reasoning skills through online aptitude classes, preparing them for the challenges of technical interviews and assessments in the software industry.', imageUrl: img13 },
  { stageNumber: 7, title: 'Mock Interview', description: 'Mock interviews simulate real-world interview scenarios, allowing students to refine their communication, presentation, and technical skills under the guidance of industry professionals.', imageUrl: img14 },
  { stageNumber: 8, title: 'Resume Building', description: 'Participants receive guidance on crafting compelling resumes that effectively showcase their skills, experiences, and achievements, increasing their chances of securing interviews and employment opportunities.', imageUrl: img15 },
  { stageNumber: 9, title: 'Live Project', description: 'Students collaborate on live projects, gaining invaluable hands-on experience working on real-world software development projects, further enhancing their skills and preparing them for the demands of the industry.', imageUrl: img16 },
  { stageNumber: 10, title: 'Interview Preparation and Soft Skills', description: 'Students undergo comprehensive interview preparation, focusing on both technical proficiency and soft skills development, equipping them with the confidence and abilities to excel in job interviews and professional settings.', imageUrl: img17 },
  { stageNumber: 11, title: 'Course Completion Certificate', description: 'Upon successful completion of the program, students receive a course completion certificate, validating their expertise and dedication to mastering the skills required for a career in software development.', imageUrl: img18 },
  { stageNumber: 12, title: 'Placement Assistance', description: 'The institute provides ongoing support and guidance to students, offering placement assistance services to help them secure rewarding job opportunities and launch their careers in the software industry.', imageUrl: img19 },
];

const handleStageHover = (info) => {
  setStageInfo(info);
};

const handleStageLeave = () => {
  setStageInfo(null);
};
 

  
  let [stats, setStats] = useState([
    { heading: "8 Locations", count: 0, target: 8 },
    { heading: "35 Courses", count: 0, target: 35 },
    { heading: "50 Instructors", count: 0, target: 50 },
    { heading: "5000 Students", count: 0, target: 5000 }
 
  ]);

  useEffect(() => {
    let maxTarget = Math.max(...stats.map(stat => stat.target));
    let animationDuration = 3000; // 3 seconds in milliseconds

    let interval = setInterval(() => {
      setStats(prevStats => (
        prevStats.map(stat => ({
          ...stat,
          count: Math.min(stat.count + Math.ceil(stat.target / (animationDuration / 100)), stat.target)
        }))
      ));
    }, 100); // Update the count every 100 milliseconds

    // Clear interval once all numbers reach their targets
    let checkCompletionInterval = setInterval(() => {
      if (stats.every(stat => stat.count === stat.target)) {
        clearInterval(interval);
        clearInterval(checkCompletionInterval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(checkCompletionInterval);
    };
  }, []);




  let images1 = [
    'C:\Project\my_homepage\src\assets\qdq.png',
    'C:\Project\my_homepage\src\assets\Screenshot 2023-12-20 195703.png',
    'C:\Project\my_homepage\src\assets\Screenshot 2023-12-26 203622.png'
  ];

  let [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


    let [currentIndex, setCurrentIndex] = useState(0);
    let imagePaths = [
      require('./assets/comp1.png'),
      require('./assets/comp2.png'),
      require('./assets/comp3.png'),
      require('./assets/comp4.png'),
      require('./assets/comp5.png'),
      require('./assets/comp6.png')
    ];
  
    let nextSlide = () => {
      setCurrentIndex(currentIndex === imagePaths.length - 1 ? 0 : currentIndex + 1);
    };
  
    let prevSlide = () => {
      setCurrentIndex(currentIndex === 0 ? imagePaths.length - 1 : currentIndex - 1);
    };




    let [showContainer, setShowContainer] = useState(false);

    useEffect(() => {
      let timer = setTimeout(() => {
        setShowContainer(true);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);
  
    let handleCloseContainer = () => {
      setShowContainer(false);
    };
  
    let handleSubmit = (event) => {
      event.preventDefault(); 
      event.target.reset();
    };


  return (
      <div className="App">

<div className="home-container">
      {showContainer && (
        <div className="containerpup" id="uniqueContainerId">
          <h3 style={{ color: 'orange' }}>Contact Us</h3>
          <span className="close-btn" onClick={handleCloseContainer}>X</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" id="uniqueEmailId" />
            <input type="tel" placeholder="Mobile Number" id="uniqueMobileId" />
            <input type="text" placeholder="Address" id="uniqueAddressId" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>


<VisibilitySensor onChange={onChangeVisibility} partialVisibility>
      <div className="Appt">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Image 1"/>
          </div>
          <div>
            <img src={img2} alt="Image 2"/>
          </div>
          <div>
            <img src={img3} alt="Image 3"/>
          </div>
          <div>
            <img src={img4} alt="Image 4"/>
          </div>
          <div>
            <img src={img5} alt="Image 5"/>
          </div>
          <div>
            <img src={img6} alt="Image 6"/>
          </div>
          <div>
            <img src={img7} alt="Image 7"/>
          </div>
        </Slider>
   


      </div> 
      </VisibilitySensor>

    <div className="transparent-container">
      <div className="left-content">
        <h2>About Us</h2>
        <p >V Cube is Best Software Training Institute In Hyderabad, KPHB that offers comprehensive training on a wide range of software technologies, delivered by real-time & full-time industry experts. We also provide lab sessions after every class to give you hands-on experience. To solidify your learning, you will be required to work on a mandatory project in a field or domain of your choice, replicating real-time use cases.
In addition to comprehensive training, V Cube also provides a range of career support services to help you land your dream job. This includes profile / resume building, weekly examinations, mock interviews, continuous LinkedIn profile building activities, agile methodology practices, online aptitude classes, and job assistance.</p>
        <a href='/about' ><button id='lastbut11'> Read more......</button> </a>
      </div>
      <div className="right-content">
        <img />
      </div>
    </div>

    <br/>



    <div className="timeline">
      <h1>What we do</h1>
      <div className="stages">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="stage"
            onMouseEnter={() => handleStageHover(stage)}
            onMouseLeave={handleStageLeave}
          >
            <div className="stage-content">
              <div className="stage-image">
                <img src={stage.imageUrl} alt={`stage ${stage.stageNumber}`} />
              </div>
              <div className="stage-title">{stage.title}</div>
              {stageInfo && stage.stageNumber === stageInfo.stageNumber && (
                <div className="stage-description">{stage.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <br/>


    <div className='divq'>
    <div className="containerp">
      <h1 className="headingp">Our Featured Courses</h1>
      <div className="images-containerp">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="image-divp"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
          </div>
        ))}
        <br/>
      </div>
      <a href='/services' ><button id='more-button'> Read More......</button> </a>
      
    </div>
    </div>

    <br/>




    <div className="divnum">
      <div className="number-statsq">
        {stats.map((stat, index) => (
          <div key={index} className="statq">
            <div className="number-containerq">
              <h2 className="countq">{stat.count}{stat.target > 1 ? '+' : ''}</h2>
              <p className="headingq">{stat.heading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br/>
    <br/>
    <br/>


    <div className="containers">
        <div className="titles">
          <h1>The VCUBE Advantages</h1>
        </div>
        <div className="slideshow-container">
          <div className="slideshow-box">
            <h2>In-Time Course Completion</h2>
            <p>At V Cube, we understand that your time is valuable. That’s why we are committed to helping you complete your course on time and achieve your career goals.</p>
          </div>
          <div className="slideshow-box">
            <h2>Free Demo Sessions</h2>
            <p>We want you to be confident that V Cube is the right choice for you before you enrol in our course. That’s why we offer free demo sessions to all prospective students.</p>
          </div>
          <div className="slideshow-box">
            <h2>State-Of-The-Art Infrastructure</h2>
            <p>We invest in state-of-the-art infrastructure to provide our students with the best possible learning experience. Our classrooms are equipped with the latest software.</p>
          </div>
          <div className="slideshow-box">
            <h2>Blended Training Approach</h2>
            <p>We believe that the best way to learn is through a blended approach that combines classroom instruction with hands-on experience. That’s why we offer a blended.</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>


      <div className="containerle">
        <div className="titlele">
          <h1>Our Batches</h1>
        </div>
        <div className="galleryle">
          <div className="itemle">
          <a href="#"><div className="imagei1"></div></a>
            <div className="info">
              <h2>JAVA FULL STACK</h2>
              <p>Faculty</p>
              <p>&#128100; MR.PVR</p>
            </div>
          </div>
          <div className="itemle">
          <a href="#"><div className="imagei2"></div></a>
            <div className="info">
              <h2>TESTING TOOLS</h2>
              <p>Faculty</p>
              <p>&#128100; MR.MANOHAR</p>
            </div>
          </div>
          <div className="itemle">
          <a href="#"><div className="imagei3"></div></a>
            <div className="info">
              <h2>PYTHON FULL STACK</h2>
              <p>Faculty</p>
              <p>&#128100; Mr.SRINIVAS</p>
            </div>
          </div>
          <div className="itemle">
          <a href="#"><div className="imagei4"></div></a>
            <div className="info">
              <h2>AWS (OFFLINE)</h2>
              <p>Faculty</p>
              <p>&#128100; MR.MADHUKAR</p>
            </div>
          </div>
          <div className="itemle">
          <a href="#"><div className="imagei5"></div></a>
            <div className="info">
              <h2>AZURE DEVOPS</h2>
              <p>Faculty</p>
              <p>&#128100; MR.SANTHOSH</p>
            </div>
          </div>
          <div className="itemle">
          <a href="#"><div className="imagei6"></div></a>
            <div className="info">
              <h2>AWS (ONLIINE)</h2>
              <p>Faculty</p>
              <p>&#128100; MR.KRISHNA REDDY & BABJI</p>
            </div>
          </div>
          
        </div>
      </div>





      <div className="video-section">
      <h2>Our Videos</h2>
      <div className="video-container">
  <div className="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7P1cD8avr0Y?si" title="YouTube Video 1" allowFullScreen></iframe>
  </div>
  <div className="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/v7n4mss08EE?si" title="YouTube Video 2" allowFullScreen></iframe>
  </div>
  <div className="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZWWqocUzRT8?si" title="YouTube Video 3" allowFullScreen></iframe>
  </div>
  <div className="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ymk1EiEpY-A?si" title="YouTube Video 4" allowFullScreen></iframe>
  </div>
  <div className="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/p4hiVOV5F6E?si" title="YouTube Video 5" allowFullScreen></iframe>
  </div>
  <div className="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/g9gk18xKwCw?si" title="YouTube Video 6" allowFullScreen></iframe>
  </div>
</div>

    </div>
    <br/>
    <br/>
    <br/>



      <div className="containerin">
        <div className="titlein">
          <h1>The Best Place to Develop Your Career In V CUBE</h1>
        </div>
        <div className="galleryle">
          <div className="itemin">
              <h2>Price that is reasonable</h2>
              <p>At a fair price, you can get the greatest learning experience and the best knowledge-based career foundation.</p>
          </div>
          <div className="itemin">
              <h2>Classroom Training</h2>
              <p>Comprehensive instructor-led training with opportunities to engage with the teacher, peers, and coworkers in person and discuss ideas.</p>
          </div>
          <div className="itemin">
              <h2>Corporate training</h2>
              <p>Corporate training is an excellent way to close the skills gap and develop a highly competent and productive staff.</p>
          </div>
          <div className="itemin">
              <h2>Online Training</h2>
              <p>Online Training With our online-based blended training strategy, you’ll gain know-ledge and real world skills in the technologies.</p>
          </div>
          <div className="itemin">
              <h2>100% Placement</h2>
              <p>Get the best job placement aid from our seasoned professionals who will assist you in attaining your career objectives.</p>
          </div>
          <div className="itemin">
              <h2>Projects on daily basis</h2>
              <p>Description 1Daily projects will help you improve your abilities by allowing you to try things on your own and learn from your failures.</p>
        </div>
      </div>
      </div>
      <br/>





      <div className="contact-info">
      <h1>Contact Information</h1>
      <div className="contact-section">
        <br></br>
        <h4>Social Media</h4>
        <div className="logo-container">
        <a href="https://www.instagram.com/vcubesoftwaresolutions/?igshid=ZDc4ODBmNjlmNQ%3D%3D">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ maxWidth: '30px', maxHeight: '30px' }} /> Instagram
  </a>
  <a href="https://www.youtube.com/@VCUBESoftwareSolutions">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/800px-YouTube_icon_%282013-2017%29.png" alt="YouTube" style={{ maxWidth: '30px', maxHeight: '30px' }} />Youtube

  </a>
  <a href="https://www.facebook.com/VCubeSoftwareSolutions">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ maxWidth: '30px', maxHeight: '30px' }} />Facebook
  </a>
  <a href="https://www.linkedin.com/company/v-cube-software-solutions-pvt-ltd-official/">
     <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style={{ maxWidth: '30px', maxHeight: '30px' }} /> LinkedIn
  </a>
</div>
      </div>
      <div className="contact-section">
        <h4>Phone Number</h4>
        <p><a  style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }} href="tel:+91 7675070124">+91 7675070124</a></p>
      </div>
      <div className="contact-section">
        <h4>Email Address</h4>
        <p><a style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }} href="mailto:contact@vcubegroup.com">Email: contact@vcubegroup.com</a></p>
      </div>
    </div>
    <br/>
    <br/>
    <br/>



    <div className="title-container">
        <h1>Companies</h1>
      </div>


    <div className="slideshow-container">
      <div className="slideshow">
        <img src={imagePaths[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="button-container">
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </div>


    <br/>
    <br/>
    <br/>




    <div className='lastsec'>
      <h1>
      Upskill & Reskill For Your Future With Our Software Courses
      </h1>
      <p>
      Best IT Training Institute In Hyderabad
      </p>
      <a href='/contactus' ><button id='lastbut'> Contact Us</button> </a>
    </div>
    <br/>
    <br/>
    <br/>



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
 }

export default Home;