import { useEffect, useState, useRef } from 'react';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faLinkedin, faPhone } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import image1 from './assets/qdq.png'
import { FaBars } from 'react-icons/fa';
import './Services.css';

function Servicess() {

//   const [isHomePage, setIsHomePage] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       // Check if the click is outside of the nav-links container
//       if (
//         event.target.closest('.nav-links') === null &&
//         event.target.closest('.menu-icon') === null
//       ) {
//         setIsMenuOpen(false);
//       }
//     };
    

//     // Add event listener when the component mounts
//     document.addEventListener('click', handleOutsideClick);

//     // Cleanup event listener when the component unmounts
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);






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





  let [showContainer, setShowContainer] = useState(false);
  let [containerContent, setContainerContent] = useState(null);
  let containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // Clicked outside the container, so close it
        setShowContainer(false);
        setContainerContent(null);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleViewClick = (content) => {
    setShowContainer(true);
    setContainerContent(content);
  };

  const handleCloseContainer = () => {
    setShowContainer(false);
    setContainerContent(null);
  };






  





  const handleDownloadClick = (pdf) => {
    
    // Simulate download
    // Replace this with actual download logic
    
    let pdfPath;
    
    switch (pdf) {
      case 'pdf1.pdf':
        pdfPath = require(`./assets/see1.pdf`);
        break;
      case 'pdf2.pdf':
        pdfPath = require(`./assets/see2.pdf`);
        break;
        case 'pdf3.pdf':
          pdfPath = require(`./assets/see4.pdf`);
          break;
          case 'pdf4.pdf':
        pdfPath = require(`./assets/see5.pdf`);
        break;
      case 'pdf5.pdf':
        pdfPath = require(`./assets/see7.pdf`);
        break;
        case 'pdf6.pdf':
          pdfPath = require(`./assets/see9.pdf`);
          break;
          case 'pdf7.pdf':
          pdfPath = require(`./assets/see10.pdf`);
          break;
        case 'pdf8.pdf':
          pdfPath = require(`./assets/see12.pdf`);
          break;
          case 'pdf9.pdf':
            pdfPath = require(`./assets/see16.pdf`);
            break;
            case 'pdf10.pdf':
            pdfPath = require(`./assets/see24.pdf`);
            break;
          case 'pdf11.pdf':
            pdfPath = require(`./assets/see27.pdf`);
            break;
      // Add more cases for additional PDF files
      default:
        pdfPath = null; // Set default path or handle error
    }
    
    if (pdfPath) {
      window.open(pdfPath);
    } else {
      alert('PDF not found!');
    }
  };













  return (
      <div className="App">

        <div className='service'>

            <h1 id='titlebl'>Services</h1>
        </div>



<br/>
    <br/>
    <br/><br/>
  



<div className='ofc'>
  <h1>Our Featured Courses</h1>
</div>
<br/><br/>





<div className="services-container">
<div className='ser1'>
        <div className="service1">
          <div className="options">
          <button className="option" onClick={() => handleViewClick(
  <div>
    <div className='view1'><img/></div>
    <div>
    <h1>Java Training</h1>
    <p>Java Training is one of the most widely used programming languages, Java is used as the server-side language for most back-end development projects, including those involving big data and Android development. Java is also commonly used for desktop computing, other mobile computing, games, and numerical computing. V Cube Software Solutions is one of the top organizations in Hyderabad for Java Training. Get your Java Training in Kphb now.</p>
    <h2>COURSE STRUCTURE</h2>
    <h3>Core Java Programming</h3>
    <ul>
  <li>Classes</li>
  <li>Object Oriented Features</li>
  <li>Java Features</li>
  <li>Methods, Fields</li>
  <li>Access Modifiers</li>
  <li>Setters and Getter methods</li>
  <li>JDK, JRE, JVM</li>
  <li>Encapsulation</li>
  <li>Overloading</li>
  <li>Constructors</li>
  <li>String basics</li>
  <li>This keyword</li>
  <li>Inheritance</li>
  <li>Overriding</li>
  <li>Types of Inheritance</li>
  <li>Constructor of Inheritance</li>
  <li>Super keyword</li>
  <li>Dynamic Method Dispatch</li>
  <li>Final modifier</li>
  <li>Abstract modifier</li>
  <li>Static modifier</li>
  <li>Interfaces</li>
  <li>Packages</li>
  <li>Command line arguments</li>
  <li>Wrapper classes</li>
  <li>Nested classes and interfaces</li>
  <li>Blocks in classes</li>
  <li>Basics of JVM</li>
  <li>Exception handling</li>
  <li>IO</li>
  <li>Multi-threading</li>
  <li>Collections framework</li>
  <li>Garbage collection</li>
  <li>Features of Java 8</li>
</ul>
<h3>Database</h3>
<h3>MySQL</h3>
<ul>
  <li>SQL</li>
  <li>DDL, DML, DCL, TCL</li>
  <li>Views</li>
  <li>Joins</li>
  <li>Subqueries</li>
  <li>Aggregate Functions</li>
  <li>PL/SQL</li>
  <li>Cursors, Triggers, Functions, Procedures</li>
</ul>

<h3>UI developmant</h3>
<h3>HTML</h3>

<ul>
  <li>Tags, Static Page Creation</li>
  <li>Doctype, Meta</li>
  <li>URLs</li>
  <li>Images</li>
  <li>Tables</li>
  <li>Input, Button, Form Fields</li>
</ul>
<h3>CSS</h3>
<ul>
  <li>Style, Class Selectors</li>
  <li>Font, Id Selectors, Text, Border, Padding, Positioning</li>
  <li>HTML with CSS</li>
</ul>

<h3>JavaScript</h3>
<ul>
  <li>Operators, Variables</li>
  <li>Loops, Arrays, Functions</li>
  <li>Manipulations</li>
  <li>Forms, Images</li>
</ul>
<h3>BootStrap</h3>
<ul>
  <li>Grid, Responsive design, Layout</li>
  <li>Tables, Lists, Forms</li>
  <li>Groups, Images, Buttons, Navbar</li>
  <li>Panels, Breadcrumbs, Jumbotron, Dropdowns, Tabs, Carousel</li>
</ul>
<h3>Angular</h3>
<ul>
<li>Class Bindings</li>
  <li>Style Bindings</li>
  <li>Event Bindings</li>
  <li>Components</li>
  <li>Services</li>
  <li>Component Interaction</li>
  <li>Routing</li>
  <li>Observables</li>
  <li>Input and Output</li>
  <li>Directives</li>
  <li>Modules</li>
</ul>
<h3>Java Web Development</h3>
<h3>JDBC</h3>
<ul>
    <li>Drivers</li>
    <li>Types</li>
    <li>Statements</li>
    <li>Prepared Statements</li>
  </ul>
<h3>Servlet</h3>
<ul>
    <li>Life Cycle</li>
    <li>Session Management</li>
    <li>Config, Context</li>
    <li>Request, Response</li>
  </ul>
<h3>JSP</h3>
<ul>
    <li>Tags</li>
    <li>Implicit Objects</li>
    <li>JSP MVC</li>
    <li>MVC Architecture</li>
  </ul>
<h3>JSP MVC</h3>
<ul>
<li>MVC Architecture</li>
</ul>
<h3>Springboot Framework</h3>
<ul>
<li>Spring vs Springboot</li>
    <li>CLI, STS, Annotations</li>
    <li>DI, AOP, JPA, Hibernate, with MySQL</li>
    <li>With REST</li>
</ul>
<h3>ORM – Hibernate, JPA</h3>
<ul>
<li>Generator classes, Dialects, Log4j</li>
    <li>Mappings</li>
    <li>JPA vs Hibernate</li>
</ul>
<h3>MVC Architecture</h3>
<h3>REST Services</h3>
<ul>
<li>Components, RS, WS</li>
    <li>RESTful services with SB</li>
</ul>
<h3>Microservices Introduction</h3>
<h3>Methodologies – Agile</h3>
<h3>Design Patterns</h3>
<ul>
<li>Singleton</li>
</ul>
<h3>Software Testing</h3>
<ul>
<li>Manual Testing</li>
      <li>Unit Testing, Regression, White-box, Component</li>
</ul>
<h3>Good to Know</h3>
<ul>
<li>LOG4J</li>
  <li>GitHub</li>
  <li>Maven</li>
  <li>Junit</li>
  <li>Eclipse</li>
</ul>

<h2>History of Java</h2>
<h3>Java Tutorial For beginners</h3>
<p>James Gosling and Sun Microsystems created The Java programming language around the year 1991. The motto he used when he created Java “Write one time; go everywhere.” They initially named the language Oak due to the oak tree in Gosling’s office. Later, the name was changed to Green and then Java Coffee and finally Java Coffee, named after the coffee of Indonesia which was later shortened to Java in 1995. Are you eager to receive Best java training in Hyderabad  you are in the right place. </p>
<h2>What is Java Used For?</h2>
<h3>Learn Java Programming</h3>
<p>Java is extensively used for web consoles and GUIs for mobile, mobile games gaming design, embedded system as well as desktop and tablet applications. Beyond that, Java is also used to create software for devices. Java is not just used on mobile and computers however, it is also used in electronic devices such as the television, air conditioners washing machines and others. Registration forms online as well as banking apps and shopping on the internet are all possible thanks to Java.</p>
<h2>What is Java Based Upon?</h2>
<h3>Java Programming Basics</h3>
<p>Java is a derivative of C as well as C++. The initial Java compiler was written in the company of Sun Microsystems and was written in C making use of some libraries of C++. Java documents are transformed into bit code format with a compiler which is run by the Java interpreter executes. Java code is executed in the Java Virtual Machine (JVM)–the runtime environment.</p>
<h2>Editions in Java</h2>
<h3>Java Programming Basics</h3>
<p>There are three versions in Java. Programmers can master one of these versions depending on the type of application they wish to create.
<br/>
Java Standard Edition – Contains core libraries, like java.lang, java.util, etc.
<br/>
Java Enterprise Edition – Includes Java APIs, like JMS, EJB, JSPs/servlets, etc.
<br/>
Java Micro Edition The edition can be used to programme Java on cell phones, set-top boxes handhelds, and other devices.
<br/>
The most popular version of Java can be described as Java SE (Standard Edition). Java SE covers the fundamentals of Java. The majority of applications need Standard Edition.</p>
<h2>Java Concept and Features</h2>
<h3>Java Programming Course</h3>
<h3>Java Concepts</h3>
<p>The fundamental principles that are fundamental to Java is it’s object-oriented programming (OOPs) characteristics. OOP helps simplify development of applications and software and maintenance through the use of concepts, such as:
<br/>
1.Object: An object is an element or entity with a status and behaviour. For instance the dog could be considered to be an object that has the colour, breed, and even a name. It can also be identified by its behaviour, such as eating and barking.
<br/>
2.Class The term “class” refers to a set of many objects. It’s a blueprint that could be utilized to build any number of objects you’d like. The classes are utilized to arrange codeine the same way that vegetables, fruits and medical products are separated into various sections of the supermarket.
<br/>
3.Constructor Constructor could appear as a method, but it’s not a method. The name of the constructor is the identical to the class name but it does not provide any value.
<br/>
4.Inheritance Inheritance is the idea that a class inherits the characteristics and behaviours of its parent class.
<br/>
5.Polymorphism Polymorphism refers to the method of performing the same task in various ways. Programmers can make use of the same term to refer to different terms in various situations.
<br/>
6.Abstraction Abstraction in Java can be utilized to hide internal information and display only the important information.
<br/>
7.Encapsulation: The process of binding or wrapping data and code together to form an entire unit (like capsules) is called Encapsulation. The Java Class is an illustration of Encapsulation.</p>
<br/>
<h3>Java Features</h3>
<p>Java is a great language with many qualities and features, such as:</p>
<ul>  <li>The simple syntax is extremely easy to comprehend and master</li>
  <li>Java language is extremely robust.</li>
  <li>Eliminates mistakes that can occur when using C and C++ languages. C or C++ languages</li>
  <li>Java is comprised of features like garbage collectors and handling of exceptions</li>
  <li>Since it is a portable language Java can be used on any platform</li>
  <li>Java is safe and is able to perform multitasking</li>
  <li>Java isn’t as efficient as C or C++ however, it is more efficient than other languages.</li></ul>
<p>After having talked about the various features of Java Let’s look at the various parts in this Java programming language.</p>
<h3>Components of Java</h3>

<p>There are three primary elements in Java, the Java programming language, which includes:
<br/>
JVM – JVM is the Java Virtual Machine or JVM is an independent platform Java component that offers an environment to run Java programs. Therefore, JVM loads the code and validates the code. Then, it executes the program, and then provides an environment for running.
<br/>
JRE – It is the Java Runtime Environment or JRE creates an environment where the Java files can be executed and run. It is a program that includes JVM as well as Java class libraries, as well as Java Class Loader.
<br/>
JDK- It is the Java Development Kit also known as JDK is a subset that is a subset of JRE and is an application development environment that allows you to create Java Applets and applications. The JDK comes with an exclusive JVM as well as a number of other tools to complete the creation of the Java application. </p>
<h3>Java OOPs Concepts</h3>
<p>There are four main concepts of object-oriented programming (OOP), including:

Abstraction – Abstraction is the process of displaying relevant information and hiding the details that are internal or behind the scenes. In the following example to allow a student be admitted to a college, the information required will be name address, address, parents name as well as high school marks. Particulars like favorite foods, sports or even movies aren’t relevant.
Encapsulation – It is the same as capsules. The entire source code as well as the entire information are bundled into one single unit. All variables and methods are stored under the same classification name. only the identical class object can be used by it.
Polymorphism- Polymorphism refers to the fact that a particular task can be accomplished in different ways. One function can be utilized to accomplish different tasks. In the case below Method Draw() is a function that can be utilized at various places to draw various shapes, such as a rectangle, triangle or a circle.
Inheritance – If a class inherits characteristics and attributes from other classes, this is called inheritance. There’s always a superclass as well as subclass. Subclasses inherit attributes of the superclass. In the following example the animal is a superclass that includes attributes like eating() as well as sleep(). Subclasses of reptile, mammal and human have these attributes.</p>
<h3>How to Learn Java?</h3>
<p>Java is among the most popular programming languages, mostly because Java is extremely flexible as well as reliable and compatible. It’s also the most sought-after capability to have if would like to pursue your career in programming. Here are some helpful tips to help you get started:

Learn the fundamentals to learn the basics of Java programming (variables data types, variables arrays, conditional statements loops, functions)

Go through a book on Java Programming to understand the fundamental concepts

Explore the advanced subjects (object-oriented programming inheritance, abstract class, Java interface collections abstract classes, extraordinary handling, advance java syllabus and wrapper classes)

Coding regularly is a good way to be able how to improve your skills

Find new articles and documents on Java to keep current

Developers are often faced with at the beginning of their careers: Do I require a Java certification?

Some employers do value certifications a lot. A certification can allow you to advance in your career and make more money.

Java experts gain knowledge working on projects in different industries. They learn about the requirements of various sectors and how they interact with developers. However employers may value their employees more when they hold the Java certification since it can add value to the business.

There are four kinds of certification levels that are described in Oracle’s Java certification pathway:</p>
<ul>
  

  <li>Oracle Certified Associate (OCA)</li>
  <li>Oracle Certified Professional (OCP)</li>
  <li>Oracle Certified Expert (OCE)</li>
  <li>Oracle Certified Master (OCM)</li>
</ul>
<h2>Conclusion</h2>
<p>Almost everything we use in our day-to-day life is now connected to Java. Java programming language continues to be one of the top technologies in the industries, and the job demand is significantly high. Are you eager to receive best java training in Kukatpally  You are in the right place. V CUBE is a Best Software Training Company in Hyderabad that offers the best software training. You might wonder why you have to choose V CUBE for java course in hyderabad while there are so many institutes first let us brief you about our Software Training institute which is located is Kphb, Hyderabad. V CUBE is one of the best java training institutes in Hyderabad we provide specialized in Various Software Courses along with Java and java full stack developer.</p>


    </div>
  </div>
)}>
  <FontAwesomeIcon icon={faEye} />
</button>
            <button className="option" onClick={() => handleDownloadClick('pdf1.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
          </div>
        </div>
      </div>


      <div className='ser2'>
      <div className="service2">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view2'><img/></div>
            <div>
            <h1>PYTHON</h1>
            <p>Python: Python Training  is a  programming language can be used for a variety of tasks. It is a great language for beginners because of its readability and other auxiliary components designed to make it simple. However, it is not limited to essential usage. It is in charge of some of the most complex applications and websites on the planet. it is a relatively old programming language that was created and developed by Guido Van Rossum in 1989. </p>
            <h2>COURSE STRUCTURE</h2>

            <h3><strong>Python Basics</strong></h3>
    <ul>
        <li>What is Python</li>
        <li>Why Python?</li>
        <li>History of python</li>
        <li>Applications of Python</li>
        <li>Features of Python</li>
        <li>Advantages of Python</li>
        <li>Versions of Python</li>
        <li>Installation of Python</li>
        <li>Flavours of Python</li>
        <li>Comparison b/w various programming languages C, Java and</li>
        <li>Python</li>
    </ul>
    <h3><strong>Python Operations</strong></h3>
    <ul>
        <li>Python Modes of Execution</li>
        <li>Interactive mode of Execution</li>
        <li>Batch mode of Execution</li>
        <li>Python Editors and IDEs</li>
        <li>Python Data Types</li>
        <li>Python Constants</li>
        <li>Python Variables</li>
        <li>Comments in python</li>
        <li>Output Print (), function</li>
        <li>Input () Function: Accepting input</li>
        <li>Type Conversion</li>
        <li>Type (), Id () Functions</li>
        <li>Comments in Python</li>
        <li>Escape Sequences in Python</li>
        <li>Strings in Python</li>
        <li>String indexing and slicing</li>
    </ul>
    <h3><strong>Operators in python</strong></h3>
    <ul>
        <li>Arithmetic Operators</li>
        <li>Relational Operators</li>
        <li>Logical Operators</li>
        <li>Assignment Operators</li>
        <li>Bitwise Operators</li>
        <li>Membership Operators</li>
        <li>Identity Operators</li>
    </ul>
    <h3><strong>Flow Control statements</strong></h3>
    <ul>
        <li>Block/clause</li>
        <li>Indentation in Python</li>
        <li>Conditional Statements</li>
        <li>– if statement</li>
        <li>– if…else statement</li>
        <li>– if…elif…statement</li>
        <li>Looping Statements</li>
        <li>– while loop,</li>
        <li>– while … else,</li>
        <li>– Infinite while</li>
        <li>– Nested while</li>
        <li>– for loop</li>
        <li>– Range () in for loop</li>
        <li>– Nested for loop</li>
        <li>– Break statement</li>
        <li>– Continue statement</li>
        <li>– Pass statement</li>
    </ul>
    <h3><strong>Strings in Python</strong></h3>
    <ul>
        <li>Creating Strings</li>
        <li>String indexing</li>
        <li>String slicing</li>
        <li>String Concatenation</li>
        <li>String Comparison</li>
        <li>String splitting and joining</li>
        <li>Finding Sub Strings</li>
        <li>String Case Change</li>
        <li>Split strings</li>
        <li>String methods</li>
    </ul>
    <h3><strong>Collections in Python</strong></h3>
    <ul>
        <li>Introduction</li>
        <li>Lists</li>
        <li>Tuples</li>
        <li>Sets</li>
        <li>Dictionaries</li>
        <li>Operations on collections</li>
        <li>Functions for collections</li>
        <li>Nested collections</li>
        <li>Differences b/w list tuple and set and Dictionary</li>
    </ul>
    <h3><strong>Python Lists</strong></h3>
    <ul>
        <li>List properties</li>
        <li>List Creation</li>
        <li>List indexing and slicing</li>
        <li>List Operations</li>
        <li>Nested Lists</li>
        <li>List modification</li>
        <li>List insertion and deletion</li>
    </ul>
    <h3><strong>Python Tuples</strong></h3>
    <ul>
        <li>Tuple properties</li>
        <li>Tuple Creation</li>
        <li>Tuple indexing and slicing</li>
        <li>Tuple Operations</li>
        <li>Nested Tuples</li>
        <li>Tuple Methods</li>
        <li>Differences b/w List and Tuple</li>
    </ul>
    <h3><strong>Python Sets</strong></h3>
    <ul>
        <li>Set properties</li>
        <li>Set Creation</li>
        <li>Set Operations</li>
        <li>Set Mathematical Operations</li>
        <li>Set Methods</li>
        <li>Insertion and Deletion operation</li>
    </ul>
    <h3><strong>Python Dictionary</strong></h3>
    <ul>
        <li>Dictionary properties</li>
        <li>Dictionary Creation</li>
        <li>Dictionary Operations</li>
        <li>Dictionary Methods</li>
        <li>Insertion and Deletion of elements</li>
        <li>Differences b/w list tuple and set and Dictionary</li>
    </ul>
    <h3><strong>Functions in Python</strong></h3>
    <ul>
        <li>Defining a function</li>
        <li>Calling a function</li>
        <li>Properties of Function</li>
        <li>Examples of Functions</li>
        <li>Function with Parameters</li>
        <li>Function with Return type</li>
        <li>Argument types</li>
        <li>Variable Length Arguments</li>
        <li>Returning Values</li>
        <li>Variable’s scope</li>
        <li>Call by value</li>
        <li>Call by reference</li>
        <li>Passing collections to function</li>
        <li>Local and Global variables</li>
        <li>Recursive Function</li>
        <li>Boolean Function</li>
        <li>Passing functions to function</li>
        <li>Anonymous or Lambda function</li>
        <li>Filter () and map () functions</li>
    </ul>
    <h3><strong>Modules in Python</strong></h3>
    <ul>
        <li>What is a module?</li>
        <li>Different types of modules</li>
        <li>Creating user defined module</li>
        <li>Setting path</li>
        <li>The import statements</li>
        <li>Module search path</li>
        <li>Normal Import</li>
        <li>From … Import</li>
        <li>Module Aliases</li>
        <li>Dir function</li>
        <li>Working with Standard Modules</li>
    </ul>
    <h3><strong>Packages</strong></h3>
    <ul>
        <li>Introduction to packages</li>
        <li>Defining packages</li>
        <li>Importing from packages</li>
        <li>Defining sub packages</li>
        <li>Importing from sub packages</li>
    </ul>
    <h3><strong>Errors and Exception</strong>&nbsp;</h3>
    <ul>
        <li>Handling</li>
        <li>Compile-Time Errors</li>
        <li>Run-Time Errors</li>
        <li>What is Exception?</li>
        <li>Need of Exception handling</li>
        <li>Predefined Exceptions</li>
        <li>Try, Except, finally blocks</li>
        <li>Handling Multiple Exceptions</li>
        <li>User defined Exceptions</li>
        <li>Raise statement</li>
    </ul>
    <h3><strong>File Handling</strong></h3>
    <ul>
        <li>Opening a file</li>
        <li>Closing a file</li>
        <li>Writing data to files</li>
        <li>Tell () and seek () methods</li>
        <li>Reading a data from files</li>
        <li>Various functions</li>
    </ul>
    <h3><strong>Regular Expressions</strong></h3>
    <ul>
        <li>What is regular expression? Special characters</li>
        <li>Forming regular expression</li>
        <li>Compiling regular expressions</li>
        <li>Grouping</li>
        <li>Match () function</li>
        <li>Search () function</li>
        <li>Matching vs searching</li>
        <li>Splitting a string</li>
        <li>Replacing text</li>
    </ul>
    <h3><strong>Oops concepts</strong></h3>
    <ul>
        <li>Oops Features</li>
        <li>Encapsulation</li>
        <li>Abstraction</li>
        <li>Class</li>
        <li>Object</li>
        <li>Static and non</li>
        <li>-static variables</li>
        <li>Defining methods</li>
        <li>Diff b/w functions &amp; methods</li>
        <li>Inheritance</li>
        <li>Types of Inheritances</li>
        <li>Polymorphism</li>
        <li>Over riding</li>
        <li>Constructors</li>
        <li>Destructors</li>
        <li>Object Reference count</li>
        <li>Garbage Collection</li>
        <li>Super () statement</li>
    </ul>
    <h3><strong>Advanced concepts</strong></h3>
    <ul>
        <li>Python Iterator</li>
        <li>Python Generator</li>
        <li>Python closure</li>
        <li>Python Decorators</li>
        <li>Web Scraping</li>
        <li>PIP</li>
        <li>Working with CSV files</li>
        <li>Working with XML files</li>
        <li>Working with JSON files</li>
        <li>Debugging</li>
    </ul>
    <h3><strong>Multi-Threading</strong></h3>
    <ul>
        <li>Defining a thread</li>
        <li>Starting a thread</li>
        <li>Threading module</li>
        <li>Threads synchronization</li>
        <li>Locking a Thread</li>
        <li>Communication b/w Threads</li>
        <li>Multithreaded priority queue</li>
    </ul>
    <h3><strong>GUI Programming</strong></h3>
    <ul>
        <li>Introduction</li>
        <li>Components and events</li>
        <li>Root window</li>
        <li>Fonts and colours</li>
        <li>Buttons</li>
        <li>, checkbox</li>
        <li>Label widget</li>
        <li>Message widget</li>
        <li>Text widget</li>
        <li>Image</li>
    </ul>
    <h3><strong>Database Concepts</strong></h3>
    <ul>
        <li>Introduction</li>
        <li>Installing Oracle database</li>
        <li>Creating database users,</li>
        <li>Installing Oracle Python modules</li>
        <li>Establishing connection with oracle</li>
        <li>Closing database connections</li>
        <li>Cursor object</li>
        <li>Executing SQL queries</li>
        <li>Retrieving data from Database.</li>
        <li>Using bind variables executing</li>
        <li>SQL queries</li>
        <li>Transaction Management</li>
        <li>Handling errors</li>
    </ul>
    <h3><strong>Python Date and Time</strong></h3>
    <ul>
        <li>How to Use Date &amp; Date Time Class</li>
        <li>Time and date Objects</li>
        <li>Calendar in Python</li>
        <li>The Time Module</li>
    </ul>
    <h3><strong>Operating System Module</strong></h3>
    <ul>
        <li>Introduction</li>
        <li>getcwd</li>
        <li>listdir</li>
        <li>chdir</li>
        <li>mkdir</li>
        <li>rename file/dir</li>
        <li>remove file/dir</li>
        <li>Os help</li>
        <li>Os operations</li>
    </ul>


            <h2>Beginners python training in Hyderabad</h2>
            <h3>Python Course in Hyderabad</h3>
            <p>The trouble-free, easy-to-learn sentence style of Python training in Hyderabad stresses readability, which saves software maintenance costs. Modules and packages are supported in the Python course in Hyderabad, encouraging curricular modularity and code reuse.
<br/>
This Python programming course will introduce you to the fascinating area of Big Data Analytics and Data Science. Students with little or no programming experience will be taught these two simple yet powerful languages over the course of two months. Python’s simplicity and flexibility will appeal to our students as they construct algorithms for Data Mining, Machine Learning, Neural Networks, and Predictive Modeling. Students will learn how to code for Website Development, Mobile App Development, Software Development, Data Analytics, Artificial Intelligence, and Machine Learning through hands-on experience throughout the programme.</p>
           <h2>WHY YOU SHOULD GET PYTHON TRAINING FROM V CUBE?</h2>
           <h3>Python Coaching Hyderabad</h3>
           <p>Python is a The finest Python certification training from V CUBE  is a complete approach to learning Python. Through real-world hands-on projects, you’ll learn how to use the top programming language for various parts of Big Data, Machine Learning, Artificial Intelligence,data analytics .popular high-level, open source programming language with many uses in automation, data science, game development and web application development. It’s an object-oriented, interpreted language that’s both flexible and powerful. Python is thought to be the programming language with the most career chances. Python has been dubbed “the next big thing” by researchers since it is favoured by many new and experienced developers and is a highly compensated expertise among all programming languages used in the IT industry. V Cube Software Solutions is one of the major software training institutes in Hyderabad. We offer both online and offline software training. Python Training in kphb  is one of our specialties. We put forth our best efforts to bring out the best skills from our students by providing placement assistance, job-oriented training, Real Time Live Projects, Mock Interviews, and many other services. During the python course, which is included in certification, students are required to work on a one-on-one Real Time Live Project, and the classroom is limited to only 6-7 students.As a result, we’ll be able to focus on each individual student, analyse their abilities, and provide guidance. Our Python Academy trainers have 8+ years of experience and also provide career counselling programmes during the course. We guarantee that our Python Training Institute in Hyderabad will provide you with the highest level of satisfaction at the end of the course, and that you will leave with confidence and hands-on experience. Join us now for Python Training in KPHB.</p>
           <h2>General Questions and Doubts</h2>
           <p>Who can Learn Python?
<br/>
If they work hard  Enough anyone can Learn Python It is one of the easiest Programming Language, You can understand the code easily as it is mostly comprised of basic english. Your code in python can be of fewer lines compared to other programming languages.so it is easy to learn python  but becoming a python Developer takes a lot of Patience and Hard work
<br/>
Can a non-Technical Backround Person Learn Python?
<br/>
Absolutely any Graduate Can Learn Python Despite of his Educational Backround 
<br/>
What are the Salary Trends for Python?
<br/>
The average salary of entry-level Python developer salary in India is ₹427,293. The average salary of a mid-level Python developer salary in India is ₹909,818. The average salary of an experienced Python developer salary in India is ₹1,150,000.
<br/>
Which top companies are hiring python professionals?
<br/>
Many big organisations are hiring Python professionals, including TCS, Mu Sigma, Ericsson, Sony, Cisco, Saint-Gobain, and many others. You can simply get hired in top companies if you use our placement aid.
<br/>
What if I’m unable to attend a class?
<br/>
You can join any of V CUBE live batches, or we will provide you with backup classes 
<br/>
What are the Python trainining in hyderabad Pre-requisites
<br/>
There are no strict requirements. It is sufficient to have a basic comprehension of computer programming terms. Basic programming and database principles are also beneficial, but not required.
<br/>
Does V CUBE Provide Placement Assistance?
<br/>
We will assist you with all aspects of your job search. We help students prepare their resumes and perform practise interviews. We also send their resumes to recruiters with whom we have a long-standing relationship.
<br/>
What are the Benefits of Python?
<br/>
Python’s advantages include open source and community development, a large library of support libraries, ease of learning and support, user-friendly data structures, productivity, and speed.</p>
<br/>

<h2>What is Python?</h2>
<h3>Top 10 Python Training Institute in Hyderabad</h3>
<p>Python is a programming language used to create software and websites to automate tasks and perform analyses of data. Python is a general-purpose language, which means it can build various applications and isn’t designed for particular problems. This versatility, along with its beginner-friendliness, has made it one of the most-used programming languages today. A study conducted by RedMonk, an analyst firm for industry RedMonk, discovered that this was among the top used programming languages for programmers in 2020.</p>
           
<h2>History of Python</h2>
<h3>Python Training in Hyderabad With Placement</h3>
<p>When we discuss the background of Python, it is impossible to miss ABC programming language since it was ABC’s influence that led to the creation and development of a programming language, which is now known as Python.

At the beginning of the 1980s, Van Rossum used to be employed at CWI(Centrum for Wiskunde en Informatica) as an implementer of the programming language known as ABC. Then, at CWI in the latter part of the 1980s, when working on a distributed operating system called AMOEBA, Van Rossum started searching for an underlying scripting language that had a syntax similar to ABC but with access to the Amoeba call system. Thus, Van Rossum himself started designing an easy scripting language that could fix the weaknesses of ABC.</p>
<h2>Uses of Python</h2>
           <h3>Python Fullstack Developer Course in Hyderabad</h3>
           <p>Artificial Intelligence and Machine Learning
            <br/>
Artificial machine learning and artificial intelligence are buzzwords in recent times, but the truth is that it all boils down to algorithms, code and logic. With the capabilities and range of Python is no surprise that top-quality programs are in place to create intelligent behaviour in Python.
<br/>
The most well-known is the machine-learning library, Scikit-Learn. , it helps build everything from regression models to classifiers order of magnitude more straight forward than usual.
<br/>
When neural networks sound more than your thing, you can always use TensorFlow. By incorporating the latest Keras API, building a modern, high-end neural network is now more straightforward than it’s ever been.
<br/>
Business Applications 
<br/>
Business Applications are distinct from typical applications for areas like e-commerce, ERP and numerous others. They require software that is flexible, scalable and easy to understand. Python offers all of these capabilities. Platforms like Tryton can be used to build the kinds of applications that businesses require.
<br/>
Data Science
<br/>
Data science involves collecting and sorting data and data analysis and visualization of data. Python has many features to deal with statistics and complicated mathematical calculations. The inclusion of libraries in the Python library makes it easier for professionals working in data science. Some of the most well-known libraries that facilitate the data science process include TensorFlow, Pandas, and Socket Learning. These libraries create an environment to refine the data model, preprocess, and perform sophisticated data analysis.</p>
<br/>
<h2>How long does it take to learn Python?</h2>
<h3>Python Coaching Centers in Hyderabad</h3>
<p>Python is a relatively easy programming language when compared to other programming languages. Therefore, it’s feasible to master the basics in only several weeks. Most of our classes, such as Starting with Python, will take between 6 and 8 weeks to complete with just the equivalent of a few hours of training needed each week.

If you’re seeking a more in-depth investigation, there are options to choose from. For instance, our Deep Learning and Python programming Expert Track program take approximately 18 weeks of study to finish, including 5-6 hours of studying required each week. Get Python Training in kukatpally for more  Details Fill the Below form our Team will Assist you in 24hrs</p>
<h2>What is the Future of the Python?</h2>
<h3>Python Institute in Hyderabad</h3>
<p>According to the most recent research, the future ( at least in the next few years) will consist of Artificial Intelligence and Machine Learning. Python is an increasingly popular programming language every day because of its simplicity and the flexibility it offers to work in different areas of programming.
<br />What are the ways these two aspects can be related? Based on the factors discussed, Python is considered one of the top tools to create a project in AI or Machine Learning ( although other languages are also employed for this). Therefore, Python is the ideal ingredient for the dessert.
<br/>If you are aware of the most effective ingredient, why shouldn’t you use it soon? That’s why Python has a bright future in a world in which AI and ML research is taking leaps in their development each day.Furthermore, Python is becoming the most popular programming language within Data Science. Python is the first language in the table based on the interactive list of most popular languages. C, Java, & C++ get the second place. The Hacker Rank survey provides the same information. The survey states Python is the most popular programming language used by all developers, regardless of age. This is why many students seek to master Python using the best Python tutorial. There are a variety of frameworks and library tools designed specifically for Artificial Intelligence and Big Data. WHAT ARE YOU WAITING FOR!?</p>
<br/>
<h2>Description of the PYTHON</h2>
<h3>Python Fullstack Course in Hyderabad</h3>
<h3>Why PYTHON is so popular ?</h3>
<p>V CUBE SOFTWARE SOLUTIONS Python training in Hyderabad assists students in gaining Knowledge. With the clear understanding skill set in every module. Aspirants will gain both fundamental and theoretical knowledge of python course in the Python Institute . It makes it easier to face real world big challenges. The Best python Institute  in Hyderabad will be delivered by trainer with extensive knowledge. To broaden subject knowledge and skill set in a trending field. Following the completion of training in Hyderabad. V CUBE SOFTWARE SOLUTIONS Training institute will provide aspirants with globally recognized certification. Lab facilities with cutting-edge infrastructure are available. To gain practical knowledge in order to increase revenue by providing the most optimised solution. Real-Time Project oriented the training in Hyderabad is guaranteed. To Obtain all the information about customised financial instruments for future analysis.</p>
<h2>Objectives of the Course</h2>
           <p> To comprehend Python’s principles and constructs
<br/>Create your own Python applications, study Python’s machine learning algorithms, and work on a real-time Python project</p>
<br/>
<h2>Who should participate in the course?</h2>           
<p>♦ Experts in Big Data
<br/>♦ Developers of Information Technology
<br/>♦ Those who are interested in pursuing a career in Python are Eligible to get Python Training in hyderabad </p>

           
            </div>
          </div>

          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf2.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser3'>
      <div className="service3">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view3'><img/></div>
            <div>
            <h1>REACT JS</h1>
            <p>React may be a declarative, efficient, and versatile JavaScript library for building Web Applications. It follows a component-based approach. Easy to make smaller components and build large-scale applications. the foremost goal is to make large-scale high-performance applications with smaller and reusable stateful components. React makes it painless to form interactive UIs. V cube software solutions offers React Js Training in Kukatpally, Hyderabad.
<br/>
Duration : 45days</p>
            <h2>COURSE STRUCTURE</h2>
            <h2>Why REACT JS is so popular?</h2>
<h3>Best React JS Training in hyderabad</h3>
<p>In the field of web development, React Js is the most popular front-end JavaScript library. It is used by both large, established businesses and new businesses (Netflix, Airbnb, Instagram, and the New York Times, to name a few). React has many advantages over other frameworks like Angular.js, making it a better choice.

This article will give you an introduction to What is React and all of React’s fundamentals if you’re new to React JS or just want to brush up on the basics.</p>
<h2>What is React Js used for?</h2>
<h3>Best Institute For React JS in Hyderabad</h3>
<p>React.js is an open-source JavaScript package that is used to create single-page apps’ user interfaces. For web and mobile apps, it’s utilised to manage the view layer. We can also make reusable UI components with React. Jordan Walke, a Facebook software engineer, was the first to create React. In 2011, React was launched on Facebook’s newsfeed, followed by Instagram.com in 2012.Developers may use React to build massive web applications that can alter data without reloading the page. React’s major goal is to be quick, scalable, and easy to use. It only works on the application’s user interfaces. This relates to the MVC template’s view. It can be combined with other JavaScript libraries or frameworks, such as Angular JS in MVC applications. React JS is often known as React js or simply React.</p>
<h2>Why Learn React JS Training with V CUBE Software Solutions?</h2>
<p>First let us brief  you about our  Software Training institute which is Located is kukatpally, Hyderabad.  V CUBE is one of the Leading Software Training Institutes we Specialized in Various Software Courses along with React JS, We almost Trained 500 Students  around  300 of Them Get Placed in Top MNC companies  We assist candidates in achieving their dream job via the use of a tech career and practical programming and IT skills. Our instructors have a combined experience of more than 15 years. We make sure that students obtain real-world experience by having our trainers work in top MNC firms, providing job-oriented training, career guidance programs, and requiring students to work on two real-world projects to gain hands-on experience. The major purpose of this training is to give users with a working knowledge of utilizing Power BI to explore and analyze information, as well as to create simple visualizations for dashboards using the capabilities offered by the Power BI platform  We Provide React JS Training in Hyderabad  for online and Offline the Fees may Fluctuate   Between Online and Offline but we make sure every  students get Best Training Possible as the classroom contains only Limited Students the Trainers are Able  to concentrate on every Student’s Performance  and analyze them, guide them Individually. Join React JS Training in KPHB  now and Upgrade your Skills We offer online React JS training course in Hyderabad.</p>
<h2>What are the career opportunities for React JS course?</h2>
<p>React.js is one of the most demanding frameworks in the market; 31.3% of worldwide specialists are currently utilizing this technology.  Some of the world’s top tech teams use the tool to design scalable, easy-to-maintain solutions — Netflix, PayPal, eBay, Airbnb, and more. Why are businesses so interested in React.js implementation? Here are the benefits of adopting the framework :</p>
<ul>
  <li>Increased app development speed. The framework accepts HTML code input and has excellent subcomponent rendering support. Development teams can benefit from JSX as well — it’s an extension with a range of shortcuts that cuts the amount of code writing time.</li>
  <li>Improved code stability. React.js reduces the impact of change in the code file since the changes in parent components don’t affect the children. Such a data binding approach facilitates software testing and helps ensure stable app performance after update deployments.</li>
  <li>SEO-friendliness. React.js deals with the inability of search engine crawlers to process JS-heavy pages. Even a beginner with an entry-level react developer salary can deploy React on a server and use the virtual DOM to view the code as a regular web page in a browser.</li>
  <li>Robust toolkit. React.js has a wide range of debugging and interface design tools.</li>
  <li>Strong user community and an affordable remote react developer salary. Since a large number of teams are deploying the framework, the tool is regularly updated. There’s no shortage of user-generated content either — you can find dozens of helpful React tutorials and case studies to make the most out of the framework.   </li>
</ul>
<h2>What is the salary range for React JS?
</h2>
<p>The benefit of React JS is that its components are quick, reusable, and adaptable. According to a recent poll, React JS is one of the most well-known and in-demand web frameworks available. However, the most noticeable feature that distinguishes React is its simplicity, which allows developers to quickly design complicated apps. React Js is among the most popular frameworks on the market; as of 2021, it is used by 31.3% of all developers worldwide. Netflix, PayPal, eBay, Airbnb, and other leading IT companies use this JavaScript library to develop scalable and easy-to-maintain systems.JS developer can earn around INR 400,000 per annum with less than one year of experience. Early level React. JS developer with 1 to 4 years experience get around INR 540,000 per annum. A mid-level web developer with 5 to 6 years experience earns INR 1,300,000 per annum in India. Join our React Js training in Hyderabad.</p>


            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          
        </div>
      </div>
      </div>


      <div className='ser4'>
      <div className="service4">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view4'><img/></div>
           <div>
           <h1>POWER BI</h1>
<p>POWER BI course: Microsoft’s Power BI is a business investigation administration. It intends to provide intuitive visualisations and business intelligence capabilities using an interface that is simple enough for end users to create their own reports and dashboards. V Cube Software Solutions is one of the top organizations in Hyderabad for Power BI Training. Get you Power BI Training in kukatpally Now
<br/>
Duration: 45 days </p>        
   <h2>COURSE STRUCTURE</h2>
   <h3><strong>Power BI Complete Introduction</strong></h3>
            <ul>
                <li>Power BI Introduction, Brief History of Power BI, Data, Data Visualization, Reporting, Business Intelligence (BI), Traditional BI, Self-Serviced BI, Cloud Based BI, On Premise BI.</li>
                <li>Power BI Report Server, Power BI Service, Power BI Mobile, Paginated Reports</li>
                <li>Flow of Work in Power BI / Power BI Architecture</li>
                <li>Power BI Desktop Installation and Hands on practice</li>
            </ul>
            <h3>PBI Desktop & Power View Overview</h3>
            <ul>
                <li>Power BI Desktop Components (Power Query, Power Pivot, Power View, Power Map, Q&A, Data Gateway)</li>
                <li>Building Blocks of Power BI (Fields, Filters, Visualizations, Reports, Data, Model Dashboards and Tiles)</li>
                <li>Data Connectivity Modes (Import, Direct, Live & Composite Models)</li>
                <li>Get Data Connecting Multiple source and represent the data</li>
                <li>Overview of default and Custom visualizations</li>
                <li>Power BI Desktop User Interface.</li>
                <li>Fields Pane, Visualizations pane, Ribbon, Views, Pages Tab, Canvas, Visual Edit Interactions, Sync Slicer,</li>
                <li>Selection Pane, Buttons, Book Marks, Conditional formatting.</li>
            </ul>
            <h3>Power Query Editor \ Transform Editor</h3>
            <h3>Introduction to Power Query – Extract, Transform and Load (ETL)</h3>
            <ul>
                <li>The Queries Pane, The Data View / Results Pane, The Query Settings Pane, Formula Bar, Advanced Editor –</li>
                <li>Complete ETL Code.</li>
                <li>Overview of Power Query / Transform Editor</li>
                <li>Data types, Changing the Data type of a Column</li>
                <li>Filters in Power Query, Auto Filter / Basic Filtering, Filter a Column using Text Filters</li>
                <li>Filter a Columns using Number, Date and Text</li>
            </ul>
            <h3>Inbuilt Column Transformations</h3>
            <ul>
                <li>Remove Columns / Remove Other Columns, Name / Rename a Column, Reorder Columns or Sort</li>
                <li>Columns, Add Column / Custom Column, Split Columns, Merge Columns, PIVOT, UNPIVOT Columns,</li>
                <li>Transpose Columns, Invoke functions</li>
            </ul>
            <h3>In built Row Transformations</h3>
            <ul>
                <li>Header Row or Use First Row as Headers, Keep Top Rows, Keep Bottom Rows, Keep Range of Rows, Keep</li>
                <li>Duplicates, Keep Errors, Remove Top Rows, Remove Bottom Rows, Remove Alternative Rows, Remove</li>
                <li>Duplicates, Remove Blank Rows, Remove Errors, Group Rows / Group By</li>
            </ul>
            <h3>Combine Queries (Append Queries & Merge Queries)</h3>
            <ul>
                <li>Append Queries, Append Queries as New, Append 2 or more files individually with different queries,</li>
                <li>Appending multiple files of same type from a folder using single query, Query Options ,Copy Query, Paste</li>
                <li>Query, Delete Query, Rename Query, Enable Load, Include in report Refresh ,Duplicate Query, Reference</li>
                <li>Query, Move to Group, Move Up, Move Down</li>
            </ul>
            <h3>Merge Queries / Join Queries</h3>
            <ul>
                <li>Merge Queries, Merge Queries as New, Default Types of Joins / Join Kinds / Merge Type, Left Outer (all</li>
                <li>from first, matching from second), Right Outer (all from second, matching from first), Full Outer (all rows</li>
                <li>from both), Inner (only matching rows), Left Anti (rows only in first), Right Anti (rows only in second).</li>
            </ul>
            <h3>Grouping, Binning & Sorting</h3>
            <ul>
                <li>Grouping and Binning Introduction, Using grouping, Creating Groups on Text Columns, Using binning,</li>
                <li>Creating Bins on Number Column and Date Columns, Sorting Data in Visuals, Changing the Sort Column,</li>
                <li>Sort Order, Sort using column that is not used in the Visualization, Sort using the Sort by Column button.</li>
            </ul>
            <h3>Power Pivot (DAX)</h3>
            <h3>Power BI Data Modeling – Relationship View</h3>
            <ul>
                <li>Data Modeling Introduction</li>
                <li>Relationship, Need of Relationship</li>
                <li>Relationship Types / Cardinality in General</li>
                <li>One-to-One, One-to-Many (or Many-to-One)</li>
                <li>Many-to-Many</li>
                <li>AutoDetect the relationship, Create a new relationship, Edit existing relationships</li>
                <li>Make Relationship Active or Inactive</li>
                <li>Delete a relationship</li>
                <li>Cross filter direction (Single, Both), ♦Assume Referential Integrity</li>
            </ul>
            <h3>Enhancing the Data Model – DAX</h3>
            <ul>
                <li>Introduction of DAX, Calculated Columns, Measures, Example of Creating Calculated Columns, Creating</li>
                <li>Measures and Calculated Tables, Implicit Vs Explicit Measures, Row Filter vs. Context filters, DAX</li>
                <li>Operators, Types of Operators, Arithmetic Operators, Comparison Operators, Text Concatenation</li>
                <li>Operator, Logical Operators.</li>
            </ul>
            <h3>DAX Functions Categories</h3>
            <ul>
                <li>Date and Time Functions</li>
                <li>Text Functions</li>
                <li>Logical Functions</li>
                <li>Aggregate Functions</li>
                <li>Filter Functions</li>
                <li>Information Functions</li>
                <li>Relationship Functions</li>
                <li>Time Intelligence Functions</li>
                <li>Table Manipulation Functions</li>
            </ul>
            <h3>Date & Time Functions</h3>
            <ul>
                <li>YEAR, MONTH, DAY, WEEKDAY, WEEKNUM, FORMAT (Text Function) a Month Name, Weekday Name</li>
                <li>DATE, TODAY, NOW, HOUR, MINUTE, SECOND, TIME, DATEDIFF, CALENDAR, Calendar Auto, Creating Dimension Table</li>
            </ul>
            <h3>Text Functions</h3>
            <ul>
                <li>COMBINEVALUES, CONCATENATE, CONCATENATEX, EXACT, FIND, FORMAT, LEFT, LEN, LOWER, REPLACE, RIGHT</li>
                <li>SEARCH, SUBSTITUTE, TRIM, UPPER, VALUE</li>
            </ul>
            <h3>Aggregate Functions</h3>
            <ul>
                <li>AVERAGE, AVERAGEA, AVERAGEX, COUNT, COUNTA, COUNTAX, COUNTBLANK, COUNTROWS, COUNTX,</li>
                <li>DISTINCTCOUNT, DISTINCTCOUNTNOBLANK, MAX, MAXA, MAXX, MIN, MINA, MINX, SUM, SUMX.</li>
            </ul>
            <h3>Filter Functions</h3>
            <ul>
                <li>ALL, ALL CROSS FILTERED, ALL EXCEPT, ALL SELECTED, CALCULATE, CALCULATE TABLE, EARLIER, EARLIEST,</li>
                <li>FILTER, KEEP FILTERS, LOOKUP VALUE, SELECTED VALUE</li>
            </ul>
            <h3>Information Functions</h3>
            <ul>
                <li>CONTAINS, HASONEFILTER, HASONEVALUE, ISBLANK, ISCROSSFILTERED, ISEMPTY, ISERROR, ISFILTERED,</li>
                <li>SELECTEDMEASURE, USERNAME, USEROBJECTID, USERPRINCIPALNAME.</li>
            </ul>
            <h3>Relationship Functions</h3>
            <ul>
                <li>CROSSFILTER, RELATED, RELATEDTABLE, USERELATIONSHIP</li>
            </ul>
            <h3>Time Intelligence Functions</h3>
            <ul>
                <li>CLOSINGBALANCEMONTH, CLOSINGBALANCEQUARTER, CLOSINGBALANCEYEAR, DATEADD, DATESBETWEEN,</li>
                <li>DATESINPERIOD, DATESMTD, DATESQTD, DATESYTD, ENDOFMONTH, ENDOFQUARTER, ENDOFYEAR, FIRSTDATE,</li>
                <li>FIRSTNONBLANK, LASTDATE, LASTNONBLANK, NEXTDAY, NEXTMONTH, NEXTQUARTER, NEXTYEAR, OPENINGBALANCEMONTH,</li>
                <li>OPENINGBALANCEQUARTER, OPENINGBALANCEYEAR, PARALLELPERIOD, PREVIOUSDAY, PREVIOUSMONTH, PREVIOUSQUARTER,</li>
                <li>PREVIOUSYEAR, SAMEPERIODLASTYEAR, STARTOFMONTH, STARTOFQUARTER, STARTOFYEAR, TOTALMTD, TOTALQTD, TOTALYTD</li>
            </ul>
            <h3>Table Manipulation Functions</h3>
            <ul>
                <li>ADDCOLUMNS, CROSSJOIN, DISTINCTcolumn, DISTINCTtable, EXCEPT, FILTERS, GENERATESERIES, GROUPBY,</li>
                <li>INTERSECT, NATURALINNERJOIN, NATURALLEFTOUTERJOIN, ROLLUP, ROLLUPGROUP, SELECTCOLUMNS,</li>
                <li>SUMMARIZE, SUMMARIZECOLUMNS, TOPN, UNION, VALUES</li>
            </ul>
            <h3>Power BI Service (Admin Activities)</h3>
            <ul>
                <li>Power BI Service Introduction, Power BI Cloud Architecture, Creating Power BI Service Account, SIGN IN to Power BI Service Account, Publishing Reports to the Power BI service, Import / Getting the Report to PBI Service, My Workspace / App Workspaces Tabs, DATASETS, WORKBOOKS, REPORTS, DASHBOARDS, Working with Datasets, Creating Reports in Cloud using Published Datasets, Power BI Datasets Live Connection using Desktop, Working with Workbooks, working with Reports, Sharing Reports</li>
            </ul>
            <h3>Dashboards Development

            </h3>
            <ul>
                <li>Creating Dashboards, Pin Visuals and Pin LIVE Report Pages to Dashboard, Advantages of Dashboards,</li>
                <li>Interacting with Dashboards, Adding Tiles to Dashboards, Web Content, Image, Text Box, Video,</li>
                <li>Formatting Dashboard, Sharing Dashboard</li>
            </ul>
            <h3>Data Gateways</h3>
            <ul>
                <li>Introduction to Data Gateways, Download Data Gateway , Installing a Data Gateway, Types of Gateways,</li>
                <li>On-premises Data Gateway(Standard Gateway), On-premises Data Gateway (personal mode\Private),Data</li>
                <li>Gateways work Connect to an on premise Data Source by using a Data Gateway, Manage Data Gateway,</li>
                <li>Add and Remove Administrators, Add Data Source, Add or Remove Users to a Data Source, Refresh On</li>
                <li>Premise Data, Configuring Automatic Refresh using Schedules</li>
            </ul>
            <h3>Collaboration in Power BI using App Workspace</h3>
            <ul>
                <li>Introduction to App Workspaces, Create an App Workspace, Add Members to App Workspace to</li>
                <li>Collaborate, App Workspace Roles Access, Admin, Member, Contributor, Assign Workspace to</li>
                <li>Deployment Pipelines.</li>
            </ul>
            <h3>Sharing Power BI Content using Apps and Content Packs</h3>
            <ul>
                <li>Introduction to App, Publish an App, Update a Published App, Organization, Specific individuals or group,</li>
                <li>Un publishing an App, Content Pack Introduction to App, Publish an App, Update a Published App, Organization, Specific individuals or group,Unpublishing an App, Content Pack Introduction, Create Content Pack, Sharing Content Packs, Specific Groups, My Entire Organization</li>
            </ul>
            <h3>Row Level Security in Power BI (RLS)</h3>
            <ul>
                <li>Introduction to Row Level Security, Row Level Security (RLS) with DAX Dynamic & Static, Manage Roles,</li>
                <li>Creating Roles, Testing Roles, Adding Members to Roles in Power BI Service, Dynamic Row Level Security,</li>
                <li>Creating Users Table and Adding to the Model, Capturing users using Username () or UserPrincipalName</li>
                <li>() Functions.</li>
            </ul>
            <h3>Data Flows</h3>
            <ul>
                <li>Over view of Datasets & Data Flows.</li>
            </ul>
            <h3>Report Server, Report Builder</h3>
            <ul>
                <li>Need for Report Server in PROD, Install, Configure Report Server, Report Server DB, Temp Database,</li>
                <li>Web service URL, Web portal URL, Power BI DesktopRS, Uploading Interactive Reports, Report Builder,</li>
                <li>Report Builder For Power BI Cloud, Designing Paginated Reports (RDL), Deploy to Power BI Report</li>
                <li>Server, Data Source Connections, Report, Power BI Report Server to Cloud, Tenant IDs, Mobile Report</li>
                <li>Publisher.</li>
            </ul> 


           <h2>What is Power BI?</h2>
<h3>Power BI Training in Hyderabad</h3>
<p>POWER BI is a set of applications, software services and connectors that are used to transform your disparate sources of data into consistent visual, immersive, and interactive information. The data you have may include an Excel spreadsheet or a set of hybrid cloud and on-premises data warehouses. Power BI allows you to access your information sources easily. Analyze and learn about what’s important, and then share it with anyone you wish.
<br/>
Power BI is comprised of various components that work together, beginning with the six basic components 
<br/>
Power Query: Data mashing up tool and transform tool.
<br/>Power Pivot: A tabular modelling tool for data
<br/>Power View: A Data visualization tool
<br/>Power Map is a 3D geo-spatial Data visualization tool
<br/>Power Q&A: A natural Language question and answer engine.
<br/>Power BI Desktop is a powerful development tool that can be used with Power BI.
<br/>⇒ Power Query can be described as a processing and Mashup software. It is possible to use Power Query to
<br/>
<br/>Connect to various sources for data (databases file, websites, files APIs, social media, APIs and cloud storage, etc.)
<br/>Combine and bring together data (append or join, merge, and so on.) from different places
<br/>Create new columns of data
<br/>Reduce or format the amount of data
<br/>Change the shape of data (transposing groups or pivoting, as well as un-pivoting, and other innovative methods)
<br/>Formulas can be written to allow for complex manipulations of data.
<br/>Create data that can be refreshed datasets
<br/>⇒ Power Pivot is an Excel add-in for Excel that allows you to conduct Powerful data analysis and build the Data Model, which is a set of tables with connections. One of the most impressive features in Power Pivot is an SQL Server Analysis Services engine that runs within Excel using flash memory or RAM within the system. Power Pivot lets Excel be a self-service BI platform used to execute advanced expression programming languages that analyze the model and calculate sophisticated measures.
<br/>
<br/>⇒ Power View enables interactive data exploration visualisation, presentation, and visualization that facilitates ad-hoc, intuitive reporting. Massive data sets can be examined in real-time using the flexible visualization tools in Power View. The visualizations for data are constantly changing which makes it easier to make presentation of the data in one Power View reports.
<br/>Power View is based on the Data Model in your workbook. You can either begin with an existing Data Model that is already accessible inside Power Pivot or you can build an entirely new Data Model from Power View itself. In this guide we assume you have a basic understanding of what we mean by Data Model concepts in Power Pivot. In case not, we advise that you go through this Excel Power Pivot tutorial first.
<br/>
<br/>⇒ Power Map is a 3D visualization tool for data in Excel that allows you to show temporal and geographic data visually, then analyze the data in 3D and design films to show to others using Excel. Globe Map is a custom visualization tool used within Power BI reports.
<br/>
<br/>1. Greater meaning: We see our world from a 3D perspective, so when we convert an ordinary 2D plan of our towns or mountains into a 3D map, it instantly creates a stronger connection and an understanding of perspective.
<br/>2. An additional dimension 3-D map design doesn’t only have to be based on relative heights. You can also use 3-D effects to give another dimension to your visualisations, for example, population per town. This allows you to convey the most important details in an instant.
<br/>3. They appear really elegant: Sometimes, half our battle as data analysts is around keeping people in our (or our clients’) companies to become more interested and connected to their data. 3D maps could be an effective way of achieving that ‘wow impact’ that inspires people to be interested in the data.

 
<br/>
<br/>⇒ POWER BI Q&A: Sometimes the most efficient way to get an answer from the data you have is to ask questions using natural words. Power BI Q&A is a feature that allows you to ask questions in natural language Power BI Q&A feature allows users to look at the data in your own terms. It is the most interactive methods. In most cases it is the case that one question leads to other questions as the graphs offer interesting routes to follow.
<br/>Power bi components q&a visual
<br/>The Power Bi Q&A visual is made up of four components. They are:
<br/>• The Power Bi Question box is where users can write their questions and are given suggestions on how to answer their question.
<br/>• The power bi Q&A comes with a an already-populated list of suggested questions
<br/>• Icon to transform the power bi q&a visual into the standard visual.
<br/>• Icon to open the power bi q&a tooling. This will lets the designer configure the natural language engine that runs underneath.

<br/>⇒ Power BI Desktop Microsoft Power BI Desktop is an analytics and reporting program that users can install on a PC to build dashboards and live reports. When integrated into Power BI Service, the user can also share the reports with stakeholders and decision-makers to assist them in understanding the situation of the business.
<br/>It combines all of the analytics and components together in a single. Power BI has a simple and user-friendly application that allows the most novice user to design impressive reports, models of data and customized dashboards.

<br/>In Power BI Desktop users are able to :

<br/>Connect to data
<br/>Transform and model the data
<br/>Create charts and graphs
<br/>Create reports and Dashboards that are collections of visuals
<br/>Share reports with others using the Power BI service</p>
<h2>Why Learn Power BI Training with V CUBE Software Solutions ?</h2>
<h2>Power BI Courses in Hyderabad</h2>
<p>Are you eager  to Receive Best Power BI Training in Kukapally You are in the  right Place . V CUBE  is a Best Software Training Company in Hyderabad that offers the best software training. You might wonder why you have to choose  V CUBE  for Power BI Training in Hyderabad while there are so many  institutes   First Let us brief  you about our  Software Training institute which is Located is kukapally, Hyderabad.  V CUBE is one of the Leading Software Training Institutes we Specialized in Various Software Courses along with Power BI, We almost Trained 500 Students  around  300 of Them Get Placed in Top MNC companies  We assist candidates in achieving their dream job via the use of a tech career and practical programming and IT skills. Our instructors have a combined experience of more than 15 years. We make sure that students obtain real-world experience by having our trainers work in top mnc firms, providing job-oriented training, career guidance programmes, and requiring students to work on two real-world projects to gain hands-on experience.The major purpose of this training is to give users with a working knowledge of utilising Power BI to explore and analyse information, as well as to create simple visualisations for dashboards using the capabilities offered by the Power BI platform  We Provide Power BI Course in Hyderabad  for online and Offline the Fees may Fluctuate   Between Online and Offline but we make sure every  students get Best Training Possible as the classroom contains only Limited Students the Trainers are Able  to concentrate on every Student’s Performance  and analyze them  , Guide them Individually. Join Java Training in Kphb  now and Upgrade your Skills We offer both online and offline Power BI training in Hyderabad. The fees may fluctuate between online and offline, but we ensure that every student receives the best training possible since the classroom has a limited number of students, allowing the trainers to focus on each student’s performance and assess and guide them individually.Our competent educators will guide learners through every aspect of the Power BI programm, from beginner to advanced. START YOUR CAREER WITH THE POWER BI CERTIFICATION COURSE, WHICH WILL GET YOU A JOB OF 5 TO 12 LACS IN JUST 60 DAYS .Now is the time to enroll in Power BI Training in KPHB and improve your skills.</p>
<h2>Description of the Power BI Course</h2>
<h3>Why Power BI is so Popular?</h3>
<p>Power BI Course: Power BI is a collection of programming administrations, apps, and connectors that work together to transform your unusable data into sound, visually appealing, and intelligent experiences. Your data could be in the shape of an Excel accounting page or a collection of cloud-based and on-premises half-and-half information stockrooms. Force BI enables you to connect to your data sources, visualise and locate what’s important, and share it with whomever or whomever you need.
<br/>
Force BI Desktop is a free application that you install on a nearby PC and uses to interact with, alter, and visualise your data With Power BI Desktop, you can connect to a variety of data sources and combine them (also known as demonstrating) into an information model. This data model enables you to create visuals and collections of visuals that you can share as reports with people in your organisation.</p>
<h3>Who can Learn Power BI?</h3>
<p>To learn Power BI, you don’t need any prior experience with any tool.
<br/> The Following People can Learn Power BI 
<br/>♦ B.COM/B.SC/ BBA etc All Degree Graduates 
<br/>♦ Engineer Graduates (any Department)
<br/>♦Those with a three-to-four-year career gap
<br/>♦ People who seek to go from a non-technical to a technical career</p>
<h3>Is Power BI easy to Learn?</h3>
<p>The simple answer is YES. Because we teach so many beginners, we always make sure that they acquire as much information as possible, allowing them to quickly go from 0 to advanced.</p>
<h3>What are the career opportunities for Power BI?</h3>
<p>One of the on-demand courses/tools is Power BI. Many businesses are looking for power bi developers. Simply search power bi on any of the employment portals to find a plethora of options. Many businesses are also switching their data analysis tools to Power Bi.</p>
<h3>What are the Salary Trends of Power BI?</h3>
<p>The Following are the average Trends of Power BI
<br/>
Power BI Developer – Rs. 4,78,587.
<br/>Power BI Software Engineer – Rs. 4,42,373.
<br/>Power BI Analyst – Rs. 4,94,000.
<br/>Senior Software Engineer – Rs. 7,85,636.
<br/>Senior Business Intelligence (BI) Analyst – Rs. 9,28,556.
<br/>Power BI Business Analyst (IT) – Rs. 3,93,054.</p>
<h3>Is Power BI more Effect than Tableau?</h3>
<p>Yes, absolutely. Both are only reporting tools. However, Power BI has certain advanced features in comparison to Tableau, and the licence fee is also quite low in Power BI, therefore any small business should use it exclusively.</p>
<h3>What projects am I required to complete</h3>
<p>To gain hands-on experience with the topics learned, all participants will be asked to work on a project at the end of the course. 
<br/>With the help of your mentors, you will create your own Power BI application. 
<br/>Our professors and industry specialists will analyse this project, which might possibly be a live industry project. 
<br/>You will receive a certificate if you complete the course successfully.</p>
<h3>Where will be the classes Held?</h3>
<p>We offer both classroom and online classes. While you may get Power BI training in Kukapally, Hyderabad, for Onlines sessions, all you need is a Windows computer with a strong internet connection to access the class anywhere, at any time for online sessions. It’s also a good idea to use a headset with a microphone. These lessons can also be accessed via a smart phone or tablet.</p>


           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf3.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser5'>
      <div className="service5">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view5'><img/></div>
            <div>
            <h1>Manual Testing</h1>
<p>Manual testing is the most fundamental sort of software testing since it identifies serious problems in software programs. The tester executes test cases without the use of any automation testing tools in this type of testing. This  course will teach you how to manually test a software application. Vcube offers Manual Testing Training in Kphb Hyderabad.
<br/>
Duration : 45 Day</p>
            <h2>COURSE STRUCTURE</h2>
            <h3>Software Testing</h3>
            <ul>
                <li>Introduction to Software Testing</li>
                <li>Why Software Testing needed?</li>
                <li>Types of Software Testing</li>
                <li>Why Software have defects?</li>
                <li>Difference between Manual and Automation</li>
                <li>What is meant by Manual Testing?</li>
                <li>Procedure in Manual Testing</li>
            </ul>
            <h3>Testing Artifacts</h3>
            <ul>
                <li>Test basis</li>
                <li>Test case specification</li>
                <li>Test scenario, Test cases and Test plan</li>
            </ul>
            <h3>ASSIGNMENT ON WRITING TEST SCENARIOS and TEST CASES</h3>
            <p>Testing process</p>
            <ul>
                <li>Principles of software testing</li>
                <li>Test process</li>
                <li>STLC</li>
                <li>Entry and exit criteria</li>
            </ul>
            <h3>Software Development life cycle</h3>
            <ul>
                <li>Waterfall Model</li>
                <li>V-Model</li>
                <li>Iterative Model</li>
                <li>Spiral Model</li>
                <li>Big-Bag Model</li>
                <li>Agile</li>
            </ul>
            <h3>SPECIAL SESSIONS on AGILE METHODOLOGY</h3>
            <p>Testing Levels</p>
            <ul>
                <li>Functional</li>
                <li>Non-Functional</li>
            </ul>
            <h3>Functional Types:</h3>
            <ul>
                <li>Unit Testing</li>
                <li>Integration Testing-Types</li>
                <li>System Testing</li>
                <li>System Integration Testing</li>
                <li>UAT-Types</li>
                <li>E2E Testing</li>
                <li>Smoke Testing</li>
                <li>Sanity Testing</li>
                <li>Regression Testing</li>
                <li>RETESTING</li>
            </ul>
            <h3>Testing Methods</h3>
            <ul>
                <li>Black Box</li>
                <li>White Box</li>
                <li>Gray Box</li>
            </ul>
            <h3>Test Design Techniques</h3>
            <p>Dynamic</p>
            <ul>
                <li>BVA</li>
                <li>EP</li>
                <li>Decision table</li>
                <li>OA</li>
            </ul>
            <p>Static</p>
            <ul>
                <li>Review</li>
                <li>Static Analysis</li>
            </ul>
            <h3>Test Management</h3>
            <ul>
                <li>Defect Life Cycle</li>
                <li>ALM/QC/Requirements study</li>
            </ul>
            <h3>Versus</h3>
            <ul>
                <li>Priority vs. Severity</li>
                <li>Regression vs. retesting</li>
                <li>Verification vs. validation</li>
                <li>Test plan vs. Test strategy</li>
                <li>Error vs. defect vs. Failure</li>
            </ul>
            <h3>Real Time Project Steps:</h3>
            <ul>
                <li>Assigning Requirement Documents.</li>
                <li>Discussion on Requirement Documents.</li>
                <li>Identification of Test Scenarios and Test Cases from the Requirement.</li>
                <li>Highlighting points to be discussed in Management Tools.</li>
                <li>Design Test Scenarios and Test Cases in Management Tools.</li>
                <li>Do the Requirement Traceability Matrix with respect to Requirement and Test Cases.</li>
                <li>Discussion on different navigations in the Management Tool.</li>
                <li>Testing the application as per the Requirement Discussion.</li>
                <li>Test Execution of Test Cases with respect to Results.</li>
                <li>Test Execution with respect to PASSED and FAILED Test cases.</li>
                <li>Defect Management: Raising Defects.</li>
                <li>Reporting Defects to Dev team.</li>
            </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf4.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser6'>
      <div className="service6">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view6'><img/></div>
            <div>
            <h1>DEVOPS</h1>
<p>DEVOPS: DevOps  (development & operations) is an endeavor software development express used to mean a type of agile connection amongst development & IT . V Cube is one of the best institute for DevOps training in Hyderabad, We offers the comprehensive and in-depth training in DevOps. DevOps is an endeavor software development express used to mean a type of agile connection amongst development & IT operations.Join Devops Training in KPHB 
<br/>
Devops Training in kphb Duration:30 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Module 1: DevOps Overview</strong></h3>
    <ul>
        <li>Evolution of Waterfall, Agile and DevOps</li>
        <li>What is DevOps</li>
        <li>Why DevOps</li>
        <li>Benefits of DevOps</li>
        <li>DevOps Stages</li>
        <li>DevOps Lifecycle</li>
        <li>Various Automation in DevOps</li>
        <li>Overview of CIC</li>
    </ul>
    
  
    <h3><strong>Module 2: Linux Fundamentals</strong></h3>
    <ul>
        <li>Overview of Linux</li>
        <li>Linux Architecture</li>
        <li>Linux Distributions</li>
        <li>Basic Linux Commands</li>
        <li>File Permission Management • User Creation</li>
        <li>Shell Scripts</li>
        <li>SSH and VI Utility</li>
    </ul>
    <h3><strong>Practical</strong></h3>
    <ul>
        <li>Creation of User.</li>
        <li>Establishing SSH Connection to the Server</li>
        <li>File creation and Manipulation using VI editor</li>
        <li>Managing permissions</li>
        <li>Basic commands execution</li>
        <li>Writing Shell Scripts Progra</li>
    </ul>
    
   
    <h3><strong>Module 3: Managing Source Code – Git and GitHub</strong></h3>
    <ul>
        <li>Overview of Version Control System</li>
        <li>Central vs Distributed Version Control System</li>
        <li>Introduction to Git • Installation and setting up Git • Important Git Commands</li>
        <li>Creating and Managing git Repositories</li>
        <li>Branching, Merging, Stashing, Rebasing, Reverting and Resetting</li>
        <li>Introduction to GitHub</li>
        <li>Managing Remote Repositories</li>
    </ul>
    <h3><strong>Practical includes:</strong></h3>
    <ul>
        <li>Installation and Configuration of git</li>
        <li>Creating Git Repositories</li>
        <li>Demonstrating various Git repositories</li>
        <li>Merging Branches and Managing merge conflicts</li>
        <li>Stashing, Reverting, Rebasing and Resetting</li>
        <li>Collaborating local and remote repos</li>
    </ul>
    
   
    <h3><strong>Module 4 Understanding</strong></h3>
    <ul>
        <li>Overview of Various Build Tools</li>
        <li>What is Maven • Maven Architecture</li>
        <li>Maven Plugins</li>
        <li>Maven Archetypes</li>
        <li>Maven Commands</li>
    </ul>
    <h3><strong>Practical Include</strong></h3>
    <ul>
        <li>Maven Commands demonstration to Build, Test and Package the projects</li>
    </ul>
    
   
    <h3><strong>Module 5 Continuous Integration Using Jenkins</strong></h3>
    <ul>
        <li>Overview of Continuous Integration</li>
        <li>Difference between Continuous vs Traditional Integration</li>
        <li>Overview of Jenkins</li>
        <li>Jenkins Master-Slave Architecture</li>
        <li>Jenkins Installation and Configuration</li>
        <li>Jenkins Plugins • Jenkins Management • Jenkins Freestyle and Pipeline Jobs</li>
        <li>Scripted and Declarative Pipelines</li>
        <li>Configuring Slave Node to Jen</li>
    </ul>
    <h3><strong>Practical Includes:</strong></h3>
    <ul>
        <li>Installation and Configuration of Jenkins</li>
        <li>Configuration of Tools</li>
        <li>Configuration of Plugins</li>
        <li>Creation of Freestyle Jobs, scripted and declarative pipeline jobs</li>
        <li>Demonstrate pipeline triggering using Github webh</li>
        <li>Scripted and Declarative pipelines</li>
        <li>Integration of Code Coverage Tools and Static Code analysis tools</li>
        <li>Triggering pipelines using Git WebHooks</li>
        <li>Creation of CICD pipelines</li>
        <li>Adding slave node to J</li>
    </ul>
    
  
    <h3><strong>Module 6 Sonarqube</strong></h3>
    <ul>
        <li>Sonarqube Introduction</li>
        <li>Sonarqube installation & Configuration</li>
        <li>Adding users & Groups in Sonarqube Dash Board</li>
        <li>Integration Sonarqube with Jen</li>
    </ul>
    
    
    <h3><strong>Module 7 Nexus</strong></h3>
    <ul>
        <li>Nexus Introduction</li>
        <li>Installation and configuration</li>
        <li>Nexus Setup</li>
        <li>Integration Nexus</li>
    </ul>
    
   
    <h3><strong>Module 8 Containerization, Docker, and Docker Hub</strong></h3>
    <ul>
        <li>Introduction to Virtualization and Containerization</li>
        <li>What is Containerization</li>
        <li>Docker Architecture</li>
        <li>Overview of Docker Hub</li>
        <li>Docker Installation</li>
        <li>Docker Commands</li>
        <li>Container Modes</li>
        <li>Port Binding</li>
        <li>Docker file</li>
        <li>Managing Docker Images</li>
        <li>Running and Managing Containers</li>
        <li>Docker Volume</li>
        <li>Docker Compose</li>
        <li>Overview of Docker</li>
    </ul>
    <h3><strong>Practical Includes:</strong></h3>
    <ul>
        <li>Installation of Docker and Docker Compose on AWS EC2</li>
        <li>Running Docker Commands</li>
        <li>Writing Docker Files for various applications</li>
        <li>Building Docker Images</li>
        <li>Pushing Images to Docker Hub</li>
        <li>Running Docker Containers, 7. Container Port Binding</li>
        <li>Running multiple containers using Docker Compose file</li>
        <li>Persisting container data using Docker Volume. 10. Initialize a docker swarm and demonstrate workload deployme</li>
    </ul>
    
  
    <h3><strong>Module 9: Structure Query Language (SQL)</strong></h3>
    <ul>
        <li>Overview of SQL</li>
        <li>DDL Statements</li>
        <li>DML Statements</li>
        <li>DCL Statements</li>
        <li>Database Constraints</li>
        <li>Aggregate Functions (Avg, Sum, Max, Min, Count) • Order By, Group By and Having Clauses</li>
        <li>Various types of Joins</li>
    </ul>
    <h3><strong>Practical Includes:</strong></h3>
    <ul>
        <li>Create and Alter and Drop Tables</li>
        <li>Insert, Update, Delete and View Data</li>
        <li>Apply database constraints</li>
        <li>Statements execution using OrderBy, Group By and Having clauses</li>
        <li>Applying Joins, Executing Subqueries and Aggregate functions</li>
    </ul>
  
    <h3><strong>Module 10: Container Orchestration Tool – Kubernetes</strong></h3>
    <ul>
        <li>Overview of Container Orchestration</li>
        <li>Different between Docker swarm and Kubernetes Cluster • Kubernetes Architecture</li>
        <li>Installation of Kubernetes – Minikube and EKS</li>
        <li>Kubernetes Nodes</li>
        <li>Kubernetes Pods</li>
        <li>Kubernetes ReplicaSet • Kubernetes Deployments</li>
        <li>Kubernetes Service</li>
        <li>Kubernetes Namespace</li>
        <li>Kubernetes Volumes</li>
        <li>Kubernetes Job</li>
        <li>Kubnernets StatefulSet • Kubernetes DaemonSet • Kubernetes Secrets</li>
        <li>Rolling updates and rollbacks</li>
        <li>Scaling up and down of the application</li>
    </ul>
    <h3><strong>Practical Includes:</strong></h3>
    <ul>
        <li>Installation and configuration of Kubernetes Minikube</li>
        <li>Creation of Pods and Deployments using ad-hoc Commands</li>
        <li>Creation of Pods and Replica set using YAML files</li>
        <li>Scaling up and Scaling Down of the application</li>
        <li>Rolling out Deployments and Rolling Back</li>
        <li>Creation of Deployments, Services, DemonSet, StatefullSet, Secrets using YAML files</li>
    </ul>
    
   
    <h3><strong>Module 11: Configuration Automation using Ansible</strong></h3>
    <ul>
        <li>Overview of Configuration Automation</li>
        <li>Introduction to Ansible</li>
        <li>Ansible Architecture</li>
        <li>Components of Ansible</li>
        <li>Installation and Configuration of Ansible</li>
        <li>Ansible ad-hoc commands</li>
        <li>Ansible Playbooks</li>
        <li>Ansible Variables</li>
        <li>Ansible Handlers</li>
        <li>Ansible Role using A</li>
    </ul>
    <h3><strong>Practical Includes:</strong></h3>
    <ul>
        <li>Installation and Configuration Ansible</li>
        <li>Running Ansible ad-hoc commands.&nbsp;</li>
        <li>Writing Ansible Playbooks to Configure Servers</li>
        <li>Creating Ansible Role</li>
    </ul>
    
    <h3><strong>Module 12: Continuous Monitoring using Prometheus and Grafana</strong></h3>
    <ul>
        <li>Overview of continuous monitoring</li>
        <li>Continuous monitoring tools in DevOps</li>
        <li>Installation and Configuration of Prometheus and Grafana</li>
        <li>Prometheus Architecture</li>
        <li>Monitoring using Prometheus</li>
        <li>Dashboard visualization using Grafana</li>
    </ul>
    <h3><strong>Practical Include</strong></h3>
    <ul>
        <li>Installation and Configuration of tools</li>
        <li>Monitoring Targets using Prometheus</li>
        <li>Visualizing Reports using Grafana</li>
    </ul>
    
    <h3><strong>Module 13: Terraform</strong></h3>
    <ul>
        <li>Introduction to Terraform</li>
        <li>Terraform Vs Ansible</li>
        <li>Terraform Architecture</li>
        <li>Terraform Configuration</li>
        <li>Terraform Commands</li>
        <li>Managing Terraform Resources</li>
        <li>Terraform End to End</li>
    </ul>
    <h3><strong>Practical’s Includes</strong></h3>
    <ul>
        <li>Installation of Terraform on AWS EC2 Instance</li>
        <li>Writing Terraform Configuration</li>
        <li>Creation of AWS EC2 instance using terraform</li>
        <li>Managing AWS resources using terraform</li>
        <li>End to End Infrastructure Creation</li>
    </ul>
    
    <h3><strong>Module 14: HELM CHART</strong></h3>
    <ul>
        <li>Helm Introduction and Installation</li>
        <li>Helm Concept • Helm architecture and components</li>
        <li>Helm charts</li>
        <li>Helm charts Preparation</li>
        <li>Helm chart. yaml file and ex</li>
    </ul>
    <h3><strong>Practical’s Includes</strong></h3>
    <ul>
        <li>Converting Kubernetes manifest file into Helm charts.&nbsp;</li>
        <li>Setup wordpress using Helm charts on on Kubernates.</li>
    </ul>
    
    <h3><strong>Module 15: Project Live Demo</strong></h3>
    <ul>
        <li>MINI Project 1</li>
        <li>MINI Project 2</li>
        <li>MAJOR Project 3</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          
        </div>
      </div>
      </div>


      <div className='ser7'>
      <div className="service7">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view7'><img/></div>
            <div>
            <h1>Amazon Web Services</h1>
            <p>AWS Course : Amazon Web Services in Hyderabad, Inc. is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. V Cube Software Solutions is one of the top organizations in Hyderabad for AWS Training. Get your AWS Training in kukatpally Now.
<br/>
Amazon Web Service Duration in KPHB : 45 days.</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Module 9 AWS Fundamentals</strong></h3>
    <ul>
        <li>Understanding of Physical and Virtual Servers</li>
        <li>Overview of Public/Private Cloud Computing</li>
        <li>Overview of AWS/Azure/GCP</li>
        <li>Benefits of Cloud Computing</li>
        <li>Pricing and Usage Policy</li>
        <li>IAM service</li>
        <li>EC2 Service</li>
        <li>RDS Service</li>
        <li>Cloud Storages</li>
        <li>Public and Private Ips</li>
        <li>Elastic IP, CloudFront and ELB. • SNS , SQS, LAMBDA, CLOUDWATCH, KMS, ROUTE 53</li>
        <li>EKS&amp;EKS</li>
        <li>EBS,AUTO SCALING ,VPC</li>
        <li>EF</li>
    </ul>
    <h3><strong>Practical Includes</strong></h3>
    <ul>
        <li>AWS Free Tier Account Creation</li>
        <li>IAM User Creation</li>
        <li>EC2 Instance Creation</li>
        <li>Security Group Configuration</li>
        <li>Creation of database using RDS</li>
        <li>Connecting Ec2 Instance</li>
        <li>Connecting database</li>
        <li>Creation of S3 storage</li>
        <li>Creation a new VPC, subnet, routes, ACL &amp; Creation of Internet Gateway</li>
        <li>Understanding Serverless concepts, Deploying Lambda Function</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf5.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser8'>
      <div className="service8">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view8'><img/></div>
           <div>
           <h1>AZURE DEVELOPMENT</h1>
           <p>Azure Development is a comprehensive cloud platform that can host your existing apps while also facilitating the creation of new ones. Azure brings together the cloud services you’ll need to build, test, deploy, and manage your apps while taking advantage of cloud computing’s efficiency. Azure provides cloud-based Big Data management and processing solutions, including machine learning, streaming analytics, and AI services
<br/>
Duration :45 day</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Introduction to Cypress and getting started</strong></h3>
    <ul>
        <li>Installation</li>
        <li>Writing a simple code</li>
    </ul>
    <h3><strong>Working with Cypress features</strong></h3>
    <ul>
        <li>Working with UI & Console based Test Runner</li>
        <li>Interacting with UI element with Cypress</li>
        <li>Advanced Cypress commands</li>
        <li>Cypress variables</li>
        <li>Alias</li>
        <li>Cypress Wrap</li>
        <li>Implicit and Explicit assertions in Cypress</li>
        <li>Cypress Hooks</li>
        <li>Data Driven Testing</li>
        <li>Handling Async promises with Cypress</li>
    </ul>
    <h3><strong>Working with advanced features of Cypress</strong></h3>
    <ul>
        <li>Custom commands in Cypress</li>
        <li>Configurations and creating test videos and failure screenshots</li>
        <li>Environment variables</li>
        <li>Cypress Plugins</li>
    </ul>
    <h3><strong>Behavioral Driven Development (BDD) Testing with Cucumber</strong></h3>
    <ul>
        <li>
            <ul>
                <li>Cucumber with Cypress</li>
                <li>Cucumber for Parameter data in Step definition</li>
                <li>Cucumber DataTables for working with multiple data</li>
                <li>Page object Models with Cypress + BDD</li>
            </ul>
        </li>
    </ul>
    <h3><strong>Testing with Cypress</strong></h3>
    <ul>
        <li>
            <ul>
                <li>API Testing with Cypress</li>
                <li>API testing for GET, POST, PUT, DELETE and PATCH.</li>
            </ul>
        </li>
    </ul>
    <h3><strong>CI/CD Integration</strong></h3>
    <ul>
        <li>CI/CD Integration with Azure DevOps</li>
    </ul>
    <h3><strong>Cypress Reports</strong></h3>
    <ul>
        <li>Mocha awesome reports</li>
        <li>Mocha JUnit reports</li>
        <li>Reports for BDD testing with Cucumber</li>
    </ul>
    <h3><strong>Cypress Tidbits</strong></h3>
    <ul>
        <li>Windows Authentication handling in Cypress</li>
        <li>File Upload</li>
        <li>Changing browser behavior with Cypress events</li>
        <li>Debugging with Cypress</li>
        <li>Handling Alerts and popups with Cypress</li>
        <li>iFrames in Cypress</li>
    </ul>
    <h3><strong>Automating applications with XHR using Cypress</strong></h3>
    <ul>
        <li>XHR and asserting using Explicit assertion</li>
        <li>XHR to verify authentication token validation</li>
        <li>Cookies and asserting cookies values</li>
        <li>Cypress Dashboard</li>
        <li>Record in Cypress Dashboard</li>
        <li>Parallelization</li>
        <li>Cypress CI/CD</li>
        <li>Cypress Insights</li>
        <li>Cypress Docker</li>
    </ul>
    <h3><strong>JavaScript:</strong></h3>
    <ul>
        <li>Introduction to JavaScript</li>
        <li>JavaScript Basics: Control Flow</li>
        <li>JavaScript Basics: Functions</li>
        <li>JavaScript Basics: Arrays</li>
        <li>JavaScript Basics: Objects</li>
        <li>JavaScript Advanced</li>
        <li>JavaScript DOM</li>
        <li>Git and Github</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
         
        </div>
      </div>
      </div>


      <div className='ser9'>
      <div className="service9">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view9'><img/></div>
            <div>
            <h1>Java Full Stack Developer</h1>
            <p>A java full stack web developer is a developer with extensive knowledge and expertise in full stack  tools and frameworks that works with java   Get ready to achieve your learning goals with Java Full Stack Developer Course in Hyderabad. V Cube Offers java full stack training in Hyderabad Kukatpally.
<br/>
            Duration:4 Months
            </p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Core Java Programming</strong></h3>
    <ul>
        <li>Classes</li>
        <li>Object Oriented Features</li>
        <li>Java Features</li>
        <li>Methods, Fields</li>
        <li>Access Modifiers</li>
        <li>Setters and Getter methods</li>
        <li>JDK, JRE, JVM</li>
        <li>Encapsulation</li>
        <li>Overloading</li>
        <li>Constructors</li>
        <li>String basics</li>
        <li>This keyword</li>
        <li>Inheritance</li>
        <li>Overriding</li>
        <li>Types of Inheritance</li>
        <li>Constructor of Inheritance</li>
        <li>Super keyword</li>
        <li>Dynamic Method Dispatch</li>
        <li>Final modifier</li>
        <li>Abstract modifier</li>
        <li>Static modifier</li>
        <li>Interfaces</li>
        <li>Packages</li>
        <li>Command line arguments</li>
        <li>Wrapper classes</li>
        <li>Nested classes and interfaces</li>
        <li>Blocks in classes</li>
        <li>Basics of JVM</li>
        <li>Exception handling</li>
        <li>IO</li>
        <li>Multi-threading</li>
        <li>Collections framework</li>
        <li>Garbage collection</li>
        <li>Features of Java 8</li>
    </ul>
    <h3><strong>Database</strong></h3>
    <h3><strong>MySQL</strong></h3>
    <h3><strong>SQL</strong></h3>
    <ul>
        <li>DDL, DML, DCL, TCL</li>
        <li>Views</li>
        <li>Joins</li>
        <li>Subqueries</li>
        <li>Aggregate Functions</li>
    </ul>
    <h3><strong>PL/SQL</strong></h3>
    <ul>
        <li>Cursors, Triggers, Functions, Procedures</li>
    </ul>
    <h3><strong>UI development</strong></h3>
    <h3><strong>HTML</strong></h3>
    <ul>
        <li>Tags, Static Page Creation</li>
        <li>Doctype, Meta</li>
        <li>URLs</li>
        <li>Images</li>
        <li>Tables</li>
        <li>Input, Button, Form Fields</li>
    </ul>
    <h3><strong>CSS</strong></h3>
    <ul>
        <li>Style, Class Selectors</li>
        <li>Font, Id Selectors, Text, Border, Padding, Positioning</li>
        <li>HTML with CSS</li>
    </ul>
    <h3><strong>JavaScript</strong></h3>
    <ul>
        <li>Operators, Varibales</li>
        <li>Loops, Arrays, Functions</li>
        <li>Manipulations</li>
        <li>Forms, Images</li>
    </ul>
    <h3><strong>Bootstrap</strong></h3>
    <ul>
        <li>Grid, Responsive design, Layout</li>
        <li>Tables, Lists, Forms</li>
        <li>Groups, Images, Buttons, Navbar</li>
        <li>Panels, Breadcrumbs, Jumbotron, Dropdowns, Tabs, Carousel</li>
    </ul>
    <h3><strong>Angular</strong></h3>
    <ul>
        <li>Class Bindings</li>
        <li>Style bindings</li>
        <li>Event bindings</li>
        <li>Components</li>
        <li>Services</li>
        <li>Component interaction</li>
        <li>Routing</li>
        <li>Observables</li>
        <li>Input and output</li>
        <li>Directives</li>
        <li>Modules</li>
    </ul>
    <h3><strong>Java Web Development</strong></h3>
    <h3><strong>JDBC</strong></h3>
    <ul>
        <li>Drivers</li>
        <li>Types</li>
        <li>Statements</li>
        <li>Prepared statements</li>
    </ul>
    <h3><strong>Servlet</strong></h3>
    <ul>
        <li>Life Cycle</li>
        <li>Session Management</li>
        <li>Config, Context</li>
        <li>Request, Response</li>
    </ul>
    <h3><strong>JSP</strong></h3>
    <ul>
        <li>Tags</li>
        <li>Implicit Objects</li>
    </ul>
    <h3><strong>JSP MVC</strong></h3>
    <ul>
        <li>MVC Architecture</li>
    </ul>
    <h3><strong>Spring Framework</strong></h3>
    <ul>
        <li>Spring vs Springboot</li>
        <li>CLI, STS, Annotations</li>
        <li>DI, AOP, JPA, Hibernate, with MySQL</li>
        <li>With REST</li>
    </ul>
    <h3><strong>ORM – Hibernate, JPA</strong></h3>
    <ul>
        <li>Generator classes, Dialects, Log4j</li>
        <li>Mappings</li>
        <li>JPA vs Hibernate</li>
    </ul>
    <h3><strong>MVC Architecture</strong></h3>
    <h3><strong>REST Services</strong></h3>
    <ul>
        <li>Components, RS, WS</li>
        <li>RESTful services with SB</li>
        <li>SOAP vs REST</li>
    </ul>
    <h3><strong>Microservices Introduction</strong></h3>
    <h3><strong>Methodologies – Agile</strong></h3>
    <h3><strong>Design Patterns</strong></h3>
    <ul>
        <li>Singleton</li>
    </ul>
    <h3><strong>Software Testing</strong></h3>
    <ul>
        <li>Manual Testing</li>
        <li>Unit Testing, Regression, White-box, Component</li>
    </ul>
    <h3><strong>Good to Know</strong></h3>
    <ul>
        <li>LOG4J</li>
        <li>GitHub</li>
        <li>Maven</li>
        <li>Junit</li>
        <li>Eclipse</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf6.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser10'>
      <div className="service10">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view10'><img/></div>
            <div>
            <h1>AZURE DEVOPS</h1>
            <p>Azure Devops is a Microsoft Software as a Service (SaaS) platform that offers an end-to-end DevOps toolchain for developing and deploying software. Azure DevOps is the culmination of over fifteen years of investment and learning in providing tools to support software development.
<br/>
Duration : 45days </p>
            <h2>COURSE STRUCTURE</h2>
            <p><strong>Azure DevOps Training Course</strong></p>
    <ul>
        <li>Azure Cloud [ Iaas , PaaS, Saas]</li>
        <li>Azure Network concepts</li>
        <li>Azure Security</li>
        <li>IAC [Arm templates, AzCLI and Terraform]</li>
        <li>Azure DevOps</li>
    </ul>
    <ol>
        <li><strong>Introduction to Azure</strong></li>
    </ol>
    <ul>
        <li>Cloud technology overview</li>
        <li>Overview of Azure</li>
        <li>Managing Azure with the Azure portal</li>
        <li>Managing Azure with AZCLI</li>
    </ul>
    <ol start="2">
        <li><strong>Implementing and managing Azure networking</strong></li>
    </ol>
    <ul>
        <li>Overview of Azure networking</li>
        <li>Implementing and managing Azure virtual networks</li>
        <li>Configuring Azure virtual networks</li>
        <li>Configuring Azure virtual network connectivity</li>
        <li>Configuring the Subnets</li>
        <li>Configuring Virtual Network Region Peering</li>
        <li>Configuring Virtual Network Global Peering</li>
        <li>Understanding Azure to On-Prem Connectivity</li>
        <li>Deploying Azure Virtual Network Gateway.</li>
        <li>Understanding User Defined Routes(UDR).</li>
        <li>Configuring Azure Virtual Network Gateway with AWS over IPSec VPN.</li>
        <li>Implementing Azure Service End Points.</li>
        <li>Understanding Hub and Spoke Architecture</li>
    </ul>
    <ol start="3">
        <li><strong>Understanding and Configuring Network Security Groups (NSG)</strong></li>
    </ol>
    <ul>
        <li>Understanding Azure Network Security Groups (NSG)</li>
        <li>Creating and Updating Inbound & Outbound Security Rules.</li>
        <li>Understanding NSG Rule Hierarchy.</li>
        <li>Testing Network Security Groups and leaning rule priority.</li>
        <li>Creating NSG Rules with Service tags.</li>
        <li>Understanding Application Security Groups (ASG).</li>
        <li>Creating NSG with Application Security Groups.</li>
    </ul>
    <ol start="4">
        <li><strong>Understanding and Configuring Azure Firewall</strong></li>
    </ol>
    <ul>
        <li>Overview of Azure Firewall as a Service.</li>
        <li>Creating UDR and AzureFirewallSubnet.</li>
        <li>Deploy Azure Firewall.</li>
        <li>Configure routing on UDR and assigning to subnets.</li>
        <li>Create Network Rule Collection and check the traffic.</li>
        <li>Create Application Rule Collection and block traffic to websites.</li>
        <li>Understand SNAT and DNAT in Azure Firewall.</li>
        <li>Creating DNAT for Azure machine using Azure Firewall</li>
    </ul>


<ol start="5">
    <li><strong>Implementing & Configuring Azure Virtual Machines</strong></li>
</ol>
<ul>
    <li>Overview Azure virtual machines</li>
    <li>Deploy virtual machines in Azure portal</li>
    <li>Deploy virtual machines using Azure CLI</li>
    <li>Managing Azure Virtual machine storage</li>
    <li>Understanding Availability sets, Fault Domain & Update Domain.</li>
    <li>Creating & place virtual machine in Availability Sets.</li>
</ul>
<ol start="6">
    <li><strong>Designing & Implementing Azure Load Balancing</strong></li>
</ol>
<ul>
    <li>Overview on Load Balancing</li>
    <li>Type of Load Balancers in Azure</li>
    <li>Basic Vs Standard Load Balancer</li>
    <li>Deploying Basic Load Balancer with Availability Sets.</li>
    <li>Creating Backend Pools, Health probes and Load Balance rules.</li>
    <li>Checking the Load Balancing scenarios.</li>
    <li>Configuring NAT using Basic Load Balancer.</li>
</ul>
<ol start="7">
    <li><strong>Implement and configure Azure DNS & Azure Standard Load Balancer</strong></li>
</ol>
<ul>
    <li>Understanding Azure DNS.</li>
    <li>Buying a domain name for Godaddy.com</li>
    <li>Creating Azure DNS Zone and configure with Godaddy.</li>
    <li>Creating 3 Availability Sets and place single virtual machine in each AVSet.</li>
    <li>Create Azure Standard Load Balancer and create backend pool and assign all the 3 AVSets.</li>
    <li>Check the Load Balancing between the servers in different AV-Sets.</li>
    <li>Create Host Records for Server and check the name resolution.</li>
    <li>Create the CNAME record for the Load Balancer and check the website resolution</li>
</ul>


<ol start="8">
    <li><strong>Configuring Azure Application gateway</strong></li>
</ol>
<ul>
    <li>Understanding Azure Application Gateway architecture.</li>
    <li>Understanding Path Based Routing in AGW.</li>
    <li>Creating multiple VMs and configuring application gateway.</li>
    <li>Check pathing based routing using AGW.</li>
</ul>
<ol start="9">
    <li><strong>Configuring Auto Scaling with Virtual Machine Scale Sets(VMSS)</strong></li>
</ol>
<ul>
    <li>Understanding Azure VMSS</li>
    <li>Creating a Azure VM Image for VMSS</li>
    <li>Deploy VMSS with the custom image.</li>
    <li>Performing stress testing on the VMSS.</li>
    <li>Check AutoScaling of VMs under stress testing</li>
</ul>
<p><strong>10. Planning and implementing Azure Storage</strong></p>
<ul>
    <li>Azure Storage account overview</li>
    <li>Understand Blob Storage</li>
    <li>Understand File Shares</li>
    <li>Configuring Azure FileSync</li>
    <li>Data migration using Azure storage explorer</li>
    <li>Manage Azure Storage permissions</li>
    <li>Azure Static Website deployment</li>
</ul>
<ol start="11">
    <li><strong>Configure and Mange Azure Backup and Disaster Recovery Services</strong></li>
</ol>
<ul>
    <li>Backup and disaster recovery overview</li>
    <li>Backup VMware Servers to Azure</li>
    <li>Backup Azure VM & Azure SQL instances</li>
    <li>Azure replication and failover groups</li>
    <li>Azure disaster recovery vault configuration</li>
</ul>
<p><strong>12. Planning and implementing Azure SQL Database</strong></p>
<ul>
    <li>Azure SQL database(PaaS) vs SQL database (IaaS)</li>
    <li>Structured vs Unstructured data</li>
    <li>DTUs – Azure SQL</li>
    <li>Azure SQL Global Replication and Failover Group</li>
</ul>
<ol start="13">
    <li><strong>Implementing Azure App services</strong></li>
</ol>
<ul>
    <li>Azure Web Apps overview ( PaaS)</li>
    <li>Deploying and Managing Web Apps</li>
    <li>Azure App Service plan</li>
    <li>Azure Deployment slots</li>
    <li>Azure Web Apps for scale and resilience</li>
</ul>


<ol start="14">
    <li><strong>Implementing Azure Active Directory</strong></li>
</ol>
<ul>
    <li>Azure Domain services</li>
    <li>Azure Active Directory overview</li>
    <li>Deploy and configure Active directory</li>
    <li>Create and manage users and groups</li>
    <li>Extending On-premise Active directory to Azure</li>
    <li>Configure Azure AD connect</li>
    <li>Role based access control (RBAC) overview</li>
    <li>Configure domain users and groups to access Azure portal</li>
</ul>
<p><strong>15. Configure Diagnostics, Monitoring, and Analytics</strong></p>
<ul>
    <li>Azure Monitoring and alerts configuration</li>
    <li>Log analytics</li>
    <li>Insights virtual machines and network</li>
</ul>
<p><strong>16. Azure Logic Apps</strong></p>
<ul>
    <li>Creating Logic Apps and executing.</li>
</ul>
<p><strong>IAC-Terraform</strong></p>
<ul>
    <li>Introduction to terraform</li>
    <li>Infrastructure Automation</li>
    <li>Install Terraform</li>
    <li>Providers</li>
    <li>Resources</li>
    <li>Basic Syntax Exercise: Your First Script main.tf Getting started with Terraform</li>
    <li>Terraform Plan, show, Apply, Destroy</li>
    <li>Exploring Terraform Registry</li>
    <li>Terraform console and Output</li>
    <li>Terraform Variables</li>
    <li>Breaking out Our Variables and Outputs</li>
    <li>Lab exercise: Breaking down main.tf into variables.tf, output.tf</li>
</ul>
<p><strong>Terraform Modules</strong></p>
<ul>
    <li>Introduction to Modules</li>
    <li>Modules repositories</li>
    <li>First basic Module</li>
    <li>Main Terraform code</li>
</ul>
<p><strong>Terraform with Azure – Lab part-1</strong></p>
<ul>
    <li>Setting up system for Azure</li>
    <li>Setting up storage account in azure</li>
    <li>Setting up Resource group on Azure</li>
</ul>

<p><strong>Terraform</strong></p>
<ul>
    <li>Remote State</li>
    <li>Data Sources</li>
    <li>Templates</li>
    <li>Working with State files</li>
</ul>
<p><strong>Terraform with Azure – Lab part-2</strong></p>
<ul>
    <li>Setting up Vnet on Azure Setting up Subnets on Azure</li>
    <li>Setting up NSG on Azure</li>
    <li>Setting up Azure Virtual machine</li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Azure DevOps</strong></p>
<p><strong>Why DevOps What is DevOps Azure DevOps tools Key Features Azure Boards</strong></p>
<ul>
    <li>Refining Backlogs on Azure Boards</li>
    <li>Creating the work items/tasks in Azure Boards</li>
    <li>Tracking the work items using Azure Boards</li>
    <li>Team Dashboards</li>
    <li>Custom reporting</li>
    <li>Sprint planning</li>
</ul>
<p>&nbsp;</p>
<p><strong>Azure Git Repos: Branching and Version Control</strong></p>
<p>Why use a version control system?</p>
<ul>
    <li>Pull requests</li>
    <li>Branching Models</li>
    <li>Branching Strategies</li>
    <li>Sharing code across Projects</li>
    <li>Builds and Branches</li>
    <li>Branch Policies</li>
    <li>Triggering Continuous Integration / Continuous Delivery (CI/CD)</li>
    <li>Azure Pipelines</li>
    <li>Continuous Integration</li>
    <li>Continuous Deployment / Delivery</li>
    <li>Build Pipelines</li>
    <li>Release Pipelines</li>
    <li>Azure pipelines – Classic editor</li>
    <li>CI/CD (classic) pipelines for dot net application</li>
    <li>Agents and agents pools, self-hosted agent, Microsoft hosted agent, Parallel</li>
    <li>jobs execution, Variables groups</li>
    <li>CI/CD for Infrastructure as Code</li>
    <li>Terraform and Azure Pipelines</li>
    <li>CI/CD (classic) pipelines for terraform code and deploy into azure</li>
    <li>CI/CD (yaml) pipelines for terraform code and deploy into azure</li>
    <li>Azure Pipelines – Terraform – Virtual machine</li>
    <li>Azure Pipelines – Terraform – Storage Account</li>
    <li>Service Connections</li>
    <li>Azure Pipelines – YAMl</li>
    <li>YAMl – multistaged pipeline</li>
    <li>configuring pipeline using docker and kubernetes</li>
</ul>
<p>&nbsp;</p>
<p><strong>Azure Test plans &amp; Azure Artifacts</strong></p>
<ul>
    <li>Azure Test plans</li>
    <li>Working with Test cases</li>
    <li>Creating &amp; sharing packages</li>
    <li>Understanding the packages</li>
    <li>Publishing the packages to Azure Artifacts.</li>
    <li>Adding packages to your pipeline</li>
    <li>Package management</li>
</ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf7.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser11'>
      <div className="service11">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view11'><img/></div>
            <div>
            <h1>SQL SERVER</h1>
            <p>SQL SERVER TRAINING: V CUBE SOFTWARE SOLUTIONS provides SQL Server Training in Hyderabad. We offer Real-time Database Design in hands-on experience in live Case Studies.
<br/>
Sql server Training in Kukatpally Duration:25 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3>About Database & Data Warehouse</h3>
<ul>
    <li>What is Database?</li>
    <li>What is Data Warehouse?</li>
    <li>Difference between Database & Data Warehouse</li>
</ul>
<h3>SQL Server 2012/2014 Database Design</h3>
<ul>
    <li>Database Creation using GUI</li>
    <li>Database Creation using T-SQL Scripts</li>
    <li>DB Design using Files • File locations and Size Parameters</li>
    <li>DB Log Files, Growth and Placement</li>
    <li>DB Structure Modifications & Ownership</li>
</ul>
<h3>SQL Server Tables and T-SQL Queries</h3>
<ul>
    <li>Table creation using T-SQL Scripts</li>
    <li>DML Operations: INSERT, UPDATE, DELETE</li>
    <li>Single Row and Multi-Row Insert Statements</li>
    <li>Table Aliases, Column Aliases & Usage</li>
    <li>Table creation with Schemas</li>
    <li>DELETE versus TRUNCATE Statements</li>
    <li>SELECT Queries and Sub Queries</li>
    <li>Schemas and Nested Queries with Aliases</li>
</ul>
<h3>Constraints, Keys and Data Validation</h3>
<ul>
    <li>Data Integrity and Normal Forms</li>
    <li>Tables with Keys & Constraints</li>
    <li>NULL and IDENTITY Properties – Usage</li>
    <li>UNIQUE KEY Constraint and NOT NULL</li>
    <li>PRIMARY KEY Constraint & Importance</li>
    <li>FOREIGN KEY and REFERENCE Attributes</li>
    <li>CHECK and DEFAULT Constraints, Usage</li>
</ul>
<h3>Joins, Sub Queries and Nested Queries</h3>
<ul>
    <li>SELECT Statements – IIF, SWITCH, CHOOSE</li>
    <li>ORDER BY, GROUP BY, GROUPING, HAVING</li>
    <li>Sub Queries, Nested Queries and EXISTS</li>
    <li>DELETE from SELECT, UPDATE from SELECT</li>
    <li>INSERT INTO … SELECT & Data Copy</li>
    <li>Inner Joins – Purpose and Performance</li>
    <li>Outer Joins – Types, Advantages and Usage</li>
    <li>Cross Joins – Advantages and Limitations</li>
    <li>Self Joins and Sub Queries</li>
</ul>
<h3>Joins, Views and Nested Queries</h3>
<ul>
    <li>Benefits of Views – End User Access</li>
    <li>Defining Views on Tables and Views</li>
    <li>SCHEMABINDING and Encryption Options</li>
    <li>ALTER TABLE Issues and Solutions with Views</li>
    <li>System Views & Management Views: Audits</li>
    <li>Joins and Nested Sub Queries in Views</li>
</ul>
<h3>User Defined Functions and Joins</h3>
<ul>
    <li>Functions – Syntax, Usage, and Importance</li>
    <li>Scalar-Valued Functions and Examples</li>
    <li>Table Valued Functions and Examples</li>
    <li>System Functions and Joins – CROSS APPLY</li>
    <li>Date, Time and Conversion Functions</li>
    <li>String Functions and Meta-data Functions</li>
    <li>ROWCOUNT, GROUPING, ROLLUP Functions</li>
    <li>Joining Functions and Tables / Views</li>
</ul>
<h3>Indexes and Query Tuning</h3>
<ul>
    <li>Need for Indexes, Index Types & Usage</li>
    <li>Indexing Table & View Columns</li>
    <li>Index SCAN AND SEEK</li>
    <li>PRIMARY KEYS and Non-Clustered Indexes</li>
</ul>
<h3>Stored Procedures and Benefits</h3>
<ul>
    <li>Need for Stored Procedures & Syntax</li>
    <li>Use of Variables and Query Parameters</li>
    <li>Stored Procedures with Loops & IF… ELSE</li>
    <li>SCHEMABINDING and ENCRYPTION Options</li>
    <li>INPUT, OUTPUT & RESULTSET Parameters</li>
    <li>System Stored Procedures and Nesting</li>
    <li>Dynamic SQL Queries and Parameters</li>
    <li>Stored Procedures, Data Validation Options</li>
    <li>OUTPUT Parameters and Result set Options</li>
</ul>
<h3>Triggers and Memory Limitations</h3>
<ul>
    <li>Triggers – Architecture, Types & Usage</li>
    <li>DML Triggers and Performance Impact</li>
    <li>INSERTED and DELETED Memory Tables</li>
    <li>Triggers for Audit Operations (Memory)</li>
</ul>
<h3>Cursors, Stored Procedures, CTE</h3>
<ul>
    <li>Cursor Declaration and Fetch Options</li>
    <li>STATIC and DYNAMIC Cursor Types</li>
    <li>SCROLL and FORWARD_ONLY Cursors</li>
    <li>LOCAL and GLOBAL Cursors – Scope</li>
    <li>KEYSET Cursors and Temp Objects</li>
    <li>Embedding Cursors in SPs and Functions</li>
    <li>Temp Tables and Procedures with Cursors</li>
    <li>Common Table Expressions (CTE) and Queries</li>
    <li>Stored Procedures with CTE: Tuning Options</li>
</ul>
<h3>Transactions & Procedures</h3>
<ul>
    <li>Transaction Options and Stored Procedures</li>
    <li>ACID Properties in T-SQL and Scope</li>
    <li>EXPLICIT Transaction Types and Issues</li>
    <li>IMPLICIT Transactions Types and Issues</li>
    <li>AUTOCOMMIT Transaction and Advantages</li>
    <li>Nested Points and Save Points usage</li>
    <li>Query Blocking Issues and Query Hints</li>
    <li>SPs with Transactions & Temp Objects</li>
</ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser12'>
      <div className="service12">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view12'><img/></div>
            <div>
            <h1>PYTHON FULL STACK</h1>
            <p>A full-stack Python developer knows how to use the Python programming language suite for all types of projects. Python is a general-purpose high-level programming language that may be used to handle both structured and unstructured data.
<br/>
At vcube software solutions Pvt. Ltd in Kukatpally, Hyderabad, you may learn full-stack Python programming and participate in real-world projects.
<br/>
Duration: 4months</p>
            <h2>COURSE STRUCTURE</h2>
            <h3>Pre Workout</h3>
      <ul>
        <li>Introduction to Programming</li>
      </ul>

      <h3>Introduction</h3>
      <ul>
        <li>Learn about the course</li>
      </ul>

      <h3>Course Set-Up and Installation</h3>
      <ul>
        <li>Setup your computer for the course!</li>
      </ul>

      <h3>Python Basics</h3>
      <ul>
        <li>Tokens</li>
        <li>Formatted Strings</li>
        <li>Operators</li>
        <ul>
          <li>Arithmetic</li>
          <li>Logical</li>
          <li>Comparison</li>
          <li>Identity</li>
          <li>Membership</li>
          <li>Bitwise</li>
          <li>Short-Circuit Evolution</li>
        </ul>
        <li>Data types</li>
        <li>Conditional flow Statements</li>
        <li>Loops</li>
        <li>While-else</li>
        <li>For-else</li>
        <li>Nested loops</li>
        <li>Inbuilt Data Structures</li>
        <ul>
          <li>List</li>
          <li>Tuple</li>
          <li>Set</li>
          <li>Dictionary</li>
          <li>List comprehension</li>
          <li>Dictionary Comprehension</li>
          <li>Unpacking Operator</li>
        </ul>
        <li>Strings</li>
        <li>Functions</li>
        <ul>
          <li>Defining functions</li>
          <li>Arguments</li>
          <li>Types of Functions</li>
          <li>Key word arguments</li>
          <li>Default Arguments</li>
          <li>Nested Functions</li>
          <li>List of args(*args)</li>
          <li>Dictionary of args(**kwargs)</li>
          <li>Lambda</li>
          <li>Generators</li>
          <li>Decorators</li>
          <li>Recursive</li>
          <li>Map</li>
          <li>Filter</li>
          <li>Zip</li>
          <li>Enumerate</li>
        </ul>
        <li>File I/O</li>
        <li>Scope</li>
        <ul>
          <li>OOP’S</li>
        </ul>
      </ul>

      <h3>Python Standard Library</h3>
      <ul>
        <li>Regular expressions</li>
        <li>OS</li>
        <li>SYS</li>
        <li>MySql.Connector</li>
        <li>Threading</li>
        <li>PDB</li>
        <li>Random</li>
        <li>Logging</li>
        <li>Unittest</li>
      </ul>

      <h3>External Libraries (optional)</h3>
      <ul>
        <li>NumPy</li>
        <li>Pandas</li>
        <li>Matplotlib</li>
      </ul>

      <h3>Django Framework</h3>
      <ul>
        <li>Introduction</li>
        <li>Setup development environment</li>
        <li>Getting started with Django</li>
        <li>Creating an application</li>
        
      </ul>

      <h3>What you will Learn?</h3>
      <ul>
        <li>Create a fully functional web site using the Full-Stack with Django</li>
        
      </ul>

      <h3>Who is the course for?</h3>
      <ul>
        <li>Complete Beginners</li>
        <li>Professionals looking to bridge gaps in their knowledge</li>
      </ul>

      <h3>MySQL Database</h3>
<ul>
  <li>Importance of Database</li>
  <li>DDL</li>
  <ul>
    <li>Create</li>
    <li>Alter</li>
    <li>Drop</li>
    <li>Truncate</li>
  </ul>
  <li>DML</li>
  <ul>
    <li>Insert</li>
    <li>Update</li>
    <li>Delete</li>
  </ul>
  <li>TCL</li>
  <ul>
    <li>Commit</li>
    <li>Rollback</li>
  </ul>
  <li>DCL</li>
  <ul>
    <li>Grant</li>
    <li>Revoke</li>
  </ul>
  <li>DQL</li>
  <ul>
    <li>Select</li>
  </ul>
  <li>Constraints</li>
  <ul>
    <li>Primary key</li>
    <li>Unique</li>
    <li>Check</li>
    <li>Not null</li>
    <li>Foreign Key</li>
  </ul>
  <li>Clauses</li>
  <li>Operators</li>
  <li>Single Row Functions</li>
  <li>Group Functions</li>
  <li>Joins</li>
  <li>Functions</li>
  <li>Stored Procedures</li>
  <li>Triggers</li>
</ul>
      
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf8.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser13'>
      <div className="service13">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view13'><img/></div>
           <div>
           <h1>ANGULAR JS</h1>
           <p>Angular JS : Angular JS is a powerful framework for building Rich Internet Applications (RIA).
it gives developers the ability to write clean Model View Controller (MVC) client-side applications using Java script
It is based on applications are cross-browser compatible. handles JavaScript code in a browser-agnostic manner.
<br/>
Duration : 45days </p>
           <h2>COURSE STRUCTURE</h2>
           <h2>Description of the Angular JS</h2>
            <h3>Best Angular Training in Hyderabad</h3>
            <p>It is a framework for building dynamic web applications. It allows you to use HTML as your template language and extend HTML’s syntax to express the components of your application clearly and succinctly. Data binding and dependency injection in is eliminate a lot of the code you’d have to write otherwise. And because it all happens in the browser, it’s an ideal partner for any server technology.
If HTML had been designed for applications, it would have been AngularJS. For static documents, HTML is an excellent declarative language.</p>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser14'>
      <div className="service14">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view14'><img/></div>
            <div>
            <h1>RPA UI PATH</h1>
            <p> RPA UI PATH: Robotic process automation (RPA) is a software technology that enables the creation, deployment, and management of software robots that mimic human actions when interacting with digital systems and software. Best Uipath Training in Hyderabad with Certified and Realtime Experts in Kukatpally, Hyderabad. It is a Job Oriented Training with 100% Placement Assistance.
<br/>
DURATION:45 days</p>
            <h2>COURSE STRUCTURE</h2>
    <h3><strong>Demo</strong></h3>
    <ul>
        <li>RPA Introduction</li>
        <li>RPA Tools in the Market</li>
        <li>UiPath Components</li>
        <li>UiPath Software Installation</li>
        <li>Types of applications can be automated</li>
    </ul>
    <h3><strong>UiPath Interface, Workflows</strong></h3>
    <ul>
        <li>UiPath Ribbons, Panels</li>
        <li>Types of workflows</li>
        <li>Sequence</li>
        <li>Flowchart</li>
        <li>State Machine</li>
        <li>Re-Frame Work</li>
    </ul>
    <h3><strong>UiPath Core Activities</strong></h3>
    <ul>
        <li>Package Install /uninstall</li>
        <li>UI Automation Activities</li>
    </ul>
    <h3><strong>Variables, Data Types</strong></h3>
    <ul>
        <li>What is variable?</li>
        <li>Types of variables</li>
        <li>Data Types of variables</li>
        <li>Assign values to variables</li>
        <li>Variable scope</li>
    </ul>
    <h3><strong>Basic Activities 1</strong></h3>
    <ul>
        <li>If activity</li>
        <li>While</li>
        <li>Do While</li>
        <li>For Each</li>
        <li>Switch</li>
    </ul>
    <h3><strong>Basic Activities 2</strong></h3>
    <ul>
        <li>Flow decision</li>
        <li>Flow Switch</li>
        <li>Flow Chart</li>
    </ul>
    <h3><strong>Invoke Activities</strong></h3>
    <ul>
        <li>Invoke workflow file</li>
        <li>In</li>
        <li>Out</li>
        <li>In Out</li>
        <li>Invoke Code</li>
        <li>Invoke Method</li>
    </ul>
    <h3><strong>Data Table Activities • Excel Activities • Work book Activities • Relation between Data Table & Excels</strong></h3>
    <ul>
        <li>Data Table Activities</li>
        <li>Excel Activities</li>
        <li>Work book Activities</li>
        <li>Relation between Data Table & Excels</li>
    </ul>
    <h3><strong>Recording</strong></h3>
    <ul>
        <li>Basic</li>
        <li>Desktop</li>
        <li>Web</li>
        <li>Citrix</li>
    </ul>
    <h3><strong>Application Manual Process</strong></h3>
    <ul>
        <li>Desktop manual process</li>
        <li>Web manual process</li>
        <li>Citrix manual process</li>
    </ul>
    <h3><strong>POC</strong></h3>
    <ul>
        <li>Desktop App POC</li>
    </ul>
    <h3><strong>Advanced UI Interaction, Selectors</strong></h3>
    <ul>
        <li>About Selectors</li>
        <li>Selectors with Wildcards</li>
        <li>Full versus Partial Selectors</li>
        <li>Ui Path Explorer</li>
        <li>Image and Text Automation</li>
    </ul>
    <h3><strong>Screen Scraping Methods</strong></h3>
    <ul>
        <li>Full Text</li>
        <li>Native</li>
        <li>OCR</li>
    </ul>
    <h3><strong>Data Scraping</strong></h3>
    <ul>
        <li>Extract Table data</li>
        <li>Extract similar data across Multiple Pages</li>
        <li>Open PDF Applications</li>
        <li>Extract fields from PDF</li>
        <li>PDF Activities</li>
        <li>Scan pdfs with Abbyy Cloud Ocr</li>
    </ul>
    <h3><strong>String Methods</strong></h3>
    <ul>
        <li>Split</li>
        <li>Replace</li>
        <li>Index Of</li>
        <li>Sub String</li>
    </ul>
    <h3><strong>Files and Folders</strong></h3>
    <ul>
        <li>Create Directory, File</li>
        <li>Delete file</li>
        <li>Copy file</li>
        <li>Open each file from given location</li>
    </ul>
    <h3><strong>Email Automation</strong></h3>
    <ul>
        <li>Web incoming and Outgoing Mails</li>
        <li>Outlook Incoming and Outgoing Mails</li>
        <li>Exchange Incoming and Outgoing Mails</li>
    </ul>
    <h3><strong>Debugging & Exception Handling</strong></h3>
    <ul>
        <li>Step by step execution</li>
        <li>finding validation errors</li>
        <li>Types of exceptions</li>
    </ul>
    <h3><strong>Automation</strong></h3>
    <ul>
        <li>Launching SAP Application</li>
        <li>Updating settings in SAP client and Server</li>
        <li>Sample workflow on SAP</li>
    </ul>
    <h3><strong>Toggle TitleCitrix\Remote Desktop Automation</strong></h3>
    <ul>
        <li>Introduction of Citrix</li>
        <li>Open application in Remote system</li>
        <li>Handle controls in Remote system</li>
    </ul>
    <h3><strong>Web Services</strong></h3>
    <ul>
        <li>What is Web Service?</li>
        <li>Web Activities</li>
        <li>Examples</li>
    </ul>
    <h3><strong>Parallel Activities</strong></h3>
    <ul>
        <li>Parallel for each</li>
        <li>Parallel</li>
    </ul>
    <h3><strong>Data base Activities</strong></h3>
    <ul>
        <li>Establish connectivity</li>
        <li>Retrieving data</li>
        <li>Data Updation</li>
    </ul>
    <h3><strong>XML Automation</strong></h3>
    <ul>
        <li>Xml Activities</li>
    </ul>
    <h3><strong>Application Integration</strong></h3>
    <ul>
        <li>Ms-Word</li>
        <li>CSV</li>
        <li>Text Files</li>
    </ul>
    <h3><strong>Libraries</strong></h3>
    <ul>
        <li>Reusable component creation</li>
        <li>Installation</li>
    </ul>
    <h3><strong>Framework</strong></h3>
    <ul>
        <li>What is Re-frame work?</li>
        <li>Advantages of Re-Frame work</li>
        <li>Re-frame work Implementation</li>
        <li>Sample Project</li>
    </ul>
    <h3><strong>Orchestrator</strong></h3>
    <ul>
        <li>Project Publish / deployment</li>
        <li>Create an Robot and environment</li>
        <li>Connection b/w UiPath Robot and Orchestrator</li>
        <li>Creating job</li>
        <li>Job Execution</li>
        <li>Job Scheduling</li>
        <li>cancelling and terminating jobs</li>
        <li>How the job queue works, handling pending jobs</li>
        <li>How to monitor of all Robots registered to the Orchestrator</li>
        <li>How levels of error messages are communicated</li>
        <li>What are UiPath Orchestrator assets?</li>
        <li>How to store credentials in the Orchestrator</li>
        <li>What are Orchestrator queues?</li>
        <li>How to use queues to work with lists of items that are handled by Robot</li>
    </ul>
    <h3><strong>Project -Explanation</strong></h3>
    <ul>
        <li>Real Time Use cases</li>
        <li>Project Description</li>
        <li>Project workflow Template</li>
        <li>Project Timelines&nbsp;</li>
        <li>Challenges Faced while BOT developemnt .</li>
    </ul>
    <h3><strong>Resume Preparation</strong></h3>
    <ul>
        <li>Professional Summary</li>
        <li>Roles and Responsibilities of a RPA Developer</li>
        <li>Consultancy Detai</li>
    </ul>

            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser15'>
      <div className="service15">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view15'><img/></div>
           <div>
           <h1>SQL AZURE</h1>
           <p>SQL AZURE COURSE IN HYDERABAD Microsoft Azure SQL Database is a managed cloud database provided as part of Microsoft Azure.
<br/>
Best Microsoft SQL Azure Training Institute: V Cube is the best Microsoft SQL Azure Training in Hyderabad Kukatpally providing sql azure online training in Hyderabad.you can connect directly to Azure SQL Database and create reports that use live data. You can keep your data at the source and not in Power BI.
<br/>
Duration:30 day</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><b>Introduction to Cloud Computing</b></h3>
    <ul>
        <li>What is Cloud Computing</li>
        <li>Need for Cloud</li>
        <li>Characteristics of Cloud</li>
        <li>Categories of Services</li>
        <li>Providers</li>
        <li>Azure</li>
        <li>Architecture</li>
        <li>Services</li>
        <li>Regions</li>
        <li>Subscriptions management</li>
    </ul>
    <h3><b>Azure VMs and Storage Accounts</b></h3>
    <ul>
        <li>VM Architecture</li>
        <li>Deploy VMs</li>
        <li>Create Storage Accounts for VMs</li>
        <li>Create a VM with Unmanaged Storage</li>
        <li>Manage VM Disks</li>
        <li>Configure Shared Storage</li>
        <li>Clean Up</li>
        <li>Supported Workloads</li>
    </ul>
    <h3><b>Configuration Management, Automation, and Debugging</b></h3>
    <ul>
        <li>Azure CLI</li>
        <li>Azure PowerShell</li>
        <li>Azure Cloud Shell</li>
        <li>VM Agent and Extensions</li>
        <li>ARM Templates</li>
        <li>PowerShell DSC</li>
        <li>Deploy and Enable Debugging for VM in Dev</li>
    </ul>
    <h3><strong>Networking in Azure</strong></h3>
    <ul>
        <li>Virtual Network Architecture</li>
        <li>Create a Virtual Network</li>
        <li>Create a Network Security Group</li>
        <li>Deploy VM to the Virtual Network</li>
        <li>Configure DNS</li>
        <li>Configure Static IP</li>
        <li>User-Defined Routing</li>
    </ul>
    <h3><strong>Scaling in Azure</strong></h3>
    <ul>
        <li>What is Scaling in Cloud</li>
        <li>Vertical Scaling</li>
        <li>Horizontal Scaling</li>
        <li>Scale Set</li>
        <li>Auto Scaling</li>
        <li>Horizontal Scaling</li>
    </ul>
    <h3><strong>Monitoring in Azure</strong></h3>
    <ul>
        <li>Azure Monitor</li>
        <li>What is Log Storage Account and Why it is needed?</li>
        <li>Boot Diagnostics</li>
        <li>Guest OS Diagnostics</li>
        <li>Host Metrics</li>
        <li>Creating Alerts</li>
        <li>Activity Logs</li>
    </ul>
    <h3><strong>High Availability</strong></h3>
    <ul>
        <li>What is Availability and how it is achieved?</li>
        <li>High Availability Architecture</li>
        <li>Availability Zones</li>
        <li>Availability Sets</li>
        <li>Create and Configure a Load Balancer</li>
        <li>Application Gateways</li>
        <li>Create VMs to work with Load Balancer</li>
        <li>Understanding N-Tier Application Architecture</li>
    </ul>
    <h3><strong>Storage in Azure</strong></h3>
    <ul>
        <li>Blob Storage</li>
        <li>Queue Storage</li>
        <li>Table Storage</li>
        <li>Azure Storage Explorer</li>
        <li>Content Delivery Network</li>
        <li>Azure SQL</li>
        <li>Redis Caching</li>
        <li>Cosmos DB</li>
    </ul>
    <h3><strong>Azure AD</strong></h3>
    <ul>
        <li>Blob Storage</li>
        <li>Queue Storage</li>
        <li>Table Storage</li>
        <li>Azure Storage Explorer</li>
        <li>Content Delivery Network</li>
        <li>Azure SQL</li>
        <li>Redis Caching</li>
        <li>Cosmos DB</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser16'>
      <div className="service16">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view16'><img/></div>
            <div>
            <h1>API TESTING</h1>
            <p>API TESTING :Application programming interface testing is a type of software testing that involves testing application programming interfaces (APIs) both directly and as part of integration testing to see if they meet functionality, reliability, performance, and security expectations. Because APIs lack a graphical user interface, API testing is done at the message layer. the  API is directly from their functionally reliability performance to security.
<br/>
DURATION:45 days </p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Introduction</strong></h3>
    <ul>
        <li>What is API Testing?</li>
        <li>Introduction to Web Service, SOAP and REST</li>
        <li>Licensed Open-Source API Automation Tools</li>
        <li>Overview of Postman</li>
        <li>Overview of Rest Assured</li>
    </ul>
    <h3><strong>Configuring Eclipse IDE</strong></h3>
    <ul>
        <li>Installation of Java</li>
        <li>Installation Eclipse IDE</li>
        <li>How to create new java project</li>
        <li>How to create a new java class</li>
        <li>Compiling and Running java class</li>
    </ul>
    <h3><strong>Data Types and Variables</strong></h3>
    <ul>
        <li>Introduction to Java programming</li>
        <li>Primitive and Non-Primitive Data types</li>
        <li>Types of Variable (Local, Instance and Static Variables)</li>
        <li>What is an Array?</li>
        <li>Working with Single Dimensional and Two- Dimensional Arrays</li>
    </ul>
    <h3><strong>Conditional Statements</strong></h3>
    <ul>
        <li>If else condition</li>
        <li>If else if Condition</li>
        <li>Switch case statement</li>
        <li>Examples for all the above conditions</li>
    </ul>
    <h3><strong>Loop Statements</strong></h3>
    <ul>
        <li>While loop</li>
        <li>Do while</li>
        <li>For loop</li>
        <li>For each loop</li>
        <li>Examples for all the above loops</li>
    </ul>
    <h3><strong>Classes and Objects</strong></h3>
    <ul>
        <li>How to create Classes, Objects and Object References</li>
        <li>Working with Constructors</li>
        <li>Working with Methods (instance, static)</li>
        <li>How to write user defined methods</li>
    </ul>
    <h3><strong>Encapsulation</strong></h3>
    <ul>
        <li>What is Package</li>
        <li>Access Modifiers (private, default, protected and public)</li>
        <li>Encapsulation</li>
    </ul>
    <h3><strong>Inheritance</strong></h3>
    <ul>
        <li>What is Inheritance?</li>
        <li>Why to use Inheritance?</li>
        <li>Single Level Inheritance, Multi-Level Inheritance</li>
        <li>super keyword this keyword</li>
    </ul>
    <h3><strong>Polymorphism</strong></h3>
    <ul>
        <li>What is polymorphism?</li>
        <li>Compile time Polymorphism</li>
        <li>Method overloading</li>
        <li>Constructor overloading</li>
        <li>Runtime Polymorphism</li>
        <li>Method Overriding</li>
        <li>final keyword</li>
    </ul>
    <h3><strong>Interface &amp; Abstract Class</strong></h3>
    <ul>
        <li>How to define Interface</li>
        <li>How to implement Interface</li>
        <li>Multiple Inheritance (Through Interface)</li>
        <li>How to define Abstract Class</li>
        <li>Implements vs. extends</li>
        <li>Interface vs. Abstract class vs. Concrete Class</li>
    </ul>
    <h3><strong>Exception handling</strong></h3>
    <ul>
        <li>What are exceptions and errors?</li>
        <li>Checked Exception or Compile time Exception</li>
        <li>Unchecked Exception or Runtime Exception</li>
        <li>How to handle exceptions in the program?</li>
        <li>Using try , catch and finally blocks</li>
    </ul>
    <h3><strong>Collections</strong></h3>
    <ul>
        <li>Overview of Collections API</li>
        <li>List, Set, Map interfaces</li>
        <li>Working with elements of a Collection</li>
        <li>Examples for all the above concepts</li>
    </ul>
    <h3><strong>Debug Java code / Scripts in Eclipse</strong></h3>
    <ul>
        <li>Understanding Debug</li>
        <li>Using Breakpoints</li>
        <li>Verify the values during debug</li>
        <li>Using step over, step into</li>
    </ul>
    <h3><strong>Apache POI</strong></h3>
    <ul>
        <li>Configuration of Apache POI.</li>
        <li>Workbook ,Sheet ,Row ,Cell Interfaces methods</li>
        <li>HSSF Workbook, HSSF Sheet, HSSF Row, HSSF Cell methods</li>
        <li>XSSF Workbook, XSSF Sheet, XSSF Row, XSSF Cell methods</li>
        <li>How to read data from Excel file(XLS or XLSX)</li>
        <li>How to write data to Excel file(XLS or XLSX)</li>
    </ul>
    <h3><strong>TestNG</strong></h3>
    <ul>
        <li>TestNG Features</li>
        <li>Configuration of TestNG with Eclipse IDE</li>
        <li>Different TestNG Annotations</li>
        <li>Create TestNG.xml file</li>
        <li>Reporting Results</li>
        <li>Assert methods</li>
        <li>Hard Assert vs. Soft Assert</li>
        <li>How to pass parameters using TestNG.xml</li>
        <li>How to use DataProvider</li>
    </ul>
    <h3><strong>POSTMAN</strong></h3>
    <ul>
        <li>Download and Configure Postman</li>
        <li>GET,POST,PUT,PATCH,DELETE requests</li>
        <li>Overview of JSON and XML</li>
        <li>How to send Request and receive Response?</li>
    </ul>
    <h3><strong>REST Assured</strong></h3>
    <ul>
        <li>Configure REST Assured with Eclipse IDE</li>
        <li>GET,POST,PUT,PATCH,DELETE requests</li>
        <li>Different Status codes in API Testing</li>
        <li>How to send Request and receive Response?</li>
        <li>Assertions in REST Assured</li>
        <li>Integration with Excel using Apache POI</li>
        <li>Request and Response Logging</li>
        <li>How to extract JSON response</li>
        <li>How to extract XML response</li>
    </ul>
    <h3><strong>Maven</strong></h3>
    <ul>
        <li>What is maven?</li>
        <li>Creating Maven project in Eclipse</li>
        <li>Adding dependencies to pom.xml</li>
        <li>Maven Integration with Apache POI, TestNG</li>
        <li>Maven Lifecycle</li>
        <li>Executing Scripts Using Maven build tool</li>
    </ul>
    <h3><strong>Jenkins</strong></h3>
    <ul>
        <li>Overview of Jenkins</li>
        <li>Configuration of Jenkins</li>
        <li>Configure Maven project in Jenkins</li>
        <li>Creating Jobs in Jenkins</li>
        <li>Scheduling Jobs for timely Execution</li>
        <li>Configure Email notification in Jenkins</li>
        <li>Integration with Jenkins (CI Tool)</li>
    </ul>
    <h3><strong>GitHub</strong></h3>
    <ul>
        <li>How to create GitHub</li>
        <li>Configure Git and GitHub with Eclipse</li>
        <li>Git &amp; GitHub Commands</li>
    </ul>
    <h3><strong>Automation Life Cycle</strong></h3>
    <ul>
        <li>What is a Framework?</li>
        <li>How to implement Framework</li>
        <li>Framework Integration with Maven and Jenkins</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf9.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser17'>
      <div className="service17">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view17'><img/></div>
            <div>
            <h1>DATA SCIENCE</h1>
            <p>DATA SCIENCE : It is an inter-disciplinary field that uses scientific methods, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Power Bi is an all-in-one high-level tool for the data analytics part of data science. It can be thought of as less of a programming-language type application, but more of a high-level application akin  like Microsoft Excel. 
<br/>
Duration:60 days </p>
            <h2>COURSE STRUCTURE</h2>
            <h2>Why data science is so popular?</h2>
            <p>Data Science: In the wonderful and vast world of data science in 2020, there are a plethora of options and approaches to analytics and machine-learning. While most data scientists approach a solution using popular programming languages such as Python, R, Scala, or even Julia, there are some higher-level implementations that can get the job done in some cases. Microsoft’s Power-Bi is a great example of this.
<br/>
You will need a Windows system to install Power-Bi. I’m a Fedora user, so I used Gnome’s Boxes to boot up a new virtual kernel. Boxes is a QEMU GUI that makes it incredibly simple to run multiple virtual systems under one operating system at the same time. Alternatively, you could always use the application’s online version. In my limited experience with the web-friendly version, I discovered that the features are rather lacking in comparison and are frequently split between the two.</p>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser18'>
      <div className="service18">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view18'><img/></div>
            <div>
            <h1>ANGULAR-9</h1>
            <p>ANGULAR 9 Best Angular Training in Hyderabad Kukatpally: V Cube is the best AngularJS Training Institute in Hyderabad providing Online Angular Training Institutes in Hyderabad by Experts Angular is one among the foremost prominent open-source frameworks for building web and mobile applications. Developed by Google, Angular 9 has evolved over the years into a comprehensive development framework that has all of the tools and components required to create an internet app. 
<br/>
Duration:45days </p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Why angular training in Hyderabad course</strong></h3>
    <ul>
        <li>This is an honest thing, it keeps things up-to-date with the newest best practices and latest features supported by TypeScript or JavaScript.</li>
        <li>Developers also now have clear syntax and clear project and structure.</li>
        <li>the most advantage of Ivy is that it’s ready to significantly reduce the dimensions of applications, no matter size.</li>
    </ul>
    <h3><strong>Why Angular9 Training in V Cube Software Solutions</strong></h3>
    <ul>
        <li>V Cube Software Solutions offers the simplest Angular9 training in Hyderabad with a real-time project.</li>
        <li>V Cube Software Solutions Trainers have quite 5 years of experience in their field and that they can train students alright.</li>
        <li>V Cube Software Solutions provides a good academic curriculum and it meets the market requirements.</li>
        <li>Perform A regular tasks and daily assessments to assist improve their technical skills.</li>
        <li>Daily class notes will send via Mail.</li>
    </ul>
    <ol>
    </ol>
    <h3><strong>Angular 9 Features</strong></h3>
    <ul>
        <li>Smaller bundles and better performance.</li>
        <li>Added undecorated classes migration schematic within the core.</li>
        <li>Support for TypeScript and Diagnostics Format.</li>
        <li>The form Control Name also accepts variety within the form.</li>
        <li>The form Control Name also accepts variety within the form.</li>
        <li>Selector-less directives as base classes in sight Engine within the compiler.</li>
    </ul>
    <h3><strong>Course Requirements or Prerequisites</strong></h3>
    <ul>
        <li>In order to follow this tutorial, you will need to possess a development environment ready for front-end development with Angular.</li>
        <li>Basic knowledge of TypeScript,</li>
        <li>Basic knowledge of Unix bash for macOS and Also Linux users,</li>
        <li>basic knowledge of CMD or Power shell for Windows users.</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser19'>
      <div className="service19">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view19'><img/></div>
            <div>
            <h1>MULESOFT</h1>
            <p>MULESOFT: MuleSoft Any point Platform is the world’s leading integration platform for SOA, SaaS, and APIs. Mule Soft training in Hyderabad Kukatpally has flexible course schedules that suit working professionals & jobseekers. Enroll for Mule Soft training institutes in Hyderabad and get trained with experts. Mule Soft training course is designed according to the Mule Soft certification.
            <br/>
DURATION:40 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>INTRODUCTION TO ANYPOINT PLATFORM</strong></h3>
    <ul>
        <li>Describe benefits of the Any point Platform and MuleSoft approach</li>
        <li>What is MuleSoft and ESB</li>
        <li>How the mule soft operates</li>
        <li>Advantages with the MuleSoft</li>
        <li>Benefits of MuleSoft and its success approach</li>
        <li>Mule any point platform and its components</li>
        <li>Key capabilities of MuleSoft</li>
        <li>purpose of each file and folder in a Mule project</li>
        <li>Any point Studio to create the Mule flows graphically</li>
        <li>Role of each component in building application networks</li>
        <li>Logging message processors data</li>
        <li>Read and write message properties</li>
        <li>Build, run, and test a Mule application</li>
        <li>Application local testing</li>
    </ul>
    <h3><strong>STRUCTURING OF MULE APPLICATIONS</strong></h3>
    <ul>
        <li>Use flows, sub-flows, private flows, a sync, and the flow references</li>
        <li>Specify the properties of application in a separate properties file and use them in the application</li>
        <li>Cover global elements in separate configuration files, mule domain project</li>
        <li>Define and manage the application metadata</li>
    </ul>
    <h3><strong>BASICS</strong></h3>
    <ul>
        <li>Create variables, payload, attributes</li>
        <li>Define properties of Mule and create properties files, along with types.</li>
    </ul>
    <h3><strong>DEBUGGING AND TROUBLESHOOTING OF THE MULE APPLICATIONS</strong></h3>
    <ul>
        <li>Use breakpoints to inspect a Mule event during runtime</li>
        <li>Install missing Maven dependencies</li>
    </ul>
    <h3><strong>WRITING DATAWEAVE TRANSFORMATIONS</strong></h3>
    <ul>
        <li>Methods to write data weave scripts</li>
        <li>Writing the Data Weave expressions for basic to extensive XML, JSON, fland file transformations</li>
        <li>Define and use global and local variables and functions</li>
        <li>Read and write files using data weave scripts</li>
        <li>Use Data Weave functions</li>
        <li>Coerce and format strings, numbers, and dates</li>
        <li>Define and use of the custom data types</li>
        <li>Call Mule flows from Data Weave expressions</li>
        <li>Transform base type to destination types</li>
    </ul>
    <h3><strong>SCOPES</strong></h3>
    <ul>
        <li>Configure and use of the batch processing</li>
        <li>Use of the Cache Scope to store and reuse frequently called data</li>
        <li>Create and manage caching strategies</li>
        <li>Use Enrichers to enhance a Mule message</li>
    </ul>
    <h3><strong>CONTROL</strong></h3>
    <ul>
        <li>Use splitters, aggregators, and the multicast routers</li>
        <li>Use the For-each scope</li>
    </ul>
    <h3><strong>USING CONNECTORS</strong></h3>
    <ul>
        <li>Using of the Http and Https connector to send and receive secure and non-secures and exposing services over the internet</li>
        <li>Retrieving the data from a Database using the Database connector</li>
        <li>Creating parameterized SQL queries for the Database connector</li>
        <li>Retrieving data from a REST service using HTTP Request or a REST Connector</li>
        <li>Uses of a Web Service Consumer connector to consume SOAP web services&nbsp;&nbsp;&nbsp;&nbsp; Uses of the Transform Message component to pass arguments to a SOAP web service</li>
        <li>List, read, and write local files using File connector</li>
        <li>List, read, and write remote files using FTP connector</li>
        <li>Use of the JMS connector to publish and listen for JMS messages</li>
    </ul>
    <h3><strong>ROUTING EVENTS</strong></h3>
    <ul>
        <li>Use of the Choice router to route events based on conditional logic</li>
        <li>Use of the Scatter-Gather router to multicast events</li>
        <li>Validate the data using the Validation module</li>
    </ul>
    <h3><strong>CONTROLLING EVENT FLOW</strong></h3>
    <ul>
        <li>Multicast events</li>
        <li>Route events based on the conditions</li>
        <li>Validate events</li>
    </ul>
    <h3><strong>HANDLING ERRORS</strong></h3>
    <ul>
        <li>Handling messaging errors at the application, flow, and processor level</li>
        <li>Handling different types of errors, including custom errors</li>
        <li>Use various error scopes to either handle an error and continue execution of</li>
        <li>the parent flow or propagate an error to the parent flow</li>
        <li>Setting the success and error response settings for an HTTP Listener</li>
        <li>Setting reconnection strategies for system errors</li>
    </ul>
    <h3><strong>TRIGGERING FLOWS</strong></h3>
    <ul>
        <li>Read and write files</li>
        <li>Trigger flows when the files were added, created, or updated with in the folder</li>
        <li>Trigger flows when the new records are add to a database table</li>
        <li>Schedule flows to run at the specific time or frequency</li>
        <li>Persist and shares the data in flows using the Object Store.</li>
    </ul>
    <h3><strong>PROCESSING RECORDS</strong></h3>
    <ul>
        <li>Uses of the filtering and aggregation in a batch step</li>
        <li>Process items in the collection using the For Each scope</li>
    </ul>
    <h3><strong>DRIVING DEVELOPMENT WITH MUNIT</strong></h3>
    <ul>
        <li>Create the acceptance criteria</li>
        <li>Fail and pass test</li>
        <li>Refactor test cases</li>
        <li>Refactor Mule applications</li>
    </ul>
    <h3><strong>INTRODUCTION TO APPLICATION NETWORKS AND API-LED CONNECTIVITY</strong></h3>
    <ul>
        <li>Explain what an application network is and what are its benefits</li>
        <li>Describe how to build the application network using the API-led connectivity</li>
        <li>Explain what are web services and APIs are</li>
        <li>Make calls to the secure and unsecured APIs (oauth, oauth 2.0, ntlm, basic, diggest)</li>
    </ul>
    <h3><strong>DESIGNING APIS</strong></h3>
    <ul>
        <li>Define APIs with the RAML, the Restful API Modeling Languages</li>
        <li>Mock APIs to test the design before they are built</li>
        <li>Make the APIs discoverable by adding them to the private Anypoint Exchange</li>
        <li>Create the public API portals for external developers</li>
    </ul>
    <h3><strong>BUILDING APIS</strong></h3>
    <ul>
        <li>Use the Anypoint Studio to build, run, and to test Mule applications</li>
        <li>Use the connector to connect to database</li>
        <li>Use graphical DataWeave editor to transform data</li>
        <li>Create the RESTful interfaces for applications from RAML files</li>
        <li>Connect API interfaces with the API implementations</li>
    </ul>
    <h3><strong>DESIGNING – RESTFUL APIS AND SOAP APIS</strong></h3>
    <ul>
        <li>Design and develop the Web APIs</li>
        <li>Destination and explanation of the soap and WSDL file and its structure along with the elements(wssecurity, soup faults, soup envelope and others as well) of message&nbsp;&nbsp;Reuse of the apis with help of Traits, Schemas,Resource Types implementation</li>
        <li>Implement and use of the plug and playable features via overlays, extinctions, libraries, includes and annotations types</li>
        <li>Mock the API to the test its design before it is built</li>
        <li>Creation of a portal for developers to learn how to use an API</li>
        <li>Applying policies for the Web API</li>
        <li>API Proxy and API Gateway</li>
    </ul>
    <h3><strong>CONSUMING WEB SERVICES</strong></h3>
    <ul>
        <li>Consume the web services that have a connector in Anypoint Exchange</li>
        <li>Consume the RESTful web services</li>
        <li>Consume the SOAP web services</li>
        <li>Pass parameters to the SOAP web services using Transform Message component</li>
        <li>Transform the data from multiple services to the canonical format</li>
    </ul>
    <h3><strong>DEPLOYING AND MANAGING APIS</strong></h3>
    <ul>
        <li>Describe options for the deploying Mule applications</li>
        <li>Deploy the Mule applications to the Cloud Hub</li>
        <li>Use API Manager for create and to deploy API proxies</li>
        <li>Use the API Manager to restrict access to API proxies</li>
    </ul>
    <h3><strong>ACHIEVING THE CONTINUOUS INTEGRATION AND CONTINUOUS DEVELOPMENT</strong></h3>
    <ul>
        <li>Creation of CI job</li>
        <li>Triggering of the builds</li>
        <li>Automate deployments</li>
    </ul>
    <h3><strong>DEPLOYING AND MANAGING OF APPLICATIONS</strong></h3>
    <ul>
        <li>Properties files and handling of the secure properties</li>
        <li>Use properties in the Mule applications to move between the environments</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser20'>
      <div className="service20">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view20'><img/></div>
            <div>
            <h1>AZURE DATA FACTORY</h1>
            <p>Azure Data Factory Training in Hyderabad Kukatpally: Azure data factory (ADF) is a cloud-based ETL & Data Integration service. Our goal is to enhance our students’ capabilities by providing the best Azure data factory training in kukatpally. We train our students to write codes for managing & handling data movement & transformation. We fully prepare you for ADF & the live lectures we offer make learning more credible & straight-forward.</p>
            <h2>COURSE STRUCTURE</h2>
            <ul>
    <li>Introduction to cloud, different cloud service providers and where Azure stands in the market.</li>
</ul>
<ul>
    <li><b>Classification of cloud services </b>
        <ul>
            <li>IaaS, PaaS, SaaS</li>
            <li>Public, Private, Hybrid</li>
        </ul>
    </li>
    <li>Subscribing to Azure, connecting to Azure environment</li>
    <li>Different components and services available in Azure</li>
    <li><b>Create resources/components in Azure, uses of each component. </b>
        <ul>
            <li>Resource Groups and their need/importance</li>
            <li>Storage
                <ol>
                    <li>Azure Data Lake</li>
                    <li>Azure Blob storage</li>
                    <li>Azure SQL Database</li>
                </ol>
            </li>
            <li>Data Management
                <ol>
                    <li>Azure Data Factory v2</li>
                    <li>Logic Apps</li>
                    <li>Azure Data Bricks</li>
                    <li>Azure Synapse Analytics</li>
                </ol>
            </li>
            <li>Security
                <ol>
                    <li>Azure Key Vault</li>
                </ol>
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li><b>Components in ADF v2: </b>
        <ul>
            <li>Pipelines</li>
            <li>Activities</li>
            <li>Datasets</li>
            <li>Linked Services</li>
            <li>Triggers
                <ol>
                    <li>Scheduled Trigger</li>
                    <li>Tumbling Window</li>
                    <li>Event Based</li>
                    <li>Debugging</li>
                </ol>
            </li>
            <li>Parameters</li>
            <li>Integration Run Time</li>
            <li>Data Flow</li>
            <li>Power Query</li>
        </ul>
    </li>
</ul>
<ul>
    <li><b>ADF V2 </b>
        <ul>
            <li>Different types of Activities with examples</li>
            <li>Different control flows with examples</li>
            <li>Debugging errors</li>
            <li>Copy data from Data Lake Storage to Azure SQL</li>
            <li>Copy data from Azure Blob Storage to Azure SQL</li>
            <li>Copy data from On Premise Database to Azure SQL</li>
            <li>Copy Data from Rest API to Azure SQL</li>
            <li>Multiple Real Time Scenarios</li>
        </ul>
    </li>
    <li><b>Azure Synapse Analytics </b>
        <ul>
            <li>Workspace in Synapse</li>
            <li>Synapse Serverless vs Dedicated Pool</li>
            <li>Analyze data with dedicated and serverless pool.</li>
            <li>Distributions in Azure Synapse</li>
            <li>Create External Data Sources in Azure Synapse</li>
            <li>Create External File Format in Azure Synapse</li>
            <li>Create External Table as Select</li>
            <li>Create Table as Select</li>
            <li>Temporary Tables</li>
            <li>Surrogate Keys</li>
            <li>OPENROWSET() Function</li>
            <li>Apache Spark and Spark Pools in Synapse</li>
            <li>Creating Notebooks in Azure Synapse.</li>
        </ul>
    </li>
    <li><b>Logic Apps </b>
        <ul>
            <li>Introduction to Logic Apps</li>
            <li>Connectors in Logic Apps</li>
            <li>Send email from Azure Logic Apps</li>
        </ul>
    </li>
    <li><b>Azure Databricks </b>
        <ul>
            <li>Introduction to Azure Databricks</li>
            <li>Workspace in Databricks</li>
            <li>Azure Databricks Architecture</li>
            <li>Databricks File System</li>
            <li>Databricks Utilities</li>
            <li>Widgets</li>
            <li>Parameterize Databricks notebooks.</li>
            <li>Mount Points</li>
            <li>Configure access to storage account.</li>
            <li>Access Data lake storage</li>
        </ul>
    </li>
</ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser21'>
      <div className="service21">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view21'><img/></div>
            <div>
            <h1>WEB DESIGN</h1>
            <p>Web designing is mentioned in the pattern of websites that are shown on the World Wide Web. Web design used to be Condensed on designing websites for browsers. However, design for mobile and tablet browsers has become ever-increasingly fundamental. A web designer works on the look, design, and content of a website. Apparent, for instance, relates to the colors, font family, and photos used. Design refers to how content is arranged and classified.
<br/>
Web Designing in Kukatpally Duration : 45days </p>
            <h2>COURSE STRUCTURE</h2>
            <h3>Why learn designing course:</h3>

<ul>
    <li>Today world having a powerful, professional looking website an essential for just about in anyone looking for a new career.</li>
    <li>As an individual, you can build your own brand and promote yourself with in a website or blog.</li>
    <li>Save money on marketing just about everyone needs a website today’s day and age. you can spend a lot of money hiring a web design.</li>
    <li>Enjoy your creative side in Web design can be great for A creative types because it allows you to create something both beautiful and functional, all from your computer.</li>
</ul>

<h3>Why Web designing course in kukatpally @V Cube Software Solutions</h3>

<ul>
    <li>V Cube offers the best Web designing training in Hyderabad with a real-time project.</li>
    <li>V Cube Trainers have more than 5 years of experience in their field and they can train students very well.</li>
    <li>V Cube provides a wide academic curriculum and it meets the market requirements.</li>
    <li>Daily class notes will send via Mail.</li>
    <li>V Cube provide course completion certificate.</li>
    <li>After course complete gaining hands on knowledge and Real time experience.</li>
</ul>

<h3>Objectives of web designing:</h3>

<ul>
    <li>Looking for a position coming within 5 years of experience in visual UI front end development work</li>
    <li>To see employment&nbsp; where exceptional knowledge of HTML, CSS, CSS3, Bootstrap, PHP, Angular js and other programming language</li>
    <li>A Full stack web developer, competent in A both front end and back-end aspects of web projects.</li>
    <li>To Be able to embed Social Media content in to a Web page.</li>
</ul>

<h3>Course Requirements and Prerequisites:</h3>

<ul>
    <li>Write the HTML code that’s presented in the user’s browser.</li>
    <li>Write program code to make the site respond to the user’s clicks.</li>
    <li>Communicate with a database to store data users enter.</li>
    <li>Provide data to iOS And Android apps through JSON or XML APIs.</li>
</ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser22'>
      <div className="service22">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view22'><img/></div>
            <div>
            <h1>FULL STACK .NET DEVELOPER</h1>
            <p>.NET FULL STACK DEVELOPER : Microsoft released the.NET framework in 2002 as an open-source tool for full stack developers, but it is also regarded by many as a set of programming guidelines for web application development. Although it was originally designed to run on Windows, it was initially considered as an alternative to Java and PHP. However, its various platforms can be used on different operating systems .

 
<br/>
Duration : 45 days </p>
            <h2>COURSE STRUCTURE</h2>
           <h2>Description of the Full Stack . net developer</h2>
<h3>Best .Net Fullstack Training Institute in Hyderabad</h3>
<p>A Full-Stack.NET Developer is an expert who can build and manage an application’s entire stack, including the front-end, back-end, database, version control, server, and APIs. This learning path focuses on C#, SQL Server, ASP.NET MVC, Web API, Entity Framework Code First, Bootstrap, and HTML5, which are required to build a real-world.NET application. FCL offers its user-friendly interface access to data as well as database connectivity as well as cryptography, developing web applications, numeric algorithm along with network connectivity. Programmers create software by combing the program’s source code together with .NET Framework and other libraries. The framework is designed to be used by the majority of new programs created using Microsoft’s Windows platform. Microsoft also offers an integrated development environment for .NET software, dubbed Visual Studio.
<br/>.NET Framework began as the first software that was proprietary however, the company was working on make it a common platform for its software platform nearly immediately, before even the release of its first version. Despite efforts to standardize the software stack the developers, especially those who belong to the open-source and free software communities, expressed displeasure with the chosen terms as well as the possibility of a open-source or free-of-cost implementation, specifically in regards to patents for software. Since then, Microsoft has changed .NET development to better adhere to the current model of a software developed by a community project. This includes releasing updates to their patent that promises to address the issues. 

<br/>In April of this year, Microsoft released .NET Framework 4.8 which was the final version that the Framework was released that was a private product. The framework is only updated monthly for security and bugs for this version were released since the time of release. There are no further changes to this version is planned.</p>
<h3>What is Full stack Developer?</h3>
<p>Dot Net Framework is a Microsoft-developed proprietary software framework that runs largely on Microsoft Windows. Until the cross-platform DOT NET project replaced it, it was the most common implementation of the Common Language Infrastructure (CLI). It includes the Framework Class Library (FCL), which is a big class library that offers language interoperability (each language can use code written in other languages) across a variety of computer languages. Programs built for the DOT NET Framework run in a software environment called the Common Language Runtime (as opposed to a hardware environment) (CLR). The CLR is an application virtual machine that handles security, memory management, and exception handling among other things. As a result, computer code created with the Dot Net Framework is referred to as “managed code”. The Dot Net Framework is made up of FCL and CLR.</p>
<p>Why learn Dot Net Full Stack Training with V CUBE Software Solutions?
<br/>
Even before its first release, the Dot Net Framework was private software, but the company sought to standardize the software stack almost immediately. Despite the efforts to standardize, developers, particularly those in the free and open-source software community, expressed their dissatisfaction with the chosen terms and the chances of any free and open-source implementation, particularly in the area of software patents. Since then, Microsoft has altered DOT NET development to more closely resemble a modern form of community-developed software, including publishing an update to its patent that promises to resolve the problems. Dot Net Full Stack is a finest certification training from V CUBE Software solutions in kphb is a complete approach to learning Dot Net. We guarantee that our Dot net Training Institute in Hyderabad will provide you with the highest level of satisfaction at the end of the course, and that you will leave with confidence and hands-on experience. Join us now for Dot net full stack course online in KPHB to upgrade your dot net full stack developer skills.</p>

            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser23'>
      <div className="service23">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view23'><img/></div>
           <div>
           <h1>DIGITAL MARKETING</h1>
           <p>DIGITAL MARKETING: Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services. V cube software solutions offers Digital marketing course in Kukatpally, Hyderabad.
<br/>
DURATION:45 days</p>
           <h2>COURSE STRUCTURE</h2>
           <ul>
        <li>Start Digital Marketing Agency to provide Multiple DM services</li>
        <li>Plan for startup company &amp; become entrepreneur</li>
        <li>Create a website &amp; earn through ads</li>
        <li>Become SEM expert &amp; Provide services</li>
        <li>Become a content developer/writer</li>
        <li>Register &amp; earn as freelancer</li>
        <li>Become content marketing vendor &amp; sell content in bulk</li>
        <li>Become SEO expect &amp; boost client websites</li>
        <li>Apply for Digital Marketing specialist Openings in the Market</li>
        <li>Add Digital marketing skills in your job profile</li>
    </ul>
    <p><strong>Important Topics, Tips &amp; Tricks</strong></p>
    <ul>
        <li>We help each individual to run a website from scratch</li>
        <li>We provide live projects to practice</li>
        <li>We guide you how to register &amp; become freelancer</li>
        <li>We refer interested students to the content marketing agencies for content writer position.</li>
        <li>We consider talented students to work on our own multiple projects as SEO executive based on our requirement.</li>
    </ul>
    <p><strong>Google Partner Certification Assistance</strong></p>
    <ul>
        <li>We guide you to get Google Ads certified Partner Program</li>
    </ul>
    <h3>Marketing Basics</h3>
    <ul>
        <li>What is Digital Marketing?</li>
        <li>Advantages Of Digital Marketing</li>
        <li>4P’s of Marketing</li>
        <li>Advanced 7P’s Marketing Mix.</li>
        <li>Definitions of Branding, Marketing, Advertising, Promotions and Sales.</li>
        <li>What is domain & Exact Match domain?</li>
        <li>What is Google algorithm update?</li>
        <li>What is Google Panda update?</li>
        <li>What is Google Penguin update?</li>
        <li>What is Google Hummingbird update?</li>
        <li>What is Fred update?</li>
        <li>What are black hat &amp; white hat &amp; greyhat technique?</li>
        <li>How to keep website safe from Google penalties?</li>
        <li>How to analyze website &amp; audit?</li>
        <li>How to do competitors research?</li>
        <li>How to find suitable niche of your interest?</li>
        <li>What are the tools to find trending topic in the market?</li>
        <li>What is site authority, page authority, link juice?</li>
    </ul>
    <h3>Introduction to Digital Marketing</h3>
    <ul>
        <li>Types of Digital Marketing</li>
        <li>Digital Marketing VS Traditional Marketing.</li>
        <li>Traditional Marketing Funnel.</li>
        <li>Brand/Product Visibility.</li>
        <li>Traffic – Targeted Vs Non-targeted.</li>
        <li>Converting Traffic into Leads.</li>
        <li>Visitor Engagement.</li>
        <li>Visitor Retention.</li>
    </ul>
   <h3>Digital Marketing Modules</h3>
    <h4>Introduction to SEO</h4>
    <ul>
        <li>What is Search Engine, How it work?</li>
        <li>How does the Search engine works?</li>
        <li>What is SEO?</li>
        <li>Introduction to SERP</li>
        <li>Ranking Methodology</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser24'>
      <div className="service24">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view24'><img/></div>
           <div>
           <h1>TESTING TOOLS</h1>
           <p>The Software Testing Tools program is intended for graduates from any field. In the Software Development Life Cycle, it is process-oriented. A Quality Analyst analyses the program and provides assurance to the client/end user during the Software Testing Life Cycle. Join V cube software solutions for best  testing tools online training in Hyderabad.
<br/>
Duration : 30 days</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Introduction to Software Testing</strong></h3>
    <ul>
        <li>What is software Testing</li>
        <li>Why Software Testing</li>
        <li>Benefits of Software Testing</li>
        <li>Who will do the Software Testing</li>
        <li>What is Quality</li>
        <li>What is Defect</li>
        <li>Project Vs Product</li>
    </ul>
    <h3><strong>Software Development Life Cycle (SDLC)</strong></h3>
    <ul>
        <li>What is Software Development Life Cycle</li>
        <li>Why Software Development Life Cycle</li>
        <li>Phases of Software Development Life Cycle</li>
        <li>Initial</li>
        <li>Analysis</li>
        <li>Design</li>
        <li>Coding</li>
        <li>Testing</li>
        <li>Delivery & Maintenance</li>
    </ul>
    <h3><strong>Software Development Life Cycle (SDLC ) Models</strong></h3>
    <ul>
        <li>Waterfall model</li>
        <li>V-model</li>
        <li>Prototype Model</li>
        <li>Agile Model with Scrum Method</li>
    </ul>
    <h3><strong>Software Testing Methodologies Black box Testing</strong></h3>
    <ul>
        <li>Black box Testing</li>
        <li>What is Black Box Testing</li>
        <li>Who will Perform Black Box Testing</li>
        <li>How to Perform Black Box Testing</li>
        <li>Black Box Testing Techniques</li>
    </ul>
    <h3><strong>White Box Testing</strong></h3>
    <ul>
        <li>What is White Box Testing</li>
        <li>Who will Perform Block Box Testing</li>
        <li>How to Perform White Box Testing</li>
        <li>White Box Testing Techniques</li>
    </ul>
    <h3><strong>Gray Box Testing</strong></h3>
    <ul>
        <li>What is Gray Box Testing</li>
        <li>Who will Perform Gray Box Testing</li>
        <li>How to Perform Gray Box Testing</li>
        <li>Gray Box Testing Techniques</li>
    </ul>
    <h3><strong>LEVELS OF TESTING UNIT TESTING</strong></h3>
    <ul>
        <li>What is Unit Testing</li>
        <li>Who will Perform Unit Testing</li>
        <li>How to Perform Unit Testing</li>
    </ul>
    <h3><strong>VERIFICATION & VALIDATION VERIFICATION</strong></h3>
    <ul>
        <li>What is verification</li>
        <li>Who will perform</li>
        <li>Verification techniques</li>
        <li>Reviews</li>
        <li>Audits</li>
        <li>Walkthrough</li>
    </ul>
    <h3><strong>VALIDATION</strong></h3>
    <ul>
        <li>What is validation</li>
        <li>Who will perform</li>
        <li>Validation techniques</li>
    </ul>
    <h3><strong>FUNCTIONAL & NON-FUNCTIONAL TESTING</strong></h3>
    <ul>
        <li>Smoke testing</li>
        <li>Sanity testing</li>
        <li>Re-testing</li>
        <li>Regression testing</li>
        <li>Exploratory testing</li>
        <li>Monkey testing</li>
        <li>End to end testing</li>
        <li>Recovery testing</li>
    </ul>
    <h3><strong>NON-FUNCTION TESTING</strong></h3>
    <ul>
        <li>User interface testing</li>
        <li>Usability testing</li>
        <li>Stress testing</li>
        <li>Load testing</li>
        <li>Localization testing</li>
        <li>Performance testing</li>
        <li>Security testing</li>
        <li>Compatibility testing</li>
        <li>Installation testing</li>
    </ul>
    <h3><strong>WINDOWS & WEB APPLICATION</strong></h3>
    <ul>
        <li>What is windows application</li>
        <li>What is web application</li>
        <li>Difference between windows and web application</li>
        <li>Checklist for windows application</li>
        <li>Checklist for web application</li>
    </ul>
    <h3><strong>SOFTWARE TESTING LIFE CYCLE (STLC) TEST PLANNING</strong></h3>
    <ul>
        <li>What is test plan</li>
        <li>What test plan contains</li>
        <li>Who will prepare test plan</li>
        <li>Test strategy</li>
        <li>Test plan vs test strategy</li>
    </ul>
    <h3><strong>TEST CASE DESIGN</strong></h3>
    <ul>
        <li>Identify the test scenarios</li>
        <li>Identifying test plan contains</li>
        <li>Test case techniques</li>
        <li>Boundary value analysis</li>
        <li>Equivalence class portioning</li>
        <li>Error guessing</li>
        <li>Preparing the test cases</li>
        <li>Test data preparation</li>
        <li>Types of test cases</li>
        <li>Functional test case</li>
        <li>Non-functional test cases</li>
        <li>Positive test cases</li>
        <li>Test case review</li>
        <li>Peer review</li>
        <li>Lead review</li>
        <li>Client review</li>
        <li>Review checklist</li>
        <li>Traceability matrix</li>
    </ul>
    <h3><strong>TEST EXECUTION</strong></h3>
    <ul>
        <li>Release process</li>
        <li>Different environments involved in testing</li>
        <li>What is environment</li>
        <li>How many environments QA do have</li>
        <li>Executing the test cases</li>
    </ul>
    <h3><strong>RESULT ANALYSIS & REPORTING</strong></h3>
    <ul>
        <li>Analyze the test cases (pass/fail)</li>
        <li>Defect reporting</li>
        <li>Defect life cycle</li>
        <li>What is severity</li>
        <li>What is priority</li>
        <li>Severity vs priority</li>
        <li>Different defect tracking tools</li>
    </ul>
    <h3><strong>DELIVERY AND MAINTENANCE</strong></h3>
    <ul>
                <li>Exit criteria for testing sign off</li>
        <li>Test summary report</li>
        <li>Delivery process</li>
        <li>What is maintenance</li>
        <li>Maintenance process</li>
    </ul>
    <h3><strong>ADDITIONAL TERMINOLOGY</strong></h3>
    <ul>
        <li>Team hierarchy</li>
        <li>Role & responsibility</li>
        <li>Central repository</li>
        <li>Project metrics</li>
    </ul>
    <h3><strong>PROJECT WORKSHOP REAL TIME PROJECT WORKSHOP FLOW</strong></h3>
    <ul>
        <li>Kick-off meeting</li>
        <li>Team formation</li>
        <li>Introduction to client/meeting</li>
        <li>Domain/requirement discussions</li>
        <li>Review the requirements</li>
        <li>Requirements clarifications</li>
        <li>Query tracker</li>
        <li>Test plan preparation: planning and scheduling</li>
        <li>Test case design</li>
        <li>Test case review</li>
        <li>Types case execution</li>
        <li>Result analysis & reporting the issues</li>
        <li>Reporting the bugs</li>
        <li>Regression testing</li>
        <li>Test summary report & sign off testing</li>
        <li>UAT - client</li>
        <li>Release meeting</li>
        <li>Go-live</li>
        <li>Maintenance if required</li>
    </ul>
    <h3><strong>TESTING PROCESS IMPLEMENTATION (WORKSHOPS)</strong></h3>
    <ul>
        <li>Requirements gathering & understanding</li>
        <li>Requirements gathering (BA)</li>
        <li>Requirements understanding_SRS (Team)</li>
        <li>Prepare the clarifications/queries_query tracker</li>
        <li>Requirements clarifications meeting client/BA</li>
    </ul>
    <h3><strong>TEST PLANNING</strong></h3>
    <ul>
        <li>Test plan preparation</li>
        <li>Scheduling</li>
        <li>Estimate the tasks</li>
        <li>Estimation techniques-test case point analysis</li>
        <li>Planning the tasks</li>
        <li>Risks identifying & management</li>
        <li>Resources stability</li>
        <li>Software availability</li>
        <li>Leave planner, etc.</li>
    </ul>
    <h3><strong>TEST CASE DESIGN</strong></h3>
    <ul>
        <li>Test Case Document</li>
        <li>Test Case Design</li>
        <li>Identifying the scenarios: high level, low level, +ve, -ve</li>
        <li>Converting the scenarios into test cases</li>
        <li>Test case writing</li>
        <li>Test data if required</li>
        <li>Test Case Design Techniques: BVA, ECP, Error Guessing</li>
        <li>Function/Non-Functional Testing</li>
        <li>Functional: +Ve, -Ve</li>
        <li>Non-Functional: OS, GUI, Usability, Browser Compatibility, Performance, Stress, Load, etc.</li>
    </ul>
    <h3><strong>REVIEW THE TEST CASES</strong></h3>
    <ul>
        <li>Peer review: checklists-review comments</li>
        <li>Lead review: review comments</li>
        <li>Client/BA review: review comments’ update the test cases based on review comments</li>
        <li>Review the updated test plan</li>
        <li>Sign off test cases by client/BA</li>
    </ul>
    <h3><strong>TEST CASE EXECUTION</strong></h3>
    <ul>
        <li>Get the test case execution plan: what to start, when to end</li>
        <li>Execute the test cases for smoke testing</li>
        <li>Functional test cases</li>
        <li>Non-functional test cases</li>
        <li>Results analysis</li>
        <li>Bug reporting</li>
        <li>Bug tracker explanation</li>
        <li>How to log, edit, close</li>
        <li>Test status report</li>
        <li>Get the modified build, retesting the bug identified by testers</li>
        <li>Regression testing</li>
        <li>Identify the regression test cases</li>
        <li>Test sign off</li>
        <li>Test summary report</li>
    </ul>
    <h3><strong>UAT-USER ACCEPTANCE TESTING</strong></h3>
    <ul>
        <li>UAT by client/BA</li>
        <li>Release meeting</li>
        <li>Go-live</li>
        <li>Maintenance if required</li>
        <li>Queries</li>
    </ul>
    <h3><strong>TEST DELIVERABLES</strong></h3>
    <ul>
        <li>Requirements documents(SRS)</li>
        <li>Test plan</li>
        <li>Test cases</li>
        <li>Traceability matrix</li>
        <li>Defect analysis report</li>
        <li>Test summary report</li>
    </ul>
    <h3><strong>COMMON TEMPLATES USED</strong></h3>
    <ul>
        <li>Query Tracker</li>
        <li>SRS/FRS</li>
        <li>Project Plan: MPP (Optional)</li>
        <li>Test Plan</li>
        <li>Estimation</li>
        <li>Test Case Doc</li>
        <li>Test Case Review Template-Checklists</li>
        <li>Bug Tracker</li>
        <li>Test Summary Report</li>
    </ul>
    <h3><strong>Agile Scrum Process</strong></h3>
    <ul>
        <li>What is Agile?</li>
        <li>Why Agile?</li>
        <li>What is Scrum?</li>
        <li>What are the terms available in Agile Scrum?</li>
        <li>Scrum Masters</li>
        <li>Product Owner</li>
        <li>Scrum Team</li>
        <li>Standup Call</li>
        <li>Scrum Meetings</li>
        <li>Scrum Planning</li>
        <li>Backlog, Product Backlog, Scrum Backlog</li>
        <li>Artifacts</li>
        <li>Retrospective</li>
        <li>User Stories</li>
        <li>Format of User Story</li>
        <li>UAT of User Story</li>
        <li>What are the Techniques Should follow in planning</li>
        </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf10.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser25'>
      <div className="service25">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view25'><img/></div>
            <div>
            <h1>MSBI</h1>
            <p>MSBI stands for Microsoft Business Intelligence.it is powerful tool. V CUBE SOFTWARE SOLUTIONS is best solutions for Business Intelligence and Data Mining Queries. We offer classroom and MSBI online training courses by  real time trainers and 100% job assistance.
<br/>
Duration: 45 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Introduction to MSBI</strong></h3>
    <ul>
        <li>What is MSBI</li>
        <li>The life cycle of BI/DWH</li>
        <li>List of ETL and OLAP Tools&nbsp;</li>
        <li>Features of MSBI</li>
    </ul>
    <h3><strong>SQL SERVER INTEGRATION SERVICE(SSIS)</strong></h3>
    <ul>
        <li>Introduction to SQL Server Integration</li>
        <li>&nbsp;Services SSIS Architecture Overview</li>
        <li>Development and Management&nbsp; Tools&nbsp;</li>
        <li>SQL Server Import and Export Wizard</li>
        <li>&nbsp;Business Intelligence Development Studio</li>
    </ul>
    <h3><strong>Introduction to Data Flow</strong></h3>
    <ul>
        <li>Data Flow Overview</li>
        <li>Data Sources</li>
        <li>Data Destinations</li>
        <li>Data Flow Transformations Data Viewers</li>
    </ul>
    <h3><strong>Introduction to Data Sources</strong></h3>
    <ul>
        <li>Excel Source</li>
        <li>Flat File Source</li>
        <li>OLE DB Source</li>
        <li>XML Source</li>
    </ul>
    <h3><strong>Introduction to Data Flow Transformations</strong></h3>
    <ul>
        <li>Aggregate Transformation</li>
        <li>&nbsp;Audit Transformation</li>
        <li>&nbsp;Character Map Transformation</li>
        <li>Conditional Split Transformation</li>
        <li>&nbsp;Copy Column Transformation&nbsp;</li>
        <li>Derived Column Transformation</li>
        <li>&nbsp;Data Conversion Transformation&nbsp;</li>
        <li>Multicast Transformation</li>
        <li>OLE DB Command Transformation</li>
        <li>&nbsp;Percentage Sampling Transformation&nbsp;</li>
        <li>Row Count Transformation</li>
        <li>Sort Transformation</li>
        <li>Union All Transformation</li>
    </ul>
    <h3><strong>Advance use of Data Flow</strong></h3>
    <ul>
        <li>Lookup Transformation</li>
        <li>&nbsp;Merge Transformation&nbsp;</li>
        <li>Merge Join Transformation</li>
        <li>Slow Changing Dimension Transformation</li>
        <li>&nbsp;Pivot Transformation</li>
        <li>Export Transformation</li>
        <li>&nbsp;Import Transformation</li>
        <li>Unpivot Transformation</li>
    </ul>
    <h3><strong>Explain Data Flow Destinations</strong></h3>
    <ul>
        <li>Data Reader Destination&nbsp;</li>
        <li>Excel Destination</li>
        <li>Flat File Destination</li>
        <li>&nbsp;OLE DB Destination</li>
    </ul>
    <h3><strong>Introduction to Control Flow</strong></h3>
    <ul>
        <li>Control Flow Overview&nbsp;</li>
        <li>Precedence Constraints&nbsp;</li>
        <li>The Execute SQL Task&nbsp;</li>
        <li>The Bulk Insert Task&nbsp;</li>
        <li>The File System Task&nbsp;</li>
        <li>The FTP Task</li>
        <li>The Send Mail Task</li>
        <li>&nbsp;Bulk Insert Task&nbsp;</li>
        <li>Data Flow Task</li>
        <li>Execute DTS 2000 Package Task&nbsp;</li>
        <li>Execute Package Task</li>
        <li>Execute Process Task</li>
        <li>Web Service Task XML Task</li>
    </ul>
    <h3><strong>Advance use of Control Flow</strong></h3>
    <ul>
        <li>For Loop Container</li>
        <li>For Each Loop Container&nbsp;</li>
        <li>Sequence Container</li>
    </ul>
    <h3><strong>Explain Variables and Configurations</strong></h3>
    <ul>
        <li>Variables Overview&nbsp;</li>
        <li>Variable scope</li>
        <li>SSIS system variables</li>
        <li>Using variables in control flow&nbsp;</li>
        <li>Using variables in data flow</li>
        <li>Using variables to pass information between</li>
    </ul>
    <h3><strong>Overview of packages</strong></h3>
    <ul>
        <li>Property expressions&nbsp;</li>
        <li>Configuration Overview</li>
        <li>&nbsp;Configuration options</li>
        <li>Configuration discipline</li>
    </ul>
    <h3><strong>Debugging, Error Handling and Logging</strong></h3>
    <ul>
        <li>SSIS debugging overview&nbsp;</li>
        <li>Breakpoints in SSIS</li>
        <li>Control Flow: The On Error event handler</li>
        <li>&nbsp;Data Flow: Error data flow</li>
        <li>Configuring Package Logging&nbsp;</li>
        <li>Built-in log providers</li>
    </ul>
    <h3><strong>Extending SSIS through Custom Code Scripting</strong></h3>
    <ul>
        <li>Introduction to SSIS scripting&nbsp;</li>
        <li>The SSIS script editor</li>
        <li>The SSIS object model</li>
        <li>Script in Control flow: The Script Task&nbsp;</li>
        <li>Script in Data flow: The Script Component</li>
        <li>Introduction to SSIS component development</li>
    </ul>
    <h3><strong>Package Deployment of SSIS</strong></h3>
    <ul>
        <li>Configurations and deployment&nbsp;</li>
        <li>The deployment utility&nbsp;</li>
        <li>Deployment options&nbsp;</li>
        <li>Deployment security</li>
        <li>Executing packages DTExec and DTExecUI</li>
    </ul>
    <h3><strong>SSIS Package Management</strong></h3>
    <ul>
        <li>The SSIS Service</li>
        <li>Managing packages with DTUtil</li>
        <li>Managing packages with SQL Server Management</li>
        <li>Studio</li>
        <li>Scheduling packages with SQL Server Agent</li>
    </ul>
    <h3><strong>SQL SERVER ANALYSIS SERVICES</strong></h3>
    <ul>
        <li>Introduction to SQL Server Analysis Services</li>
        <li>&nbsp;SSAS Architecture Overview</li>
        <li>Explain Microsoft Business Intelligence&nbsp;</li>
        <li>What is UDM</li>
        <li>Building and Viewing a Sample Cube&nbsp;</li>
        <li>Viewing a Cube Using Excel</li>
        <li>Cubes in Reporting Services&nbsp;</li>
        <li>BIDS Understanding BIDS </li>
<li>Creating Data Sources </li>
<li>Creating Data Source Views</li>
<li>Creating a Cube Using the Wizard</li>
<li>Refining Dimensions and Measures</li>
</ul>
<h3><strong>Intermediate SSAS</strong></h3>
<ul>
<li>Creating KPIs</li>
<li> Creating Perspectives </li>
<li>Creating Translations </li>
<li>Creating Actions </li>
<li>Advanced SSAS</li>
<li>Working with Many Fact Tables</li>
<li> Using Advanced Dimension Types </li>
<li>Working with Changing Dimensions</li>
<li>Using the Business Intelligence Wizard</li>
</ul>
<h3><strong>Cube Storage and Aggregation</strong></h3>
<ul>
<li>Basic Storage: MOLAP </li>
<li>Customized Aggregations</li>
<li>Advanced Storage: MOLAP, HOLAP, or ROLAP </li>
<li>Implementing Proactive Caching</li>
<li>Using Partitions: Relational or SSAS</li>
<li>Cube and Dimensions Processing Options</li>
</ul>
<h3><strong>Beginning MDX</strong></h3>
<ul>
<li>Understanding MDX</li>
<li>About Members, Tuples, and Sets </li>
<li>Common MDX Functions Explained</li>
<li>New or Updated MDX Functions or Keywords</li>
</ul>
<h3><strong>Intermediate MDX</strong></h3>
<ul>
<li>Understanding the Calculations Subtab </li>
<li>Adding Calculated Members</li>
<li>Adding MDX Scripts </li>
<li>Adding Named Sets</li>
</ul>
<h3><strong>SSAS Administration</strong></h3>
<ul>
<li>Implementing SSAS Security </li>
<li>Implementing XMLA Scripts</li>
<li>Understanding SSAS Backup and Restore </li>
<li>Understanding Performance Optimization</li>
</ul>
<h3><strong>Introduction to SSAS Clients</strong></h3>
<ul>
<li>Using Excel 2007 Pivot Tables</li>
<li>Using SQL Server Reporting Services</li>
</ul>
<h3><strong>SQL SERVER REPORTING SERVICES</strong></h3>
<ul>
<li>SQL Server Reporting Services (SSRS) Architecture </li>
<li>Report types and formats</li>
<li>SSRS Web Services</li>
<li>Report Server </li>
<li>Report Builder</li>
<li>Model Designer</li>
<li>Data sources: SQL Server, Oracle, OLE DB</li>
<li> Authoring Reports</li>
</ul>
<h3><strong>Creating basic reports</strong></h3>
<ul>
<li>Tabular </li>
<li>List</li>
<li> Matrix </li>
<li>Chart</li>
<li>Constructing data sources and Datasets</li>
<li> Inserting a data region, fields and images</li>
</ul>
<h3><strong>Leveraging expressions</strong></h3>
<ul>
<li>Calculating fields</li>
<li>Integrating expressions in properties </li>
<li>Applying conditional formatting </li>
<li>Adding images</li>
</ul>
<h3><strong>Grouping and sorting data</strong></h3>
<ul>
<li>Grouping to multiple levels </li>
<li>Sorting the results</li>
<li>Employing aggregate functions</li>
</ul>
<h3><strong>IMPLEMENTING PARAMETERS AND FILTERS BUILDING PARAMETERS INTO REPORTS</strong></h3>
<ul>
<li>Returning subsets of data with query parameters </li>
<li>Mapping report parameters to query parameters</li>
<li> Building cascading report parameters</li>
<li>Passing parameters to stored procedures </li>
<li>Exploiting multivalve parameters</li>
<li>Restricting report data with filters</li>
<li>Enhancing performance with filters Filters vs. query parameters</li>
<li>Localizing tables and queries</li>
<li>Leveraging Advanced Reporting Features Combining data regions in one report</li>
<li><span lang="EN-US">Utilizing sequential and nested regions </span></li>
<li><span lang="EN-US">Producing master/details reports</span></li>
<li><span lang="EN-US">Linking sub reports</span></li>
<li><span lang="EN-US">Presenting data with appropriate detail</span></li>
<li><span lang="EN-US">Revealing report detail with drill down</span></li>
<li>Deploying Report Builder to users</li>
<li>Dragging and dropping entities onto charts and tabular reports</li>
<li>Navigating data with infinite drill-through</li>
</ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
        
        </div>
      </div>
      </div>


      <div className='ser26'>
      <div className="service26">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view26'><img/></div>
            <div>
            <h1>APPIUM</h1>
            <p>APPIUM: It is built on the idea that testing native apps shouldn’t require including an SDK or recompiling your app. And that you should be able to use your preferred test practices, frameworks, and tools. It is an open source project and has made design and tool decisions to encourage a vibrant contributing community.
<br/>
Duration:20 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Introduction to Appium</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Overview of Open Source Mobile Test Automation tools</li>
        <li aria-level="1">Open source Mobile Automation tool Evaluation docs</li>
        <li aria-level="1">Why APPIUM</li>
        <li aria-level="1">Limitations&nbsp;</li>
        <li aria-level="1">architecture</li>
    </ul>
    <h3><strong>Appium- Prerequisites &amp; Installation for Windows</strong></h3>
    <ul>
        <li aria-level="1">Prerequisites</li>
        <li aria-level="1">Java Installation &amp; Configuring System Environmental variables</li>
        <li aria-level="1">Maven Configuration</li>
        <li aria-level="1">Android SDK configuration</li>
        <li aria-level="1">Eclipse IDE configuration</li>
        <li aria-level="1">installation on windows</li>
    </ul>
    <h3><strong>Installation for APK Files</strong></h3>
    <ul>
        <li aria-level="1">What is an APK file&nbsp;</li>
        <li aria-level="1">Various sources to get APK files</li>
        <li aria-level="1">Installing application on real device using these APK files</li>
        <li aria-level="1">Automating INDIAMART-Login&nbsp;</li>
        <li aria-level="1">Automating Facebook- Post Status</li>
        <li aria-level="1">Automating Facebook- Delete Post &amp; User Logout</li>
    </ul>
    <h3><strong>Object identification</strong></h3>
    <ul>
        <li aria-level="1">Element Locators</li>
        <li aria-level="1">Locating elements by resource ID</li>
        <li aria-level="1">Locating elements by name</li>
        <li aria-level="1">Locating elements by classname</li>
        <li aria-level="1">Locating elements by xpath</li>
    </ul>
    <h3><strong>Basics of Android</strong></h3>
    <ul>
        <li aria-level="1">Share &amp; Control Real Android Device screen from PC</li>
        <li aria-level="1">Download Android Platforms using SDK Manager</li>
        <li aria-level="1">CreateVirtual Devices/Emulators using AVD Manager</li>
    </ul>
    <h3><strong>APPIUM basic concepts</strong></h3>
    <ul>
        <li aria-level="1">Setting up a basic project&nbsp;</li>
        <li aria-level="1">Appium API Reference</li>
        <li aria-level="1">What are DesiredCapabilities</li>
        <li aria-level="1">Knowing AppPackage and Launcher Activity of Android App</li>
    </ul>
    <h3><strong>APPIUM commands</strong></h3>
    <ul>
        <li aria-level="1">sendKeys()</li>
        <li aria-level="1">click()</li>
        <li aria-level="1">getLocation()</li>
        <li aria-level="1">getContextHandles()</li>
        <li aria-level="1">findElement()</li>
        <li aria-level="1">closeApp()</li>
        <li aria-level="1">quit ..etc</li>
    </ul>
    <h3><strong>Mobile Touch Gestures- Swipe,Scroll</strong></h3>
    <ul>
        <li aria-level="1">Performing Click and Swipe using TouchAction class</li>
        <li aria-level="1">Performing Swipe using screen coordinates(x,y)</li>
        <li aria-level="1">Performing Long press using TouchAction class</li>
    </ul>
    <h3><strong>Android MobileBrowser-Automating Mobile Web Application</strong></h3>
    <ul>
        <li aria-level="1">Introduction to Mobile Web Automation</li>
        <li aria-level="1">How to get Useragent from Android Browser</li>
        <li aria-level="1">Identifying the objects on Mobile browser</li>
        <li aria-level="1">Automating mobile specific websites</li>
    </ul>
    <h3><strong>Appium- Prerequisites &amp; Installation for Mac</strong></h3>
    <ul>
        <li aria-level="1">Prerequisites</li>
        <li aria-level="1">Java Installation &amp; Configuring System Environmental variables</li>
        <li aria-level="1">Maven Configuration</li>
        <li aria-level="1">Android SDK configuration</li>
        <li aria-level="1">Xcode Configuration</li>
        <li aria-level="1">Eclipse IDE configuration</li>
        <li aria-level="1">Appium installation on Mac</li>
        <li aria-level="1">Install from command line using npm</li>
    </ul>
    <h3><strong>Appium- iOS App download</strong></h3>
    <ul>
        <li aria-level="1">Emulators Vs Simulators</li>
        <li aria-level="1">iOS App download</li>
        <li aria-level="1">Share IOS Device Screen on Mac</li>
        <li aria-level="1">Provisioning Development Build on Real IOS Device</li>
        <li aria-level="1">Using inspector to identify the element properties</li>
    </ul>
    <h3><strong>Working with IOS Controls on Real IOS Device</strong></h3>
    <ul>
        <li aria-level="1">Working with Steppers(UIAStepper)</li>
        <li aria-level="1">Working with Switches(UIASwitches)</li>
        <li aria-level="1">Working with Sliders(UIASlider)</li>
        <li aria-level="1">Working with PickerWheel(UIAPickerWheel)</li>
        <li aria-level="1">Working with Date Picker</li>
        <li aria-level="1">Working with Segmented Controls(UIASegementedControl)</li>
        <li aria-level="1">Working with Page Indicator(UIAPageIndicator)</li>
        <li aria-level="1">Handling alerts</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser27'>
      <div className="service27">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view27'><img/></div>
           <div>
           <h1>SELENIUM WITH JAVA</h1>
           <p>SELENIUM : Selenium is an open-source umbrella project providing a collection of web browser automation technologies and libraries. Without having to learn a test scripting language, Selenium provides a playback tool for building functional tests (Selenium IDE). It also includes a test domain-specific language (Selenese) for writing tests in JavaScript (Node.js), C#, Groovy, Java, Perl, PHP, Python, Ruby, and Scala. Most recent web browsers can then be used to run the tests. Selenium is available for Windows, Linux, and Mac OS X. It’s free software distributed under the Apache License 2.0.</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Introduction</strong></h3>
    <ul>
        <li >
            <ul>
                <li>What is Testing</li>
                <li>Ways of Testing</li>
                <li>Drawbacks of manual testing</li>
                <li>Automation Testing</li>
                <li>Web Testing Automation tools</li>
                <li>QTP vs Selenium</li>
            </ul>
        </li>
    </ul>
    <h3>&nbsp;<strong >Getting Started with Java</strong></h3>
    <ul>
        <li>
            <ul>
                <li>Where to download Java</li>
                <li>How to install Java</li>
                <li>Setting up the Environment Variables</li>
                <li>First Java Program</li>
                <li>How to compile &amp; run a Java application</li>
            </ul>
        </li>
    </ul>
    <h3><strong>Object Oriented Programming – 1</strong></h3>
    <ul>
        <li>OOPs concepts over view</li>
        <li>Static Vs Non Static</li>
        <li>Introduction to Classes and Objects</li>
        <li>Constructor</li>
        <li>this keyword</li>
        <li>Inheritance</li>
        <li>Interface</li>
        <li>Overloading</li>
        <li>Overriding</li>
        <li>Access Modifiers</li>
    </ul>
    <h3><strong>Object Oriented Programming – 2</strong></h3>
    <div>
  
            <ul>
                <li>Collections</li>
                <li>Strings</li>
                <li>Exceptions</li>
            </ul>
        
    </div>
    <div role="tab" data-tab="4" aria-controls="elementor-tab-content-2584" aria-expanded="false"><strong>Working with DataBase</strong></div>
    <div role="tab" data-tab="4" aria-controls="elementor-tab-content-2584" aria-expanded="false">
        <ul>
            <li>sql package</li>
            <li>JDBC Drivers</li>
            <li>Connection Interface</li>
            <li>Statement and PreparedStatement Interfaces</li>
            <li>ResultSet Interface</li>
            <li>Firing select, insert, update and delete queries with database using Java JDBC</li>
        </ul>
    </div>
    <h3><strong>Eclipse</strong></h3>
    <ul>
        <li>Installing Eclipse</li>
        <li>Creating Simple Java Project in eclipse</li>
        <li>Importing and Exporting</li>
        <li>Debugging using Eclipse</li>
        <li>Exploring Eclipse-Basic</li>
        <li>Exploring Eclipse-Advanced</li>
    </ul>
    <h3><strong>Introduction to Selenium</strong></h3>
    <ul>
        <li>Test Automation for Web Applications</li>
        <li>To Automate or Not to Automate?</li>
        <li>Introducing Selenium</li>
        <li>Brief History of The Selenium Project</li>
        <li>Selenium’s Tool Suite</li>
        <li>Choosing Your Selenium Tool</li>
        <li>Supported Browsers and Platforms</li>
    </ul>
    <h3><strong>Element Locators</strong></h3>
    <ul>
        <li>Firepath and firebug Add-ons installation in Mozilla</li>
        <li>Inspecting elements in Mozilla, Chrome and IE</li>
        <li>HTML language tags and attributes</li>
        <li>Various locator strategies</li>
        <li>Identifying WebElements using id, name, class</li>
        <li>Xpaths Identification</li>
        <li>Absolute and complete Xpaths</li>
        <li>Xpath functions</li>
        <li>Creating customized Xpaths without firebug</li>
        <li>Css Selectors</li>
        <li>Generating own CssSelectors</li>
        <li>Performance of CssSelectors as compared to Xpaths</li>
    </ul>
    <h3><strong>Selenium WebDriver 2.0,3.0</strong></h3>
    <ul>
        <li>Why WebDriver?</li>
        <li>Downloading WebDriver Jars and configuring in eclipse</li>
        <li>Architecture of selenium webdriver</li>
        <li>Drivers for Firefox, IE, chrome, Iphone, Android etc</li>
        <li>First Selenium Code</li>
        <li>Working with chrome and IE</li>
        <li>Concept of firefox profile</li>
        <li>Close and Quit</li>
        <li>Importing webdriver documentation in eclipse</li>
        <li>WebDriver DesiredCapabilities Class</li>
        <li>Proxy settings with webdriver/Working with proxy Servers</li>
        <li>HTMLUnit driver and desired capabilities</li>
    </ul>
    <h3><strong>Working with WebDriver API</strong></h3>
    <ul>
        <li>Working with WebElements</li>
        <li>Input Fields, Button</li>
        <li>Identifying Links</li>
        <li>Finding WebElement</li>
        <li>Getting multiple Elements from a page</li>
        <li>Verifying element’s text</li>
        <li>Getting Element attribute values</li>
        <li>Checking an element’s CSS values</li>
        <li>Handling drop down list – Select</li>
        <li>Working with radio button</li>
        <li>Working with Check boxes</li>
        <li>Handling Ajax Autosuggests</li>
        <li>Handling Frames in Web Page</li>
        <li>Handling Frames inside Frames</li>
        <li>Handling cookies</li>
        <li>JavaScriptExecutor</li>
        <li>Capturing screenshots with Selenium WebDriver</li>
        <li>Synchronizing a test with an implicit wait</li>
        <li>Synchronizing a test with an explicit wait</li>
        <li>Synchronizing a test with custom-expected conditions</li>
        <li>Checking an element’s presence</li>
        <li>Checking an element’s status</li>
        <li>Identifying and handling a pop-up windows</li>
    </ul>
    <h3><strong>WebDriver-Advanced User Interactions</strong></h3>
    <ul>
        <li>Using Advanced User Interactions API for mouse and keyboard events</li>
        <li>Performing double-click on an element</li>
        <li>Performing drag-and-drop operations</li>
        <li>Moving an element to an offset</li>
        <li>Doing a context click</li>
        <li>Clicking on multiple items in a select element</li>
        <li>Holding the mouse button down while moving the mouse</li>
    </ul>
    <h3><strong>Selenium Grid</strong></h3>
    <ul>
        <li>Introduction to Grid 2</li>
        <li>Creating Nodes and Hubs</li>
        <li>Configuring browsers on a node</li>
        <li>Limiting number of concurrent browsers on node</li>
        <li>Difference between maxSession and maxInstance</li>
        <li>Configuring chromedriver and IEdriver exe files on grid</li>
        <li>Testng configurations</li>
        <li>Running single test on single node-serially in multiple browsers</li>
        <li>Running single test on single node-parallely on multiple browsers</li>
        <li>Running single test on multiple nodes-each node having different browser</li>
        <li>Prioritizing the test cases</li>
    </ul>
    <h3><strong>Maven</strong></h3>
    <ul>
        <li>What is Maven ?</li>
        <li>Installing/Configuring Maven</li>
        <li>Archetypes in Maven</li>
        <li>Creating maven project through command line</li>
        <li>xml</li>
        <li>Importing Archetypes</li>
        <li>Maven Repositories</li>
        <li>Importing the maven project into eclipse</li>
        <li>Building a selenium project and running it through Maven</li>
        <li>Eclipse plugin for maven</li>
        <li>Using the maven plugin to execute phases-compile, clean, package etc</li>
    </ul>
    <h3><strong>AutoIT</strong></h3>
    <ul>
        <li>What is AutoIt</li>
        <li>Installing Auto IT</li>
        <li>Auto IT Script Examples</li>
        <li>Compiling Auto IT scripts</li>
        <li>How To Use Auto IT scripts in Selenium</li>
    </ul>
    <h3><strong>Test Ng Framework</strong></h3>
    <ul>
        <li>What is TestNg</li>
        <li>Installing TestNg in Eclipse</li>
        <li>TestNg annotations</li>
        <li>Understanding usage of annotations</li>
        <li>Running a Test in TestNg</li>
        <li>Batch Running of tests in TestNg</li>
        <li>Skipping Tests</li>
        <li>parameterizing Tests -DataProvider</li>
        <li>Assertions/Reporting Errors</li>
        <li>TestNg Reports</li>
        <li>Grouping test cases</li>
        <li>Setting priority of execution for test cases</li>
        <li>Advantages over Junit</li>
    </ul>
    <h3><strong>Automation Frameworks</strong></h3>
    <ul>
        <li>What is a frame work</li>
        <li>Advantages of Test Automation frameworks</li>
        <li>Types of frame work</li>
        <li>Keyword Driver Framework</li>
        <li>Data Driver Framework</li>
        <li>Hybrid FrameworkProject Implementation</li>
    </ul>
    <h3><strong>Introduction to Automation</strong></h3>
    <ul>
        <li>Why we need automation</li>
        <li>To automate or not to Automate?</li>
        <li>Tool Selection guidelines</li>
        <li>Automation Process Overview</li>
    </ul>
    <h3><strong>Automation Test Planning</strong></h3>
    <ul>
        <li>Feasibility Analysis</li>
        <li>Writing Automation Test Plan</li>
        <li>Test Plan Review</li>
    </ul>
    <h3><strong>Framework Implementation and Scripting</strong></h3>
    <ul>
        <li>Setting up Framework Environment</li>
        <li>Object Repository creation</li>
        <li>Script Creation</li>
        <li>Debugging the Scripts</li>
        <li>Script review</li>
        <li>Check-in Automation project/Scripts to SVN</li>
    </ul>
    <h3><strong>Automation Script Execution and Reporting</strong></h3>
    <ul>
        <li>Running automation scripts</li>
        <li>Reporting Defects</li>
        <li>Test Reports Generation</li>
        <li>Sign-off</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>
          <button className="option" onClick={() => handleDownloadClick('pdf11.pdf')}><FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
      </div>


      <div className='ser28'>
      <div className="service28">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view28'><img/></div>
           <div>
           <h1>CYPRESS TESTING</h1>
           <p>Cypress : cypress testing is a modern web-based front end testing tool of the future. We address the most common issues that developers and QA engineers encounter when testing modern applications. Cypress is frequently compared to Selenium; however, Cypress is fundamentally and architecturally distinct from Selenium. Cypress is not restricted in the same way that Selenium is. This allows you to write tests more quickly, easily, and reliably.
<br/>
DURATION:30 days</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Introduction to Cypress and getting started</strong></h3>
    <ul>
        <li>Installation</li>
        <li>Writing a simple code</li>
    </ul>
    <h3><strong>Working with Cypress features</strong></h3>
    <ul>
        <li>Working with UI &amp; Console based Test Runner</li>
        <li>Interacting with UI element with Cypress</li>
        <li>Advanced Cypress commands</li>
        <li>Cypress variables</li>
        <li>&nbsp;Alias</li>
        <li>Cypress Wrap</li>
        <li>Implicit and Explicit assertions in Cypress</li>
        <li>Cypress Hooks</li>
        <li>Data Driven Testing</li>
    </ul>
    <h3><strong>Working with advanced features of Cypress</strong></h3>
    <ul>
        <li>Custom commands in Cypress</li>
        <li>Configurations and creating test videos and failure screenshots</li>
        <li>Environment variables</li>
        <li>Cypress Plugins</li>
    </ul>
    <h3><strong>Behavioral Driven Development (BDD) Testing with Cucumber</strong></h3>
    <ul>
        <li>Cucumber with Cypress</li>
        <li>Cucumber for Parameter data in Step definition</li>
        <li>Cucumber DataTables for working with multiple data</li>
        <li>Page object Models with Cypress + BDD</li>
    </ul>
    <h3><strong>Testing with Cypress</strong></h3>
    <ul>
        <li>API testing for GET, POST, PUT, DELETE and PATCH.</li>
    </ul>
    <h3><strong>CI/CD Integration</strong></h3>
    <ul>
        <li>CI/CD Integration with Azure DevOps</li>
    </ul>
    <h3><strong>Cypress Reports</strong></h3>
    <ul>
        <li>Mocha awesome reports</li>
        <li>Mocha JUnit reports</li>
        <li>Reports for BDD testing with Cucumber</li>
    </ul>
    <h3><strong>Cypress Tidbits</strong></h3>
    <ul>
        <li>Windows Authentication handling in Cypress</li>
        <li>File Upload</li>
        <li>Changing browser behavior with Cypress events</li>
        <li>Debugging with Cypress</li>
        <li>Handling Alerts and popups with Cypress</li>
        <li>iFrames in Cypress</li>
    </ul>
    <h3><strong>Automating applications with XHR using Cypress</strong></h3>
    <ul>
        <li>XHR and asserting using Explicit assertion</li>
        <li>XHR to verify authentication token validation</li>
        <li>Cookies and asserting cookies values</li>
        <li>Cypress Dashboard</li>
        <li>Record in Cypress Dashboard</li>
        <li>Parallelization</li>
        <li>Cypress CI/CD</li>
        <li>Cypress Insights</li>
        <li>Cypress Docker</li>
    </ul>
    <h3><strong>&nbsp;JavaScript</strong></h3>
    <ul>
        <li>Introduction to JavaScript</li>
        <li>JavaScript Basics: Control Flow</li>
        <li>JavaScript Basics: Functions</li>
        <li>JavaScript Basics: Arrays</li>
        <li>JavaScript Basics: Objects</li>
        <li>JavaScript Advanced</li>
        <li>JavaScript DOM</li>
        <li>Git and Github</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser29'>
      <div className="service29">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view29'><img/></div>
           <div>
           <h1>PROTRACTER</h1>
           <p>Protractor: Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would. Best Protractor Training in Hyderabad Course with Certified Experts, learn Protractor end-to-end test framework for Angular and AngularJS applications. V Cube Software Solutions provides Protractor Training in Kukatpally with 100% placement assistance in Hyderabad. protractor testing tool training online course from an Industry experts enroll now.
<br/>
DURATION:25 days</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Installation</strong></h3>
    <ul>
        <li>Pre-requisites</li>
        <li>Installing JDK AND JS</li>
        <li>Installing Protractor on Windows</li>
        <li>Sublime Test IDE and Configuring build system</li>
        <li>Running the first Protractor Test</li>
        <li>Installing Eclipse and Turn Plug-in</li>
    </ul>
    <h3><strong>Protractor Basics</strong></h3>
    <ul>
        <li>Selenium Web Drive Protractor</li>
        <li>Architecture</li>
        <li>Understanding the js file</li>
        <li>Understanding Describe and It blocks and writing test cases</li>
        <li>Adding validations using Jasmine Expect</li>
    </ul>
    <h3><strong>Jasmine Basics</strong></h3>
    <ul>
        <li>Setting up Jenkins with Python, git, maven, etc&nbsp;</li>
        <li>Running first Jenkins job</li>
        <li>Running multiple Jenkins job via Jenkins Pipeline&nbsp;</li>
        <li>Emailing Reports via Jenkins</li>
        <li>Scheduler in Jenkins&nbsp;</li>
    </ul>
    <h3><strong>Locators</strong></h3>
    <ul>
        <li>About Angular Js Locators</li>
        <li>By Model, By ClassName By ButtonText</li>
        <li>By Binding, By ID</li>
        <li>By Repeater</li>
        <li>By Add locators</li>
        <li>Select Wrapper Class</li>
    </ul>
    <h3><strong>Utilities</strong></h3>
    <ul>
        <li>Generating Logs</li>
        <li>Generating Jasmine2 HTML Reports</li>
        <li>Generating Allure Reports</li>
        <li>Installing Maven and Generating HTML Reports</li>
        <li>Understanding Package.json file and its Usage&nbsp;</li>
        <li>Data Driven Testing</li>
        <li>Reading data and locators through JSON files</li>
        <li>Parameterization using Jasmine Data Providers</li>
        <li>Reading Excel files</li>
        <li>E2E testing on AngularJS Banking Application</li>
        <li>Automating Customer Login</li>
        <li>Automating Bank Manager Login</li>
        <li>Page Object Model – Framework (Live Project)</li>
        <li>Introduction To pages object Model</li>
        <li>Creating Architecture and adding business pages</li>
        <li>Adding common JSON file for locator and test Data</li>
        <li>Adding the Page object design patterns</li>
        <li>Adding More Business Pages and Test Cases.</li>
        <li>Handling Non-Angular Elements</li>
        <li>Automating a Login Window</li>
        <li>Handing Tabs and popup</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser30'>
      <div className="service30">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view30'><img/></div>
           <div>
           <h1>Power Automate</h1>
           <p>Microsoft Power Automate: Microsoft Power Automate is a programme that allows users to create workflows between applications in order to synchronise files, receive notifications, and collect data. This intelligent cloud-based solution uses triggers and actions to create chain reactions within a workflow, eliminating the need for humans to complete repetitive, manual, and time-consuming tasks.
<br/>
Microsoft Power Automate increases user productivity by allowing them to automate tasks and create intelligent workflows quickly and securely.
<br/>
Duration : 45days </p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>COURSE STRUCTURE</strong></h3>
    <ul>
        <li>Power Automate Desktop introduction.</li>
        <li>Power Automate installation</li>
        <li>Creating Desktop Flows</li>
        <li>Create variables, and set values to the variables.</li>
        <li>Data Types</li>
        <li>Different types of Conditional Actions</li>
        <li>Loops</li>
        <li>Excel Automation</li>
        <li>File Actions</li>
        <li>Folder actions</li>
        <li>Database automation</li>
        <li>Compression Actions</li>
        <li>Date and Time Actions</li>
        <li>Text Actions</li>
        <li>Outlook Automation Actions</li>
        <li>Email Automation Actions</li>
        <li>Web recorder</li>
        <li>Web Automation Actions</li>
        <li>UI Automation Actions</li>
        <li>Desktop recorder</li>
        <li>XML Automation Actions</li>
        <li>PDF Automation Actions</li>
        <li>Sample POC</li>
        <li>Real-time use cases</li>
        <li>Project Template.</li>
        <li>Challenges faced while BOT development.</li>
        <li>Interview question and answers</li>
        <li>Resume preparation.</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>
      <div className='ser31'>
      <div className="service31">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view31'><img/></div>
            <div>
            <h1>MEAN STACK</h1>
            <p>MEAN STACK : Create scalable applications that are optimized for cloud deployment. Streamline development by using a single language across the entire application Simplify deployment with a built-in web server Manage large amounts of data with the flexibility of MongoDB
<br/>
When building an application from scratch, employing a consistent, standardized software stack is vital. 
<br/>
Duration:60 days</p>
            <h2>COURSE STRUCTURE</h2>
            
            <h3><strong>WEB TECHNOLOGIES</strong></h3>
    <ul>
        <li aria-level="1">Introduction to web technologies</li>
        <li aria-level="1">Introduction to web applications</li>
        <li aria-level="1">What is FULL, MEAN, MERN Stack</li>
        <li aria-level="1">Editors</li>
    </ul>
    <h3><strong>HTML</strong></h3>
    <ul>
        <li aria-level="1">&nbsp;Introduction</li>
        <li aria-level="1">Layers in web application</li>
        <li aria-level="1">Tags, attributes</li>
        <li aria-level="1">Programming</li>
        <li aria-level="1">Audio, Video, Graphics</li>
    </ul>
    <h3><strong>CSS</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Selectors and types of selectors</li>
        <li aria-level="1">Font, text, border, images</li>
        <li aria-level="1">Properties</li>
        <li aria-level="1">Class rules</li>
        <li aria-level="1">Layouts with CSS</li>
        <li aria-level="1">Absolute, relative, fixed Positioning</li>
        <li aria-level="1">Float, clear</li>
    </ul>
    <h3><strong>JAVASCRIPT</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Programming languages</li>
        <li aria-level="1">Uses of JavaScript</li>
        <li aria-level="1">Keywords, operators</li>
        <li aria-level="1">Browser objects, JavaScript objects</li>
        <li aria-level="1">Dialogs</li>
        <li aria-level="1">Events</li>
        <li aria-level="1">Basic programming</li>
        <li aria-level="1">Functions</li>
        <li aria-level="1">Let, const keywords</li>
        <li aria-level="1">Nested functions, Closures</li>
        <li aria-level="1">Anonymous functions</li>
        <li aria-level="1">Function expressions</li>
        <li aria-level="1">Hoisting in JavaScript</li>
        <li aria-level="1">animations</li>
        <li aria-level="1">Validations</li>
        <li aria-level="1">AJAX</li>
    </ul>
    <h3><strong>DOM (document object model)</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Types of DOM</li>
        <li aria-level="1">Uses</li>
        <li aria-level="1">Properties and methods</li>
        <li aria-level="1">programming</li>
    </ul>
    <h3><strong>BOOTSTRAP&nbsp;</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Responsive design</li>
        <li aria-level="1">Classes</li>
        <li aria-level="1">Containers</li>
        <li aria-level="1">Colors, jumbotran, navbar</li>
        <li aria-level="1">Forms, buttons, cards, modals</li>
        <li aria-level="1">Carousel, images&nbsp;</li>
    </ul>
    <h3><strong>DATA FORMATS</strong></h3>
    <ul>
        <li aria-level="1">&nbsp; XML</li>
        <li aria-level="1">JSON</li>
        <li aria-level="1">JSON Data structures</li>
        <li aria-level="1">Difference between XML and JSON</li>
    </ul>
    <h3><strong>TYPESCRIPT</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Installing Typescript</li>
        <li aria-level="1">Keywords, types, operators</li>
        <li aria-level="1">Programming</li>
        <li aria-level="1">Functions and types</li>
        <li aria-level="1">Interfaces</li>
        <li aria-level="1">classes</li>
    </ul>
    <h3><strong>ANGUALAR</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Single page applications</li>
        <li aria-level="1">Typescript</li>
        <li aria-level="1">Installation and angular CLI</li>
        <li aria-level="1">Components</li>
        <li aria-level="1">Directives</li>
        <li aria-level="1">Angular Forms</li>
        <li aria-level="1">Form validations</li>
        <li aria-level="1">Data binding</li>
        <li aria-level="1">Routing and navigation</li>
        <li aria-level="1">Using jQuery and bootstrap</li>
        <li aria-level="1">Dependency Injection</li>
        <li aria-level="1">Security</li>
        <li aria-level="1">Services</li>
        <li aria-level="1">AJAX</li>
    </ul>
    <h3><strong>EXPRESS</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">MVC pattern</li>
        <li aria-level="1">Implementing cookies and session</li>
        <li aria-level="1">Creating actions</li>
        <li aria-level="1">Defining routes</li>
        <li aria-level="1">http authentication</li>
        <li aria-level="1">using RESTful services</li>
    </ul>
    <h3><strong>NODEJS&nbsp;</strong></h3>
    <ul>
        <li aria-level="1">Introduction</li>
        <li aria-level="1">Installation</li>
        <li aria-level="1">NPM</li>
        <li aria-level="1">CLI and REPL</li>
        <li aria-level="1">Modules</li>
        <li aria-level="1">Asynchronous programming and callbacks</li>
        <li aria-level="1">Streams and Buffers</li>
        <li aria-level="1">Web server and creating web server</li>
        <li aria-level="1">Networking</li>
        <li aria-level="1">Sending Email</li>
        <li aria-level="1">Database connectivity</li>
        <li aria-level="1">Using Mongo, MySQL</li>
        <li aria-level="1">Debugging NodeJS applications</li>
    </ul>
    <h3><strong>MONGODB</strong></h3>
    <ul>
        <li aria-level="1">Introduction to databases</li>
        <li aria-level="1">No SQL databases</li>
        <li aria-level="1">Installation of MongoDB</li>
        <li aria-level="1">Working with MongoDB</li>
        <li aria-level="1">MongoDB document</li>
        <li aria-level="1">Data modelling</li>
        <li aria-level="1">MongoDB with JavaScript</li>
        <li aria-level="1">Indexes</li>
        <li aria-level="1">Administering databases</li>
    </ul>

 
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser32'>
      <div className="service32">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view32'><img/></div>
           <div>
           <h1>Azure Data engineer with DevOps</h1>
           <p>Azure Data Engineer Training In Hyderabad-Become career ready experts in azure data engineer training online hyderabad domain with the aid of V Cube Software Solutions, Azure Data Engineer Training in Kukatpally In Hyderabad by experts
<br/>
Duration: 45days</p>
           <h2>COURSE STRUCTURE</h2>
           
<h2>Curriculum for the Azure Data Engineer</h2>
<h3>What is Microsoft Azure?</h3>
<p>Microsoft Azure is a hardware and software-as-a-service cloud computing platform. The service provider creates a managed service here to give users on-demand access to these services.</p>
          <h3>What are data masking features available in Azure?</h3>
           <p>Azure SQL Database, Azure SQL Managed Instance, and Azure Synapse Analytics are all supported.
<br/>It can be applied to all SQL Databases under an Azure subscription as a security policy.
<br/>Users can adjust the level of masking to suit their needs.
<br/>Only the query results for certain column values on which data masking has been performed are masked. It has no effect on the database’s real stored data.</p>
        <h3>What is Polybase?</h3>   
           <p>From Azure SQL Database or Azure Synapse Analytics, query data stored in Hadoop, Azure Blob Storage, or Azure Data Lake Store. It eliminates the need for data to be imported from a third-party source.
<br/>Use a few easy T-SQL queries to import data from Hadoop, Azure Blob Storage, or Azure Data Lake Store without having to install a third-party ETL tool.
<br/>Export data to Hadoop, Azure Blob Storage, or Azure Data Lake Store with Azure Data Lake Store. It allows data to be exported and archived to external data repositories.</p>
 <h3>What is reserved capacity in Azure?</h3>          
           <p>Microsoft offers the option of reserving storage capacity on Azure to reduce Azure Storage charges. The reserved storage on Azure cloud provides users with a fixed amount of capacity for the reservation time. It may be used to store Gen 2 data in a normal storage account for Block Blobs and Azure Data Lake.</p>
           <h3>Explain the architecture of Azure Synapse Analytics</h3>
           <p>It’s built to handle tables with hundreds of millions of rows of data. Because Synapse SQL runs on a Massively Parallel Processing (MPP) architecture that distributes data processing across numerous nodes, Azure Synapse Analytics performs complicated queries and returns query results in seconds, even with large data.
The Synapse Analytics MPP engine is accessed through a control node, which acts as a point of entry for applications. The control node cuts down the Synapse SQL query into MPP optimised format when it receives it. Individual operations are also routed to compute nodes that can complete the processes in parallel, resulting in significantly improved query performance.</p>
           <h3>What are Dedicated SQL Pools?</h3>
           <p>Dedicated SQL Pool is a set of tools that allows you to use Azure Synapse Analytics to construct a more typical Enterprise Data Warehousing platform. Data Warehousing Units (DWU) are used to measure the resources, which are provisioned using Synapse SQL. A dedicated SQL pool stores data using columnar storage and relational tables, which improves query performance and reduces storage requirements.</p>
           
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser33'>
      <div className="service33">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view33'><img/></div>
            <div>
            <h1>HADOOP</h1>
            <p> Hadoop Training Live and Recorded Sessions 
<br/>• All documents related to the Hadoop  course
<br/>• Helping in installations
<br/>• Workshop utilities
<br/>Note:Resourceswillbe availableonly duringthe course periodexceptthe sessionrecordings&
documents
<br/>Course: Hadoop Administration
<br/>Course Duration: 20 Hours
<br/>
Who can attend? Aspiring candidate to learn Hadoop Ecosystem and Who are willing
to become Hadoop Admins and Hadoop Engineers.</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Module 0-Introduction</strong></h3>
    <ul>
        <li>Welcome to the class</li>
    </ul>
    <h3><strong>Module 1-Getting started</strong></h3>
    <ul>
        <li>What is Hadoop?</li>
        <li>What is Cloudera?</li>
        <li>Why Cloudera?</li>
        <li>Differences between CDH, HDP and CDP</li>
    </ul>
    <h3><strong>&nbsp;Module 2-Deep Dive into Hadoop</strong></h3>
    <ul>
        <li>Architecture of Hadoop</li>
        <li>Roles/Components in Hadoop and their working</li>
        <li>Commands used in Hadoop</li>
    </ul>
    <h3><strong>Module 3-YARN and its working</strong></h3>
    <ul>
        <li>Architecture of YARN</li>
        <li>Roles/Components in YARN and their working</li>
        <li>Commands used in YARN</li>
        <li>Architecture/working of MapReduce</li>
    </ul>
    <h3><strong>Module 4-Computational Services Hive and Impala</strong></h3>
    <ul>
        <li>Architecture of Hive</li>
        <li>Roles/Components in Hive</li>
        <li>Basic queries to understand HIVE</li>
        <li>Architecture of Impala</li>
        <li>Roles/Components in Impala</li>
        <li>Basic queries to understand Impala</li>
    </ul>
    <h3><strong>Module 5-Cluster/Configuration management through Zookeeper</strong></h3>
    <ul>
        <li>Architecture of Zookeeper</li>
        <li>Roles/Components in zookeeper</li>
        <li>HDFS failover through zookeeper</li>
    </ul>
    <h3><strong>Module 6-Kafka as a messaging service</strong></h3>
    <ul>
        <li>Architecture of Kafka</li>
        <li>Roles/Components in Kafka</li>
        <li>Commands used in Kafka and usage</li>
    </ul>
    <h3><strong>Module 7-Spark and SOLR</strong></h3>
    <ul>
        <li>Architecture of Spark</li>
        <li>Working with Spark</li>
        <li>Architecture of SOLR</li>
    </ul>
    <h3><strong>Module 8-Security through Sentry and Ranger</strong></h3>
    <ul>
        <li>Overview of sentry</li>
        <li>Working with sentry</li>
        <li>Overview of Ranger</li>
        <li>Working with Ranger</li>
    </ul>
    <h3><strong>Module 9-Troubleshooting</strong></h3>
    <ul>
        <li>How to troubleshoot any issues?</li>
        <li>Identifying the issue, categorizing the issue, Step towards resolution of issue<strong><br/></strong></li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser34'>
      <div className="service34">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view34'><img/></div>
            <div>
            <h1>MANUAL API TESTING WITH POSTMAN</h1>
            <p>Postman is an API developer collaboration platform. It is a well-known API client that allows you to create, construct, share, test, and document APIs. We can use the Postman tool to submit HTTPs queries to a service and receive their responses. This allows us to ensure that the service is operational. Postman, which began as a Chrome browser plugin, now offers a native version for both Mac and Windows. Join V cube for Manual Testing & API with Postman training.</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Module 1: Testing Concepts (Theoretical Concepts)</strong></h3>
    <ul>
        <li>What is Software? Types of Software’s?</li>
        <li>What is Software Testing?</li>
        <li>What is Software Quality?</li>
        <li>Project Vs Product</li>
        <li>Why do we need Testing?</li>
        <li>Error, Bug & Failure</li>
        <li>Why the software has bugs?</li>
        <li>SDLC & STLC</li>
        <li>Waterfall Model</li>
        <li>Spiral Model</li>
        <li>V-Model</li>
        <li>QA & QC & QE</li>
        <li>Different Levels of Software Testing</li>
        <li>White Box & Black Box Testing</li>
        <li>Static Testing & Dynamic Testing</li>
        <li>Verification & Validation</li>
        <li>System Testing Types</li>
        <li>GUI Testing</li>
        <li>Functional & Non-Functional Testing</li>
        <li>Test Design Techniques</li>
        <li>Re-Testing & Regression Testing</li>
        <li>Exploratory Testing</li>
        <li>Adhoc Testing</li>
        <li>Sanity & Smoke Testing</li>
        <li>End – To – End Testing</li>
        <li>STLC (Software Testing Life Cycle)</li>
        <li>Use case, Test scenario & Test Case</li>
        <li>Test Environment and Execution</li>
        <li>Defect Reporting</li>
        <li>Test Closure</li>
        <li>Test Metrics</li>
    </ul>
    <h3><strong>Module 2: Software Testing Project</strong></h3>
    <ul>
        <li>Project Introduction</li>
        <li>Understanding Functional Requirements from FRS</li>
        <li>Creating Test Scenarios</li>
        <li>Creating Test Cases</li>
        <li>Test execution</li>
        <li>Bug Reporting & Tracking</li>
        <li>Test Sign off</li>
    </ul>
    <h3><strong>Module 3: Agile Testing + Jira Tool</strong></h3>
    <ul>
        <li>Scrum Team</li>
        <li>What is Sprint</li>
        <li>What is user story</li>
        <li>How to give story points/How to estimate user story</li>
        <li>What is definition of Done and Definition of Ready</li>
        <li>Different Sprint Activities</li>
        <li>Sprint Planning / Backlog Refinement / Sprint Review / Sprint Retrospective</li>
    </ul>
    <h3><strong>Jira Tool :-</strong></h3>
    <ul>
        <li>How to install and configure JIRA Tool</li>
        <li>How to create an EPIC/User stories in JIRA</li>
        <li>Creating Sprints in JIRA</li>
        <li>Sprint Life Cycle in JIRA</li>
        <li>Backlogs in JIRA</li>
        <li>Creating Bugs in JIRA</li>
        <li>How to write test cases in JIRA with Test Rail Plugin</li>
        <li>Creating test Cycles and Execute Test cases in JIRA</li>
    </ul>
    <h3><strong>API with Postman:-</strong></h3>
    <ul>
        <li>Introduction to API/Webservices</li>
        <li>How To Download and Install Postman</li>
        <li>Postman UI</li>
        <li>Types of HTTP Requests</li>
        <li>Get, Post, Put & Delete requests</li>
        <li>Adding Tests/Validations</li>
        <li>Data Driven Testing using JSON & CSV Files</li>
        <li>How To Run Collections</li>
        <li>How to Generate HTML Reports</li>
        <li>Exporting & Importing collections</li>
        <li>Fake API Creation & Requests</li>
        <li>postman variables</li>
        <li>workflows</li>
        <li>How to create own API’s(Fake API’s)</li>
        <li>How To Chain API Requests</li>
        <li>Authorizations</li>
        <li>Postman Scripting/ Response Validations</li>
        <li>Script Execution Order</li>
        <li>Single/Multipart Files Upload & Download.</li>
        <li>Export & import collections</li>
        <li>Documenting Collections</li>
        <li>Run options</li>
        <li>Postman Integration with Jenkins</li>
    </ul>
            
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser35'>
      <div className="service35">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view35'><img/></div>
           <div>
           <h1>MAIN FRAMES</h1>
           <p>A mainframe is the core data repository, or hub, in a corporation’s data processing centre, and it is connected to users via less capable devices like as workstations or terminals. The presence of a mainframe frequently implies centralised computing as opposed to distributed computing.Join V Cube for Main Frames course in Kphb.</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Course concepts</strong></h3>
    <ul>
        <li>Introduction to IBM Mainframe Systems</li>
        <li>IBM Mainframe Architecture</li>
        <li>Data and Job Management</li>
        <li>Operating Systems</li>
        <li>TSO, ISPF</li>
    </ul>
    <h3><strong>COBOL</strong></h3>
    <ul>
        <li>Introduction to COBOL and its versions</li>
        <li>COBOL Program structure</li>
        <li>Field Declaration – Data Types</li>
    </ul>
    <h3><strong>COBOL Statements</strong></h3>
    <ul>
        <li>ACCEPT</li>
        <li>DISPLAY</li>
        <li>MOVE</li>
        <li>INITIALIZE</li>
        <li>IF Statement</li>
        <li>EVALUATE</li>
        <li>STRING and UNSTRING</li>
        <li>COPY</li>
        <li>COMPUTE</li>
        <li>PERFORM</li>
        <li>REDEFINES</li>
        <li>RENAMES</li>
        <li>Computational Usages</li>
        <li>STOP RUN, GOBACK, EXIT PROGRAM</li>
    </ul>
    <h3><strong>File Handling</strong></h3>
    <ul>
        <li>How to use files in COBOL Program?</li>
        <li>File Programming using Sequential, Indexed and Relative files</li>
        <li>Realtime programs using files</li>
    </ul>
    <h3><strong>Table Handling</strong></h3>
    <ul>
        <li>Array Declaration</li>
        <li>Using arrays in programs with</li>
        <li>SEARCH & SEARCH ALL</li>
        <li>Subscripting & Indexing</li>
        <li>Sorting & Merging</li>
        <li>Resolving File Status codes and abends</li>
        <li>Coding Realtime Programs</li>
    </ul>
    <h3><strong>DB2(RDBMS)</strong></h3>
    <ul>
        <li>DB2 – Database concepts</li>
        <li>DB2 Organization</li>
        <li>Tablespaces, Tables, Views, Indexes, Synonyms, Aliases</li>
        <li>Using SQL Queries</li>
        <li>DDL(CREATE, ALTER and DROP COMMANDS)</li>
        <li>DML(SELECT, INSERT, UPDATE and DELETE)</li>
        <li>DCL(GRANT & REVOKE)</li>
        <li>Group By, Having, Order By</li>
        <li>Joins</li>
        <li>Subqueries vs Correlated subqueries</li>
        <li>Unions</li>
        <li>DCLGEN, SPUFI and QMF</li>
        <li>DB2 Utilities</li>
        <li>NULLS – Null Indicators</li>
        <li>Cursors and Types</li>
        <li>SQLCA</li>
        <li>DB2 Program Preparation</li>
        <li>Pre-compilation</li>
        <li>BIND – Packages & Plans</li>
        <li>DB2 Locking and Concurrency</li>
        <li>Locking Modes</li>
        <li>Isolation Levels</li>
        <li>Commit & Rollback</li>
        <li>Constraints</li>
        <li>DB2 Performance issues and tuning techniques</li>
        <li>SQLCODES and resolving abends</li>
        <li>COBOL-DB2 Realtime Programming</li>
    </ul>
    <h3><strong>VSAM (File concept)</strong></h3>
    <ul>
        <li>Introduction to VSAM</li>
        <li>VSAM Datasets – ESDS, KSDS, RRDS</li>
        <li>Space management</li>
        <li>Alternate Indexes</li>
        <li>Dataset structures</li>
        <li>Defining Clusters</li>
        <li>IDCAMS – Repro, Print, Alter, Delete</li>
        <li>START, INVALID KEY</li>
        <li>Accessing VSAM files from COBOL</li>
        <li>File status codes and abend codes</li>
        <li>Coding programs using VSAM files</li>
    </ul>
    <h3><strong>Tools</strong></h3>
    <ul>
        <li>File-Aid for files & DB2</li>
        <li>Changeman</li>
        <li>Xpeditor</li>
    </ul>
    <h3><strong>Software Engineering</strong></h3>
    <ul>
        <li>Application development covering all phases of SDLC</li>
                <li>Quality Management</li>
        <li>Documentation</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser36'>
      <div className="service36">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view36'><img/></div>
            <div>
            <h1>BIG DATA ANALYTICS</h1>
            <p>This Big Data Analytics course teaches you the fundamentals of the Hadoop platform, Big Data technologies, and approaches. A Big Data certification will set you up for success as a Big Data Developer. This Big Data and Hadoop training will help you learn how the various Hadoop ecosystem components fit into the Big Data processing lifecycle. Explore Spark applications, parallel processing, and functional programming with this Big Data and Hadoop online class. Join V cube for Big Data Analytics training in Kphb.
<br/>
BIG DATA COURSE Duration : 45 Days</p>
            <h2>COURSE STRUCTURE</h2>
            <h2>Description of Big Data</h2>
<p>Big data analytics are information assets with great volume, high velocity, or high diversity that necessitate novel types of processing to enable improved decision making, insight finding, and process optimization.” Let us delve deeper and break this down into simpler terms. The term “big data” is self-explanatory: it refers to a collection of massive data sets that traditional computing techniques cannot handle. The word encompasses not only the data but also the numerous frameworks, tools, and methodologies involved. Because of technical improvements and the advent of new channels of communication, such as social networking, and stronger gadgets, industry participants face a problem. The entire globe had only five billion gigabytes of data from the beginning of time until 2003. In 2011, the same amount of data was created in only two days. This volume was generated every ten minutes by 2013. As a result, it is not unexpected that 90 percent of all data in the globe has been generated in the last few years. All of this data is useful when analyzed, but it was mostly ignored before the concept of big data emerged. Consider professional certification training in Big Data or related technologies, such as Impala, Cassandra, Spark, and Scala, to learn more about Big Data and get your foot in the Data Science industry door.</p>
<h2>What is Big Data used for?</h2>
<p>Big Data is an open-source software environment for data storage and processing that works on commodity hardware clusters. It has a vast storage capacity, a large processing capacity, and the ability to run practically endless concurrent tasks or jobs. This course is designed to prepare you to become a certified big data practitioner by providing thorough practical training in the Big Data Ecosystem.</p>
<h2>History of Big Data</h2>
<p>The first evidence of big data can be found in 1663, when John Graunt dealt with massive volumes of data while researching the bubonic plague, which was ravaging Europe at the time. Graunt was the first to employ statistical data analysis. Later, in the early 1800s, the study of statistics broadened to include data collection and analysis.In 1880, the world became aware of the problem of data overload. The US Census Bureau announced that it will take eight years to gather and process the data acquired during that year’s census programme. In 1881, a Bureau employee called Herman Hollerith invented the Hollerith Tabulating Machine, which decreased computation work.</p>
<h2>Types of Big Data : </h2>
<p>1.Structured data : Structured data is data that can be stored, accessed, and processed in a fixed format. Because this data is in a similar format, firms may make the most of it by undertaking analysis. A variety of advanced technologies are also being developed in order to extract data-driven judgments from structured data. However, the world is approaching a point where the generation of structured data is out of control, as it has already surpassed the zettabyte level. 
<br/>
2.Unstructured data : Unstructured data is any data that has an undetermined shape or organisation. Processing unstructured data and analysing it to acquire data-driven responses is a difficult undertaking because they are from diverse categories, and combining them will only make matters worse. Unstructured data is a heterogeneous data source that contains a mix of plain text files, photos, movies, and so on.

 
<br/>
3.Semi-structured data : Semi-structured data contains both structured and unstructured information. Semi-structured data appears to be structured in form, but it is not defined with table definition in relational DBMS. Semi-structured data is common in web applications. It contains unstructured data such as log files, transaction history files, and so on. OLTP systems are designed to operate with structured data, which is stored in relationships.</p>
            
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser37'>
      <div className="service37">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view37'><img/></div>
            <div>
            <h1>ABINITIO TRAINING</h1>
            <p>Ab Initio is a robust Business Intelligence platform with a graphical user interface that can handle multiple applications in simultaneously. It includes a variety of products. Practically learn Ab Initio with our professionals in real-time. Learn the fundamentals of Abinitio as well as additional features to become an expert in Ab Initio functions and apps for dealing with real-time jobs.</p>
            <h2>COURSE STRUCTURE</h2>
            <p><strong>Introduction to Ab Initio :</strong></p>
    <ul class="show-sub-content">
        <li>Salient Features of Ab Initio</li>
    </ul>
    <p><strong>AB Initio Architecture :</strong></p>
    <ul class="show-sub-content">
        <li>The Ab Initio Co-Operating System</li>
        <li>Graphical Development Environment (GDE)</li>
        <li>The Ab Initio Enterprise Meta-Environment (EME)</li>
    </ul>
    <p><strong>Sandbox and Parameter details :</strong></p>
    <ul class="show-sub-content">
        <li>What is sandbox and its usage?</li>
        <li>Public and private parameters</li>
        <li>Air Project parameter file</li>
    </ul>
    <p><strong>Graph Programming :</strong></p>
    <ul class="show-sub-content">
        <li>What is graph programming and basic parts of AbInitio graph building?</li>
        <li>What is the Anatomy of Running a Job</li>
        <li>How do we Connect from GDE to the Server (Run ? Settings)</li>
        <li>Broad classification of components</li>
        <li>Editors in the GDE</li>
        <li>XFR and its usage</li>
    </ul>
    <p><strong>Data Manipulation Language Overview (DML) :</strong></p>
    <ul class="show-sub-content">
        <li>Record Formats</li>
        <li>DML Expressions</li>
        <li>Transform Functions</li>
        <li>Key Specifiers</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser38'>
      <div className="service38">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view38'><img/></div>
            <div>
            <h1>SNOW FLAKE</h1>
            <p>Informatica has been an top Snowflake partner with hundreds clients who share a common enterprise. We allow customers to access transform, manage and control trillions of data each month using the Snowflake Data Cloud to uncover significant insights through AI and analytics at large scale. Join V CUBE for Snowflake Training in Hyderabad.
<br/>
Duration : 45 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h2>What is Informatica snowflake?</h2>
            <p>Snowflake provides a Data Cloud that is powered by an advanced data platform provided as Software-as-a-Service (SaaS). Snowflake provides information storage, data processing and analytics solutions that are more efficient and more user-friendly, and more flexible than traditional database solutions. Informatica is an official Snowflake partner who allows customers to infuse transform, manage and control huge information on the Snowflake Data Cloud to uncover valuable insights through analytics and AI on a large the scale of. By utilizing Informatica and Snowflake businesses can elevate their business into the future, while decreasing costs and reducing risk. With a single, controlled data cloud, companies will be able to provide better services for their clients by modernizing their data management processes, making it easier for customers to self-service and improving operational efficiency to be able to rapidly develop, change and innovate in line with the changing needs of their business. Get Snowflake Training in Hyderabad for more details, Fill the Below form our Team will Assist you in 24hrs.</p>
            <h2>Snowflake</h2>
            <h3>Description of Snowflake Training </h3>
            <p>Snowflake’s Data Cloud is powered by an advanced data platform provided as Software-as-a-Service (SaaS). Snowflake provides the storage and processing of data  and analytic tools that are quicker and more user-friendly, and more flexible than conventional offerings. It is the Snowflake data platform isn’t built on existing data technology, as well as “big data” software platforms like Hadoop. In contrast, Snowflake combines a completely brand new SQL query engine and an innovative structure designed specifically for cloud. For users, Snowflake provides all of the capabilities of an enterprise-level analytical database, as well as several other special features and capabilities that are unique to.</p>
            <h3>Why to learn Snowflake?</h3>
            <p>With the growing demand for data analytics and warehouses this is the perfect chance for professionals and students to learn about this fast-growing platform and gain huge advantages in terms of professional advancement, newer roles in the workforce as well as hefty pay packages. Many companies are using snowflake as a platform and have over 4000 accounts active. In addition is the fact that there are more than 4000 active users and more than 450 million jobs on Snowflake that are being posted each day, the future appears exceptionally bright in this sector.

<br/>We at V Cube Software Solutions have designed a comprehensive Snowflake training program for professionals and students alike to jump-start their careers in this area of specialization. This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready.

<br/>Join V cube software Solutions for Snowflake training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects. We offer the best-in-class Snowflake training and Snowflake job support to offer the right platform to power your career to the next level.

<br/>Get snowflake training in Kukatpally Now and Upgrade your skills.</p>
            
            
            
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser39'>
      <div className="service39">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view39'><img/></div>
            <div>
            <h1>TOSCA</h1>
            <p>Tosca Test is an agile software tool used to automate test cases from beginning to finish which ensures a complete control of the software applications. This tool is built around a Linear methodology, which includes test script design, test data design and generation, test automation strategy. All these principles will assist in the ongoing and consistent testing of GUIs and APIs from a business point of view. Model test method based on model and Risk-based test techniques are the tools that distinguish it over other. Join V cube software solutions Pvt Ltd. for Tosca Training.
<br/>
Duration : 45 Days</p>
            <h2>COURSE STRUCTURE</h2>
            <h2>What is Tosca Software Testing ?</h2>

<p>Software testing is defined as an activity to check whether the actual results match the expected results and to ensure that the software system is Defect free. It involves execution of a software component or system component to evaluate one or more properties of interest. 
 <br/>In simple terms, Software Testing means Verification of Application Under Test (AUT). 
 <br/>Software testing also helps to identify errors, gaps or missing requirements in contrary to the actual requirements. It can be either done manually or using automated tools. Some prefer saying Software testing as a White Box and Black Box Testing.
<br/>We, as testers are aware of the various types of Software Testing such as Functional Testing, Non -Functional Testing, Automation Testing, Agile Testing, and their sub -types etc.</p>
<h2>Why Tosca Training is so Popular ?</h2>
<p>Tosca Test is an agile software tool used to automate test cases from beginning to finish which ensures a complete control of the software applications. This tool is built around a Linear methodology, which includes test script design, test data design and generation, test automation strategy. All these principles will assist in the ongoing and consistent testing of GUIs and APIs from a business point of view. Model test method based on model and Risk-based test techniques are the tools that distinguish it over other.</p>
<h3>Black Box Testing </h3>
<p>Internal system design is not considered in this type of testing. Tests are based on the requirements and functionality.</p>
<h3>White Box Testing </h3>
<p>♦ White Box testing is based on the knowledge about the internal logic
of an application’s code.
<br/>♦ It is also known as Glass box Testing. Internal software and code
<br/>♦working should be known for performing this type of testing. Under
<br/>♦these tests are based on the coverage of code statements,branches, paths, conditions etc.</p>
<h2>WHY TO LEARN TOSCA TRAINING?</h2>
<p>Tosca can be described as an instrument for software testing that automates the entire testing process for software applications. Tosca integrates several elements of testing software (test case design and automation, design of test data and generation, as well as analytics) to evaluate GUIs as well as APIs, from a commercial perspective. Instead of making use of scripting to testing automation, Tosca applies an approach to testing that is model-based and builds the model of the application that is being tested. Details about the test application and the logic behind the test cases as well as tests data are saved in separate files and then joined during the time of test execution. If an element within the application under test is changed the technical information is updated within the model centrally. Since test cases originate from this model, the diverse test cases that test for the changed element don’t need to be altered manually to reflect the changes. Now is the time to enroll in tosca training in Hyderabad,KPHB and improve your skills.</p>

            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser40'>
      <div className="service40">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view40'><img/></div>
            <div>
            <h1>DJANGO</h1>
            <p>Django is a high-level Python web framework that promotes rapid development and simple, practical design. It’s built by professional developers to take care of a lot of the headaches of web development so you can concentrate on developing your app instead of reinventing the wheel. It’s open source and free.
<br/> Learn Django python course in kphb at V cube software solutions.
<br/>
Duration : 45 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Introduction</strong></h3>
    <ul>
        <li>Django is a high-level Python web framework for building secure and maintainable websites quickly. Django is a web framework built by experienced developers that takes care of a lot of the heavy lifting so you can focus on developing your app instead of reinventing the wheel. It’s free and open source, with a vibrant and active community, excellent documentation, and a variety of free and paid support options.</li>
    </ul>
    <h3><strong>History of Django</strong></h3>
    <ul>
        <li>This was created by a web team that was in charge of establishing and maintaining newspaper websites between 2003 and 2005. After building a few sites, the team started to factor out and reuse a lot of the same code and design principles. This shared code grew into the “Django” web development framework, which was released as open-source in July 2005.</li>
        <li>From its first milestone release (1.0) in September 2008 to the most recent version 4.0, Django has continued to evolve and improve (2022). From support for new types of databases, template engines, and caching to the addition of “generic” view functions and classes, each release has provided additional features and bug fixes.</li>
    </ul>
    <h3><strong>Contents</strong></h3>
    <ul>
        <li>Setup development environment</li>
        <li>Getting started with Django</li>
        <li>Creating an application</li>
        <li>Views layer</li>
        <li>URL mapping</li>
        <li>Templates</li>
        <li>Authentication</li>
        <li>Static files</li>
        <li>Live project</li>
    </ul>
    <h3><strong>Models</strong></h3>
    <ul>
        <li>Creating migrations</li>
        <li>Running migrations</li>
    </ul>
    <h3><strong>ORM</strong></h3>
    <ul>
        <li>Django ORM</li>
        <li>QuerySets</li>
        <li>Retrieving objects</li>
        <li>Filtering Objects</li>
        <li>Q Objects</li>
        <li>F Objects</li>
        <li>Aggregating Objects</li>
        <li>Annotating Objects</li>
        <li>Grouping Data</li>
        <li>Creating Objects</li>
        <li>Updating Objects</li>
        <li>Deleting Objects</li>
        <li>Transactions</li>
        <li>Executing Raw SQL Queries</li>
    </ul>
    <h3>Executing Raw SQL Queries Project Deployment</h3>
    <ul>
        <li>HTML</li>
        <li>Advanced HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>Bootstrap</li>
        <li>GIT</li>
    </ul>
    <h3><strong>Installing MySQL</strong></h3>
    <ul>
        <li>Connecting to MySQL</li>
        <li>Using MySQL in Django</li>
        <li>Basic MySQL commands</li>
    </ul>
    <h3><strong>Debugging Toolbar</strong></h3>
    <ul>
        <li>The Django Debug Toolbar is a series of panels that may be customised to provide various debug information about the current request/response and, when clicked, show more information about the panel’s content.</li>
    </ul>
    <h3><strong>Django REST</strong></h3>
    <ul>
        <li>Installing Rest</li>
        <li>Framework</li>
        <li>Creating API Views</li>
        <li>Creating Sterilizers</li>
        <li>Serializing objects</li>
        <li>Deserializing objects</li>
    </ul>
    <h3><strong>Django Admin</strong></h3>
    <ul>
        <li>Setting Up Admin Site</li>
        <li>Registering modules</li>
        <li>Customizing list page</li>
        <li>Adding filtering to the list page0</li>
    </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser41'>
      <div className="service41">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
            <div>
            <div className='view41'><img/></div>
            <div>
            <h1>SELENIUM WITH PYTHON TRAINING</h1>
            <p>Selenium is an open-source umbrella project providing a collection of web browser automation technologies and libraries. Without having to learn a test scripting language, Selenium provides a playback tool for building functional tests (Selenium IDE). It also includes a test domain-specific language (Selenese) for writing tests in JavaScript (Node.js), C#, Groovy, Java, Perl, PHP, Python, Ruby, and Scala. Most recent web browsers can then be used to run the tests. Selenium is available for Windows, Linux, and Mac OS X. It’s free software distributed under the Apache License 2.0.

<br/>
Selenium with Python Course Duration : 30 days</p>
            <h2>COURSE STRUCTURE</h2>
            <h3><strong>Getting start with Automation</strong></h3>
        <ul>
            <li>What is Automation Testing</li>
            <li>Manual Vs Automation</li>
            <li>Tools for Automation Testing</li>
            <li>Selenium for Experienced, Manual tester and Selenium for Fresher’s Discussion in detail</li>
            <li>Selenium Introduction, Advantage, Limitation, etc</li>
        </ul>
        <h3><strong>Python for Selenium</strong></h3>
        <ul>
            <li>What is Python and features of Python</li>
            <li>Different variants of Python and which one we should go for.</li>
            <li>Python installation and component explanation</li>
            <li>Different IDE for Python and Installation/Setup of PyCharm</li>
            <li>Download and Install IPython</li>
            <li>Write and Execute first python program</li>
            <li>Reserved Keywords in Python</li>
        </ul>
        <h3><strong>Selenium Basic</strong></h3>
        <ul>
            <li>Selenium JSON Wireless Protocol- Selenium API to understand Selenium functionality</li>
            <li>Selenium Architecture- Selenium internal architecture</li>
            <li>Setting up stage- Install/ Configure Selenium in windows and MAC</li>
            <li>Working with different browser- Chrome, IE, Firefox- Challenges with Each browser and Solution</li>
            <li>Browser Navigation commands</li>
           
        </ul>
            </div>
          </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser42'>
      <div className="service42">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view42'><img/></div>
           <div>
           <h1>TABLEAU</h1>
           <p>TABLEAU COURSE IN HYDERABAD is a rapid growing Data Visitation tool that help organizations to see and understand the data of the business. Our Tableau training online program helps to scaleup your career. V Cube is the best Tableau Training Institutes in Hyderabad providing Online  classes by real time Experts.
<br/>
Duration:40 day</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Introduction</strong></h3>
    <ul>
        <li>Why Tableau software?</li>
        <li>Why data visualization?</li>
        <li>Level Set – Terminology</li>
        <li>Creating some powerful visualizations quickly</li>
        <li>Product Key Generator</li>
    </ul>
    <h3><strong>Getting Started</strong></h3>
    <ul>
        <li>Connecting to Data</li>
        <li>Introduction to data source concept </li>
        <li>Data files vs database server</li>
        <li>Building Basic Views</li>
        <li>Dimensions and Measures</li>
        <li>Using Show Me!</li>
        <li>Understanding workspace</li>
        <li>Help Menu and Samples </li>
        <li>Saving and sharing your work</li>
        <li>Tour of Shelves (How shelves and marks work) </li>
        <li>Date aggregations and date parts</li>
        <li>Creating Views</li>
        <li>Filtering and Quick Filters Marks</li>
        <li>Highlighting </li>
        <li>Working with Dates</li>
        <li>Size and Transparency</li>
        <li>Dual Axis / Multiple Measures</li>
        <li>Combo Charts with different mark types </li>
        <li>Heat Map</li>
        <li>Scatter Plots</li>
        <li>Sorting & Grouping</li>
        <li>Pie Charts and Bar Charts </li>
        <li>Geographic Map Page Trails Small Multiples</li>
        <li>Analysing </li>
        <li>Density Chart Aliases</li>
        <li>Cross-Tabs (Pivot Tables)</li>
        <li>Working with aggregate versus disaggregate data</li>
        <li>Totals and Subtotals Drilling and Drill Through </li>
        <li>Different Chart Types</li>
        <li>Percent of Total</li>
        <li>Aggregation and Disaggregation </li>
        <li>Working with Statistics and Trend lines</li>
        <li>Data Interpreter</li>
    </ul>
    <h3><strong>GETTING STARTED WITH CALCULATED FIELDS</strong></h3>
    <ul>
        <li>Custom Aggregations </li>
        <li>Logic Statements</li>
        <li>Working with String Functions</li>
        <li>Basic Arithmetic Calculations </li>
        <li>Date Math</li>
        <li>Working with Totals</li>
    </ul>
    <h3><strong>FORMATTING</strong></h3>
    <ul>
        <li>Introduction to Visual Best Practices </li>
        <li>Working with Labels and Annotations </li>
        <li>Effective Use of Titles and Captions</li>
        <li>Options in Formatting your Visualization</li>
    </ul>
    <h3><strong>BUILDING INTERACTIVE DASHBOARD</strong></h3>
    <ul>
        <li>An Introduction to Best Practices in Visualization </li>
        <li>Combining multiple visualizations into a dashboard</li>
        <li>Making your worksheet interactive by using actions and filters</li>
    </ul>
    <h3><strong>SHARING WORKBOOKS</strong></h3>
    <ul>
        <li>Publish to Reader </li>
        <li>Sharing to Office </li>
        <li>Transfer to PDF</li>
        <li>Packaged Workbooks</li>
        <li>Publish to Tableau Server and Sharing over the Web</li>
    </ul>
    <h3><strong>CHART TYPES AND ADVANCED LEVEL FORMATTING. SERVER or ONLINE</strong></h3>
    <ul>
        <li>Projects, Workbooks </li>
        <li>Permissions</li>
        <li>Sharing.</li>
        <li>Overview of Server or Online.</li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser43'>
      <div className="service43">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view43'><img/></div>
           <div>
           <h1>TERRAFORM</h1>
           <p>1. Introduction to Terraform (30 mins)
           <br/>a. Introduction to DevOps
           <br/>b. Introduction to Infrastructure-As-Code (IaC) Tools
           <br/>c. How Terraform functions as IaC Tool
           <br/>d. How Terraform compares vis-a-vis of other IaC Tools
<br/>2. Getting Started (30 mins)
<br/>a. Installing Terraform
<br/>i. Installing on Windows
<br/>ii. Installing on Linux
<br/>iii. Installing on Mac
<br/>b. Setting up AWS Account
<br/>3. Beginning Infrastructure Automation with Terraform (30 mins)
<br/>a. Create an EC2 instance using AWS Console
<br/>b. Create an EC2 Instance using Terraform
<br/>c. Create an EC2 Instance as Webserver using Terraform


<br/>4. Understanding HCL (HashiCorp Configuration Language) (60 mins)
<br/>a. Terraform Variables
<br/>b. Conditional Expressions
<br/>c. Terraform Functions
<br/>d. Dynamic Blocks
<br/>e. Output Attributes
<br/>f. Data Sources
<br/>5. Advanced Infrastructure Automation with Terraform (120 mins)
<br/>a. Create an EC2 Instance within VPC
<br/>b. Create an EC2 Instance with EBS Volume
<br/>c. Create an RDS Instance
<br/>d. Create an Auto Scaling Group (ASG)
<br/>e. Create an Elastic Load Balancer (ELB)
<br/>6. State Management with Terraform (30 mins)
<br/>a. Local State using state file
<br/>b. Remote State using backend
<br/>c. Isolating state using workspaces
<br/>7. Terraform CLI usage (30 mins)</p>
           <h2>COURSE STRUCTURE</h2>
           
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser44'>
      <div className="service44">
        <div className="options">
          <button className="option" onClick={() => handleViewClick(
           <div>
           <div className='view44'><img/></div>
           <div>
           <h1>AZURE ADMIN</h1>
           <p>AZURE ADMIN :An Azure administrator often serves as part of a larger team dedicated to implementing an organization’s cloud infrastructure. An Azure administrator often serves as part of a larger team dedicated to implementing an organization’s cloud infrastructure. Azure Admin Training in Hyderabad: V Cube Software Solutions provides azure admin training institutes in hyderabad kukatpally .
<br/>
DURATION: 45 DAYS</p>
           <h2>COURSE STRUCTURE</h2>
           <h3><strong>Introduction to Azure</strong></h3>
    <ul>
        <li>Cloud technology overview</li>
        <li>Overview of Azure</li>
        <li>Managing Azure with the Azure portal</li>
        <li>Managing Azure with Windows PowerShell</li>
        <li>Azure management services</li>
    </ul>
    <h3><strong>Implementing and Managing Azure Networking</strong></h3>
    <ul>
        <li>Overview of Azure networking</li>
        <li>Implementing and managing Azure virtual networks</li>
        <li>Configuring Azure virtual networks</li>
        <li>Configuring Azure virtual network connectivity</li>
        <li>Configuring the Subnets</li>
        <li>Virtual Network Region Peering</li>
        <li>Virtual Network Global Peering</li>
        <li>Understanding Azure to On-Prem Connectivity</li>
        <li>Azure Virtual Network</li>
        <li>Understanding User Defined Routes (UDR)</li>
    </ul>
    <h3><strong>Understanding and Configuring Network Security Groups (NSG)</strong></h3>
    <ul>
        <li>Understanding Azure Network Security Groups (NSG)</li>
        <li>Inbound & Outbound Security Rules</li>
        <li>Understanding NSG Rule Hierarchy</li>
        <li>Network Security Groups and leaning rule priority</li>
        <li>NSG Rules with Service tags</li>
        <li>Understanding Application Security Groups (ASG)</li>
    </ul>
    <h3><strong>Understanding Firewall</strong></h3>
    <ul>
        <li>Overview of Azure Firewall as a Service</li>
        <li>Azure Firewall</li>
    </ul>
    <h3><strong>Implementing & Configuring Azure Virtual Machines</strong></h3>
    <ul>
        <li>Overview Azure virtual machines</li>
        <li>Virtual machines in Azure portal</li>
        <li>Virtual machines using Azure CLI</li>
        <li>Managing Azure Virtual machine storage</li>
        <li>Understanding Availability sets, Fault Domain & Update Domain</li>
        <li>Designing & Implementing Azure Load Balancing</li>
        <li>Overview on Load Balancing</li>
        <li>Type of Load Balancers in Azure</li>
        <li>Basic Vs Standard Load Balancer</li>
        <li>Backend Pools, Health probes, and Load Balance rules</li>
        <li>Checking the Load Balancing scenarios</li>
        <li>Configuring Azure Application gateway</li>
        <li>Understanding Azure Application Gateway architecture</li>
        <li>Understanding Path Based Routing in AGW</li>
        <li>Configuring Auto Scaling with Virtual Machine Scale Sets (VMSS)</li>
        <li>Azure VM Image for VMSS</li>
        <li>Deploy VMSS with the custom image</li>
    </ul>
    <ul>
    <li>Planning and implementing Azure Storage</li>
        <li>Azure Storage account overview</li>
        <li>Understand Blob Storage</li>
        <li>Understand File Shares</li>
        <li>Data migration using Azure storage explorer</li>
        <li>Manage Azure Storage permissions</li>
        <li>Configure and Manage Azure Backup and Disaster Recovery Services</li>
        <li>Implementing Azure App servicesAzure Web Apps overview (PaaS)</li>
        <li>Deploying and Managing Web Apps</li>
        <li>Azure App Service plan</li>
        <li>Implementing Azure Active Directory</li>
        <li>Azure Domain services</li>
        <li>Azure Active Directory overview</li>
        <li>Deploy and configure Active directory</li>
        <li>Create and manage users and groups</li>
        <li>Implementing Azure Active Directory</li>
        <li>Azure Domain services</li>
        <li>Azure Active Directory overview</li>
        <li>Deploy and configure Active directory</li>
        <li>Create and manage users and groups</li>
        <li>Configure Diagnostics, Monitoring, and Analytics</li>
        <li>Azure Monitoring and alerts configuration</li>
        <li>Log analytics</li>
        <li>Insights virtual machines and network</li>
        <li>Azure Migrate projects and customer billing optimization</li>
        <li>Azure Migration projects</li>
        <li>Recovery services vaults</li>
        <li>Azure Database migration services</li>
        <li>Azure cost calculator</li>
        <li>Azure price optimization</li>
        <li>Azure Certification & Azure Project.</li>
        <li>
            <p>Understanding Azure VMSS</p>
        </li>
    </ul>
           </div>
         </div>
          )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>


      <div className='ser45'>
      <div className="service45">
        <div className="options">
        <button className="option" onClick={() => handleViewClick(
          <div>
          <div className='view45'><img/></div>
          <div>
          <h1>MERN STACK DEVELOPEMENT</h1>
          <p>MERN is one of several MEAN stack (MongoDB Express Angular Node) variants in which the traditional Angular.js frontend framework is replaced with React.js. MEVN (MongoDB, Express, Vue, Node) is another variant, and really any frontend JavaScript framework can work.Node.js is a popular and powerful JavaScript server platform, and Express.js is a server-side web framework. Regardless of which variant you choose, ME(RVA)N is the best way to work with JavaScript and JSON from start to finish.
<br/>
DURATION:60 days</p>
          <h2>COURSE STRUCTURE</h2>
          <h3><strong>WEB TECHNOLOGIES</strong></h3>
      <ul>
        <li>Introduction to web technologies</li>
        <li>Introduction to web applications</li>
        <li>What is FULL, MEAN, MERN Stack</li>
        <li>Editors</li>
      </ul>
      
      <h3>HTML</h3>
      <ul>
        <li>Introduction</li>
        <li>Layers in web application</li>
        <li>Tags, attributes</li>
        <li>Programming</li>
      </ul>
      
      <h3><strong>CSS</strong></h3>
      <ul>
        <li>Introduction</li>
        <li>Selectors and types of selectors</li>
        <li>Font, text, border, images</li>
        <li>&nbsp;Properties</li>
        <li>Class rules</li>
        <li>&nbsp;Layouts with CSS</li>
        <li>&nbsp;Absolute, relative, fixed Positioning</li>
        <li>&nbsp;Float, clear</li>
      </ul>
      
      <h3><strong>JAVASCRIPT</strong></h3>
      <ul>
        <li>Introduction</li>
        <li>Programming languages</li>
        <li>Uses of JavaScript</li>
        <li>Keywords, operators</li>
        <li>Browser objects, JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects</li>
        <li>Dialogs</li>
        <li>Events</li>
        <li>Basic programming</li>
        <li>Functions</li>
        <li>Let, const keywords</li>
        <li>Nested functions, Closures</li>
        <li>Anonymous functions</li>
        <li>Function expressions</li>
        <li>Hoisting in JavaScript</li>
        <li>animations</li>
        <li>Validations</li>
        <li>AJAX</li>
      </ul>
      
      <h3><strong>DOM (document object model)</strong></h3>
      <ul>
        <li>Introduction</li>
        <li>Types of DOM</li>
        <li>Uses</li>
        <li>Properties and methods</li>
        <li>programming</li>
      </ul>
      
      <h3><strong>JQUERY</strong></h3>
      <ul>
        <li>Introduction to JavaScript libraries</li>
        <li>Advantages</li>
        <li>Functions and Methods</li>
        <li>Selectors, custom selectors</li>
        <li>Validations</li>
        <li>DOM</li>
        <li>Animations</li>
        <li>&nbsp;AJAX</li>
      </ul>
          </div>
        </div>
        )}><FontAwesomeIcon icon={faEye} /></button>

        </div>
      </div>
      </div>
      
      





      {showContainer && (
  <div ref={containerRef} className="containerr">
    <span className="close" onClick={handleCloseContainer}>&times;</span>
    {containerContent}
  </div>
)}



    </div>
    <br/>
    <br/>
    <br/><br/>
    





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

export default Servicess;