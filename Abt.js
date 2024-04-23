
import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faLinkedin, faPhone } from '@fortawesome/free-brands-svg-icons';

import './Abt.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function Abt() {


  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);
  const [hovered9, setHovered9] = useState(false);
















  



  
  const [stats, setStats] = useState([
    { heading: "6 Locations", count: 0, target: 6 },
    { heading: "30 Courses", count: 0, target: 30 },
    { heading: "25 Instructors", count: 0, target: 25 },
    { heading: "5000 Students", count: 0, target: 5000 }
  ]);

  useEffect(() => {
    const maxTarget = Math.max(...stats.map(stat => stat.target));
    const animationDuration = 3000; // 3 seconds in milliseconds

    const interval = setInterval(() => {
      setStats(prevStats => (
        prevStats.map(stat => ({
          ...stat,
          count: Math.min(stat.count + Math.ceil(stat.target / (animationDuration / 100)), stat.target)
        }))
      ));
    }, 100); // Update the count every 100 milliseconds

    // Clear interval once all numbers reach their targets
    const checkCompletionInterval = setInterval(() => {
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








  return (
      <div className="Abt">




<div className='abttpop'>

    <h1 id='titleab'>About</h1>
 

</div>
<br/>
<br/>
<br/>




    <div className="transparent-container">
      <div className="abtleft">
        <h2>About Us</h2>
        <p><span style={{ color: 'orange', fontSize: 'Large' }}>VCube</span> is an institute that caters to the needs of students, businessmen and freelancers wanting to learn, improve, explore and soar in their careers. Our corporate office is located in Kukatpally, Hyderabad, India and our training centers are in Kukatpally and Ameerpet, Hyderabad, India. VCUBE software Solutions Pvt.Ltd offers online information technology courses, online computer programming classes and starting information technology courses. Take advantage of both online and offline resources.</p>
        
      </div>
      <div className="abtright">
        <p>Companies now seek to be able to consume few resources, provide long-term solutions, and add significant value to the economy as a whole. To do so, most businesses consider digital transformation to be a way of life. 
<br/>
<br/>
V CUBE Software Solutions can help with this. To achieve that vision, we want to create an ecosystem that not only educates but also empowers the environment with talented resources. The goal does not end with education; it is just the beginning of a future that teaches, incubates, and accelerates tomorrow’s discoveries in order to create a better, more sustainable society.</p>
      </div>
    </div>

    <br/>





    <div className="transparent-container">
      <div className="abtleft1">
        <h2>Our Mission</h2>
        <hr className="abtline" />
<p>We were founded with the goal of providing students with training in the world’s most exciting sectors,preparing them for jobs and industries, and preparing them to face competitive challenges.</p>        
      </div>
      <div className="abtright1">
      <h2>Our Vision</h2>
      <hr className="abtline" />
       <p>To create an evident aura of expertise and education that encompasses each graduate and emanates directly from the quality of the individual instructor’s influence and contact with the student.</p>
       </div>
    </div>

    <br/>
    <br/>




    <div className="transparent-container1">
        <h1>Why Choose Us</h1>
        <br/>
      <div className="abtleft2">
        <h2>Comprehensive Training</h2>
        <hr className="abtline" />
<p>V Cube offers in-depth training on a wide range of software technologies, delivered by real-time industry experts. We also provide lab sessions after every class to give you hands-on experience. To solidify your learning, you will be required to work on a mandatory project in a field or domain of your choice, replicating real-time use cases.

This comprehensive training approach ensures that you develop the skills and knowledge you need to succeed in your software career.</p>
      </div><br/><br/>
      <div className="abtright2">
      <h2>Holistic Career Support</h2>
      <hr className="abtline" />
<p>At V Cube, we believe that your career success is our success. That’s why we provide a range of career support services to help you land your dream job.

Our services include:
<ul>
        <li><strong>Profile building:</strong> We help you build a strong resume and LinkedIn profile that highlights your skills and experience. We also guide you on how to write effective LinkedIn postings.</li>
        <li><strong>Weekly examinations:</strong> We conduct weekly examinations to assess your progress and help you identify areas where you need additional support.</li>
        <li><strong>Mock interviews:</strong> We conduct mock interviews to help you prepare for the real thing. We provide feedback on your performance and help you improve your interview skills.</li>
        <li><strong>Continuous LinkedIn profile building activities:</strong> We help you build your LinkedIn profile throughout the course, ensuring that it is always up-to-date and relevant to your job search.</li>
        <li><strong>Agile methodology practices:</strong> We teach you how to use agile methodology to manage projects and deliver high-quality software on time and within budget.</li>
        <li><strong>Online aptitude classes:</strong> We offer online aptitude classes to help you prepare for aptitude tests that are often conducted by software companies during the hiring process.</li>
        <li><strong>Job assistance:</strong> We provide job assistance to our students, including helping them identify job openings, prepare for interviews, and negotiate salaries.</li>
      </ul>
</p>       
</div><br/><br/>
<div className="abtleft2">
        <h2>Agile Methodology for Project Execution</h2>
        <hr className="abtline" />
<p>We believe that agile methodology is the best way to execute software projects. Agile is an iterative and incremental approach to software development that allows us to deliver high-quality software quickly and efficiently.

At V Cube, we follow a weekly sprint planning process for project execution. 
<br/>
This process includes the following steps:
<br/><br/>
<strong>Step 1: Resource Planning</strong>
<br/>
We divide our students into small batches of up to 25 students. Each batch is assigned a dedicated project team with a combination of developers, testers, and DevOps engineers.
<br/><br/>
<strong>Step 2: Project Planning</strong>
<br/>
We start by gathering project requirements from our clients. Once we have a good understanding of the requirements, we develop a project functional design and technical design. We also discuss and prepare project test case scenarios.
<br/><br/>
<strong>Step 3: Development / Test Cases Preparation</strong>
<br/>
Our students then begin developing the software and preparing test cases. We provide them with all the necessary resources and support to ensure that they are successful.
<br/><br/>
<strong>Step 4: Project Production Deployment Planning</strong>
<br/>
Once the software is developed and tested, we deploy it to the production environment. We use Git for code version control, Linux OS and Apache web server for public hosting, Jira/MANTIS tool for bug tracking, and DevOps tools like Jenkins and Pipelines to migrate the code to the production environment.
<br/><br/>
<strong>Step 5: Inputs for next Sprint life cycle</strong>
<br/>
At the end of each sprint, we gather feedback from our clients and use it to plan the next sprint. This ensures that we are constantly improving the software and meeting the needs of our clients.</p>
      </div>
    
    <br/>
    <br/>
    <div className="abtright2">
      <h2>Rewards Program</h2>
      <hr className="abtline" />
<p>We are committed to helping our students succeed, and we recognize that hard work and dedication deserve to be rewarded. That’s why we have a rewards program in place for our students.
    <br/>
    Our rewards program includes the following:
    <br/>
<ul>
        <li>Mentorship opportunity: We offer our top students the opportunity to mentor a small group on the project, along with a cash incentive.</li>
        <li>Internship opportunity: We offer our students with good attendance in classes and weekly exams the opportunity to intern with us.</li>
       </ul>
</p>       
</div>
</div>
    <br/>
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



    <div className="transparent-container">
      <div className="abtleft">
        <h1>OUR SERVICE</h1>
      </div>
      <div className="abtright">
      <p>We offer high-quality training from industry expert in a variety of technologies to suit candidates with various academic backgrounds. The training is appropriate for all aspiring IT professionals and is provided by an experienced faculty team. We have seasoned instructors who can help professionals improve their technology skills for day-to-day tasks.
<br/>
1. Classroom Training
<br/>
2. Corporate Training
<br/>
3. Online Training </p>
      </div>
    </div>

    <br/>








      <div className="containerle">
        <div className="titlele">
          <h1>Our Trainers</h1>
        </div>
        <div className="galleryle">
          <div className="itemle">
          <div className="imagei1"></div>
            <div className="info">
              <h2>MR.PVR</h2>
              <p>JAVA</p>
            </div>
          </div>
          <div className="itemle">
          <div className="imagei2"></div>
            <div className="info">
              <h2>MR.MANOHAR</h2>
              <p>TESTING TOOLS</p>
            </div>
          </div>
          <div className="itemle">
          <div className="imagei3"></div>
            <div className="info">
              <h2>Mr.SRINIVAS</h2>
              <p>PYTHON</p>
            </div>
          </div>
          <div className="itemle">
          <div className="imagei4"></div>
            <div className="info">
              <h2>MR.MADHUKAR</h2>
              <p>DEVOPS</p>
            </div>
          </div>
          <div className="itemle">
          <div className="imagei5"></div>
            <div className="info">
              <h2>MR.VISHWANATH</h2>
              <p>JAVA</p>
            </div>
          </div>
          
        </div>
      </div>
      <br/>
    <br/>
    <br/>


<div className='abtct'>
    <h1>Meet Our Core Team
</h1>
<hr className="abtline" />
    <div className='abtimg1'></div>
    <div className='abtimg2'></div>
    <div className='abtimg3'></div>
    <div className='abtimg4'></div>
    <div className='abtimg5'></div>
</div>

<br/>
<br/><br/>




<div className='abtct'>
    <h1>JCP Team
</h1>
<hr className="abtline" />
<div className='abtimgrrr'>
    <div className='abtrj'
          onMouseEnter={() => setHovered7(true)}
          onMouseLeave={() => setHovered7(false)}
        ><div className='abtimgrr' id='abtimg111'></div>
        {hovered7 && <h3>VEERABHADRA</h3>}
        </div>
    <div className='abtrj'
          onMouseEnter={() => setHovered8(true)}
          onMouseLeave={() => setHovered8(false)}
        ><div className='abtimgrr' id='abtimg222'></div>
        {hovered8 && <h3>SHIVA</h3>}
        </div>
    <div className='abtrj'
          onMouseEnter={() => setHovered9(true)}
          onMouseLeave={() => setHovered9(false)}
        ><div className='abtimgrr' id='abtimg333'></div>
        {hovered9 && <h3>NAYAB MOHAMMED MOIN</h3>}
        </div>
    </div>
</div>

<br/>
<br/><br/>

<div className='abtct'>
    <h1>Our Digital Marketing Team
</h1>
<h2>Digital Marketer</h2>
<hr className="abtline" />
<div className='abtimgrrr'>
      <div className='abtrj'
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
        <div
          className='abtimgrr'
          id='abtimg11'></div>
        {hovered1 && <h3>VEERABHADRA</h3>}
      </div>
      <div className='abtrj'
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
        <div
          className='abtimgrr'
          id='abtimg22'></div>
        {hovered2 && <h3>SATHWIK NOOLI</h3>}
      </div>
      <div className='abtrj'
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
        <div
          className='abtimgrr'
          id='abtimg33'></div>
        {hovered3 && <h3>NAYAB MOHAMMED MOIN</h3>}
      </div>
      <div className='abtrj'
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
        <div
          className='abtimgrr'
          id='abtimg44'></div>
        {hovered4 && <h3>ANIL MUVVALA</h3>}
      </div>
      <div className='abtrj'
          onMouseEnter={() => setHovered5(true)}
          onMouseLeave={() => setHovered5(false)}
        >
        <div
          className='abtimgrr'
          id='abtimg55'></div>
        {hovered5 && <h3>SWETHA BANDARAPU</h3>}
      </div>
      <div className='abtrj'
          onMouseEnter={() => setHovered6(true)}
          onMouseLeave={() => setHovered6(false)}
        >
        <div
          className='abtimgrr'
          id='abtimg66'></div>
        {hovered6 && <h3>MOUNIKA ALUGUVEELI</h3>}
      </div>
    </div>
</div>


<br/>
<br/><br/>










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

export default Abt;