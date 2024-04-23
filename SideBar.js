import React, { useState, useEffect, useRef } from 'react';
import './SideBar.css';
import { FaThumbtack } from 'react-icons/fa';
import { FaHome, FaUser, FaCog, FaBlog, FaUsers, FaSignOutAlt, FaAngleDown, FaQuestion, FaFileAlt, FaChartLine, FaBars, FaUserCheck } from 'react-icons/fa';
import profileImage from './assets/power-bi-1024x473.jpg';
import axios from 'axios';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeItem, setActiveItem] = useState('Profile');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [totalClasses, setTotalClasses] = useState(20);
  const [presentClasses, setPresentClasses] = useState(15);
  const [presentPercentage, setPresentPercentage] = useState(0);
  const absentClasses = totalClasses - presentClasses;

  let [formData,setFormData]=useState(null)





  const [pieChartColor, setPieChartColor] = useState('#36A2EB'); // Default color

  const sidebarRef = useRef(null);
  const logoutConfirmationRef = useRef(null);
  const pieChartRef = useRef(null);
  const pieChartProgressRef = useRef(null);






/* weekly test res */

const [totalClassesWeekly, setTotalClassesWeekly] = useState(20);
const [thisWeekScore, setThisWeekScore] = useState(75); 
const [previousScore, setPreviousScore] = useState(20); 




const percentageThisWeek = (thisWeekScore / (thisWeekScore + previousScore)) * 100;
const percentagePreviousWeek = (previousScore / (thisWeekScore + previousScore)) * 100;



useEffect(() => {
  // Fetch profile data from the API
  axios.get('http://127.0.0.1:8000/user/api/profile')
    .then(response => {
      // Set the fetched data to the state
      setFormData(response.data);
    })
    .catch(error => {
      console.error('Error fetching profile data:', error);
    });
}, []); // Empty dependency array means this effect runs only once, after initial render










  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && windowWidth <= 768 && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, windowWidth]);

  


  useEffect(() => {
    const percentage = (presentClasses / totalClasses) * 100;
    setPresentPercentage(percentage);
    setPieChartColor(percentage < 50 ? '#bd0505' : '#2dcf00'); 
  }, [totalClasses, presentClasses]);

  useEffect(() => {
    if (pieChartRef.current && pieChartProgressRef.current) {
      pieChartRef.current.classList.add('animate-spin');
      pieChartProgressRef.current.classList.add('animate-dash', 'animate-color-change', 'animate-scale-up');
    }
  }, [totalClasses, presentClasses]);

  
  





  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    
  };







  const handleItemClick = (itemName) => {
    setActiveItem(itemName);




    switch (itemName) {
      case 'Profile':
        setRightContent(<div className="studprof-container">
          {/* {formData && formData.map((profileData, index) => (
          <> */}
        <div className="info-section">
          <div className="info-item">
            <span  className="info-label">Mobile Number</span>
            <br/>
            <span className="info-value">{profileData.MobileNumber}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email</span>
            <br/>
            <span className="info-value">{profileData.email}</span>
          </div>
          <div className="info-item">
            <span  className="info-label">Course Type</span>
            <br/>
            <span className="info-value">{profileData.courseType}</span>
          </div>
          <div className="info-item">
            <span  className="info-label">Batch No</span>
            <br/>
            <span className="info-value">{profileData.batchNo}</span>
          </div>
          <div className="info-item">
            <span  className="info-label">Trainer Name</span>
            <br/>
            <span className="info-value">{profileData.trainerName}</span>
          </div>
          <div className="info-item">
            <span  className="info-label">Coordinator Name</span>
            <br/>
            <span className="info-value">{profileData.coordinatorName}</span>
          </div>
        </div>
        <div className="profile-section">
          <img src={profileData.profileImage} className="profile-image" alt="Profile" />
          <br/>
          <span className="profile-name">{profileData.name}</span>
          <br/>
          <br/>
          <br/>
        </div>
        {/* </>
          ))} */}
      </div>);
        break;
      case 'Recording':
        setRightContent(<div>
          {sortedDetails.map((item, index) => (
            <div className={`reccla ${item.pinned ? 'pinned' : ''}`} key={index}>
              <div className="details-container">
                <p className={`details-text ${item.pinned ? 'pinned-text' : ''}`}>{item.text}</p>
                <a className="details-link" href={item.link}>{item.link}</a>
              </div>
            </div>
          ))}
        </div>);
        break;
      case 'InterviewQuestions':
        setRightContent( <div className='mockres'>
        <div >
          <h1 id='bent'>Python interview Questions</h1>
        
              <br />
          <br/>
          <h2>What is Flask?</h2>
    <p>Flask is a micro web framework written in Python. It is lightweight and designed to make getting started quick and easy, with the ability to scale up to complex applications.</p>
    
    <h2>Explain the difference between Flask and Django.</h2>
    <p>Flask is a micro-framework, meaning it's minimalist and gives you the flexibility to add only the components you need. Django, on the other hand, is a full-stack framework with more built-in features and a steeper learning curve.</p>
    
    <h2>What is WSGI?</h2>
    <p>WSGI (Web Server Gateway Interface) is a specification for simple and universal interface between web servers and web applications or frameworks for Python.</p>
    
    <h2>What is SQLAlchemy and how is it used in Flask?</h2>
    <p>SQLAlchemy is an ORM (Object-Relational Mapping) library for Python. It provides a way to interact with relational databases in an object-oriented fashion. In Flask, SQLAlchemy is commonly used to interact with databases, allowing developers to define models as Python classes and then manipulate them using Python syntax.</p>
    
    <h2>What is the purpose of Jinja2 in Flask?</h2>
    <p>Jinja2 is a template engine for Python. In Flask, Jinja2 is used to render dynamic HTML content by combining templates with data.</p>
    
    <h2>How do you handle forms in Flask?</h2>
    <p>Forms in Flask can be handled using the Flask-WTF extension, which integrates Flask with the WTForms library, allowing developers to create and validate forms easily.</p>
    
    <h2>Explain the concept of middleware in Flask.</h2>
    <p>Middleware in Flask refers to functions or classes that sit between the request and view functions, allowing for processing of the request or response. Middleware can be used for tasks such as authentication, logging, or modifying requests before they reach the view function.</p>
    
    <h2>What is CSRF protection and how is it implemented in Flask?</h2>
    <p>CSRF (Cross-Site Request Forgery) protection is a security measure to prevent unauthorized requests from being executed on behalf of a user. In Flask, CSRF protection can be implemented using the CSRFProtect extension, which generates and verifies tokens to ensure that requests originate from the same site.</p>
    
    <h2>What is RESTful API?</h2>
    <p>RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods like GET, POST, PUT, DELETE for CRUD (Create, Read, Update, Delete) operations on resources.</p>
    
    <h2>How do you create RESTful APIs in Flask?</h2>
    <p>RESTful APIs in Flask can be created using the Flask-RESTful extension, which provides a framework for building APIs with minimal boilerplate code.</p>
    
    <h2>Explain the concept of routing in Flask.</h2>
    <p>Routing in Flask refers to mapping URLs to view functions. Routes are defined using decorators such as @app.route('/'), where the argument specifies the URL endpoint.</p>
    
    <h2>What is token-based authentication and how is it implemented in Flask?</h2>
    <p>Token-based authentication involves generating and verifying tokens to authenticate users. In Flask, token-based authentication can be implemented using libraries like Flask-JWT (JSON Web Tokens) or Flask-JWT-Extended.</p>
    
    <h2>What is AJAX and how can it be used in Flask applications?</h2>
    <p>AJAX (Asynchronous JavaScript and XML) is a technique for creating interactive web applications by exchanging data with a web server asynchronously, without interfering with the current page. In Flask applications, AJAX can be used to make asynchronous requests to the server and update parts of the page without reloading the entire page.</p>
    
    <h2>Explain the concept of blueprints in Flask.</h2>
    <p>Blueprints in Flask are a way to organize and structure a larger application by dividing it into smaller, reusable components. Each blueprint can define its own routes, views, templates, and static files, which can then be registered with the Flask application.</p>
    
    <h2>What is a virtual environment in Python and why is it used?</h2>
    <p>A virtual environment in Python is an isolated environment where you can install packages without affecting the system-wide Python installation. It is used to manage dependencies for different projects and to avoid conflicts between packages.</p>
    
    <h2>How do you deploy a Flask application?</h2>
    <p>Flask applications can be deployed in various ways, including deploying to a traditional web server like Apache or Nginx using WSGI, deploying to a Platform-as-a-Service (PaaS) provider like Heroku or AWS Elastic Beanstalk, or deploying to a containerized environment like Docker.</p>
    
    <h2>What is Docker and how can it be used with Flask?</h2>
    <p>Docker is a platform for developing, shipping, and running applications in containers. With Docker, Flask applications can be packaged into containers along with their dependencies, making them portable and easy to deploy across different environments.</p>
    
    <h2>Explain the concept of microservices architecture.</h2>
    
    <p>Microservices architecture is an architectural style where a complex application is divided into smaller, loosely coupled services that can be developed, deployed, and scaled independently. Each service typically corresponds to a specific business function and communicates with other services via APIs.</p>
    <h2>What is Celery and how can it be used with Flask?</h2>
    <p>Celery is a distributed task queue library for Python. It allows you to run tasks asynchronously and in the background, which is useful for tasks such as sending emails, processing data, or running periodic tasks in Flask applications.</p>
    <h2>How do you handle database migrations in Flask applications?</h2>
    <p>Database migrations in Flask applications can be handled using the Flask-Migrate extension, which integrates Flask with the Alembic migration framework. It allows you to generate and apply database migrations to keep the database schema in sync with the application's models.</p>
    <h2>What is WebSocket and how can it be used in Flask applications?</h2>
    <p>WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. In Flask applications, WebSocket can be implemented using libraries like Flask-SocketIO to enable real-time, bi-directional communication between the client and server.</p>
    <h2>Explain the concept of ORM (Object-Relational Mapping).</h2>
    <p>ORM is a programming technique for converting data between incompatible type systems, such as relational databases and object-oriented programming languages. It allows developers to interact with databases using high-level object-oriented APIs rather than SQL queries.</p>
    <h2>What is CORS and how do you enable it in Flask?</h2>
    <p>CORS (Cross-Origin Resource Sharing) is a mechanism that allows resources on a web page to be requested from another domain outside the domain from which the resource originated. In Flask, CORS can be enabled using the Flask-CORS extension to allow cross-origin requests from specified origins.</p>
    <h2>How do you handle file uploads in Flask?</h2>
    <p>File uploads in Flask can be handled using the Flask-Uploads extension, which provides convenient functions for handling file uploads and storing files on the server.</p>
    <h2>Explain the concept of session management in Flask.</h2>
    <p>Session management in Flask involves managing user sessions, which allows you to store user-specific data across multiple requests. Flask provides a session object that allows you to store and retrieve data associated with a particular user session.</p>
    <h2>What is the purpose of a WSGI server in Flask applications?</h2>
    <p>WSGI server in Flask applications is responsible for handling incoming HTTP requests and passing them on to the Flask application for processing.</p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
            <h1 id='bent'>Java interview Questions</h1>
          
              <br />
          <br/>
        <h2>What is Spring Framework?</h2>
        <p>Spring Framework is an open-source Java framework that provides comprehensive infrastructure support for developing Java applications. It covers a wide range of areas such as dependency injection, aspect-oriented programming, and MVC architecture.</p>
    
        <h2>Explain the difference between Spring MVC and Spring Boot.</h2>
        <p>Spring MVC is a module within the larger Spring Framework that provides support for building web applications based on the Model-View-Controller (MVC) architecture. Spring Boot, on the other hand, is an opinionated framework built on top of Spring that simplifies the process of setting up and configuring Spring-based applications.</p>
    
        <h2>What is Hibernate and how is it used in Java full-stack development?</h2>
        <p>Hibernate is an ORM (Object-Relational Mapping) framework for Java that provides a mapping between Java objects and relational database tables. It is commonly used in Java full-stack development to simplify database interactions and reduce the amount of boilerplate code needed to perform CRUD operations.</p>
    
        <h2>What is RESTful Web Services?</h2>
        <p>RESTful Web Services are web services that adhere to the principles of Representational State Transfer (REST). They use standard HTTP methods like GET, POST, PUT, DELETE to perform CRUD operations on resources, and typically use JSON or XML for data exchange.</p>
    
        <h2>How do you create RESTful APIs in Java?</h2>
        <p>RESTful APIs in Java can be created using frameworks like Spring Boot, which provides built-in support for creating RESTful endpoints using annotations such as @RestController and @RequestMapping.</p>
    
        <h2>Explain the concept of dependency injection in Spring Framework.</h2>
        <p>Dependency injection is a design pattern in which objects are passed their dependencies rather than creating them internally. In Spring Framework, dependency injection is achieved through inversion of control (IoC) containers, which manage the creation and wiring of objects.</p>
    
        <h2>What is Spring Security and how is it used in Java applications?</h2>
        <p>Spring Security is a powerful and customizable authentication and access control framework for Java applications. It provides comprehensive security services for securing web applications, including authentication, authorization, and protection against common security vulnerabilities.</p>
    
        <h2>How do you handle database transactions in Spring Framework?</h2>
        <p>Database transactions in Spring Framework can be managed using the @Transactional annotation, which allows you to declaratively specify transactional behavior for methods or classes. Spring's transaction management infrastructure handles the beginning, committing, and rollback of transactions automatically.</p>
    
        <h2>What is Thymeleaf and how is it used in Spring Boot applications?</h2>
        <p>Thymeleaf is a modern server-side Java template engine for web and standalone environments. It is integrated with Spring Boot and provides seamless support for rendering HTML templates with dynamic data.</p>
    
        <h2>Explain the concept of aspect-oriented programming (AOP) in Spring Framework.</h2>
        <p>Aspect-oriented programming (AOP) is a programming paradigm that allows developers to modularize cross-cutting concerns such as logging, security, and transaction management. In Spring Framework, AOP is implemented using aspects, which are reusable modules that can be applied across multiple classes or methods.</p>
    
        <h2>What is JPA (Java Persistence API) and how is it related to Hibernate?</h2>
        <p>JPA is a Java specification for accessing, managing, and persisting data between Java objects and relational databases. Hibernate is one of the most popular implementations of the JPA specification, providing a powerful ORM framework for Java applications.</p>
    
        <h2>How do you handle form submissions in Spring MVC?</h2>
        <p>Form submissions in Spring MVC can be handled using the @ModelAttribute annotation to bind form data to Java objects, and the @PostMapping annotation to handle POST requests sent from HTML forms.</p>
    
        <h2>What is Maven and how is it used in Java full-stack development?</h2>
        <p>Maven is a build automation tool used primarily for Java projects. It simplifies the process of managing project dependencies, building and packaging Java applications, and managing project lifecycle phases such as compilation, testing, and deployment.</p>
    
        <h2>Explain the concept of inversion of control (IoC) in Spring Framework.</h2>
        <p>Inversion of control (IoC) is a design principle in which the control of object creation and lifecycle management is inverted from the application code to a container or framework. In Spring Framework, IoC containers manage the creation and wiring of objects, allowing for loose coupling and easier testing.</p>
    
        <h2>What is JSP (JavaServer Pages) and how is it used in Java web development?</h2>
        <p>JavaServer Pages (JSP) is a technology for developing dynamic web pages in Java. It allows developers to embed Java code directly into HTML pages, making it easier to generate dynamic content based on user input or application logic.</p>
    
    <h2>How do you implement authentication and authorization in Spring Security?</h2>
    <p>Authentication and authorization in Spring Security are implemented using authentication providers, which authenticate users based on their credentials, and access control rules, which specify which users are allowed to access which resources based on their roles or permissions.</p>
    
    <h2>What is JWT (JSON Web Token) and how is it used for authentication in Java applications?</h2>
    <p>JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. In Java applications, JWTs are commonly used for authentication by encoding user information into a token, which can be sent with each request for stateless authentication.</p>
    
    <h2>Explain the role of servlets in Java web development.</h2>
    <p>Servlets are Java classes that handle requests and responses between web clients and web servers. They provide a way to dynamically process and respond to HTTP requests, making them the foundation of Java web development.</p>
    
    <h2>What is CORS (Cross-Origin Resource Sharing) and how do you enable it in Spring Boot applications?</h2>
    <p>CORS is a security feature implemented by web browsers that restricts cross-origin HTTP requests. In Spring Boot applications, CORS can be enabled by configuring CORS filters or by using annotations like @CrossOrigin to specify allowed origins, methods, and headers.</p>
    
    <h2>What is Docker and how can it be used in Java full-stack development?</h2>
    <p>Docker is a platform for developing, shipping, and running applications in containers. In Java full-stack development, Docker can be used to package Java applications along with their dependencies into lightweight, portable containers for easy deployment across different environments.</p>
    
    <h2>Explain the concept of microservices architecture and its benefits.</h2>
    <p>Microservices architecture is an architectural style where a complex application is divided into smaller, independently deployable services that communicate with each other through APIs. Its benefits include improved scalability, flexibility, and maintainability compared to monolithic architectures.</p>
    
    <h2>How do you deploy a Spring Boot application to a web server?</h2>
    <p>Spring Boot applications can be deployed to web servers like Apache Tomcat or Jetty by packaging them as WAR (Web Application Archive) files and deploying them to the server's webapps directory, or by embedding the server directly into the application JAR file.</p>
    
    <h2>What is the role of Hibernate in Java Persistence API (JPA)?</h2>
    <p>Hibernate is an implementation of the Java Persistence API (JPA) specification, providing a powerful ORM framework for Java applications. It abstracts away the details of database interactions, allowing developers to work with Java objects rather than SQL queries.</p>
    
    <h2>Explain the concept of connection pooling and its importance in Java database applications.</h2>
    <p>Connection pooling is a technique used to manage a pool of database connections that can be reused by multiple clients. It improves the performance and scalability of Java database applications by reducing the overhead of creating and destroying database connections for each request.</p>
    
        </div>
    
        <br/>
    <br/>
    <br/>
    <br/>
    <div>
            <h1 id='bent'>SQL interview Questions</h1>
         
              <br />
          <br/>
          <h2>What is SQL?</h2>
    <p>SQL (Structured Query Language) is a standard programming language designed for managing data held in a relational database management system (RDBMS).</p>
    
    <h2>Differentiate between SQL and MySQL.</h2>
    <p>SQL is a standard language for accessing and manipulating databases, while MySQL is a specific relational database management system (RDBMS) that uses SQL as its query language.</p>
    
    <h2>Explain the difference between SQL and NoSQL databases.</h2>
    <p>SQL databases are relational databases that use structured query language (SQL) to define and manipulate data, while NoSQL databases are non-relational databases that use different data models like document, key-value, or graph.</p>
    
    <h2>What are the types of SQL commands?</h2>
    <p>SQL commands are broadly categorized into Data Definition Language (DDL), Data Manipulation Language (DML), Data Control Language (DCL), and Transaction Control Language (TCL).</p>
    
    <h2>What is a primary key in SQL?</h2>
    <p>A primary key is a column or set of columns that uniquely identifies each row in a table. It ensures the integrity and uniqueness of records in the table.</p>
    
    <h2>What is a foreign key in SQL?</h2>
    <p>A foreign key is a column or set of columns in a table that establishes a relationship with the primary key of another table. It enforces referential integrity and helps maintain consistency between related tables.</p>
    
    <h2>What is the difference between SQL JOIN and UNION?</h2>
    <p>SQL JOIN is used to combine rows from two or more tables based on a related column between them, while UNION is used to combine the results of two or more SELECT statements into a single result set.</p>
    
    <h2>Explain the difference between SQL DELETE and SQL TRUNCATE.</h2>
    <p>SQL DELETE is used to remove one or more rows from a table based on a condition, while SQL TRUNCATE is used to remove all rows from a table, resetting the table's storage space.</p>
    
    <h2>What is a stored procedure in SQL?</h2>
    <p>A stored procedure is a precompiled and stored SQL code block that can be executed repeatedly by invoking its name. It improves performance, reusability, and security by encapsulating complex logic within the database.</p>
    
    <h2>What is an SQL injection?</h2>
    <p>SQL injection is a type of security vulnerability that occurs when an attacker injects malicious SQL code into input fields of an application, manipulating the database query to gain unauthorized access or perform unintended operations.</p>
    
    <h2>Explain the concept of indexing in SQL.</h2>
    <p>Indexing in SQL is a technique used to improve the performance of database queries by creating a data structure (index) that allows faster retrieval of rows based on specific columns. It speeds up data retrieval but may slow down data modification operations.</p>
    
    <h2>What is a view in SQL?</h2>
    <p>A view in SQL is a virtual table that is based on the result set of a SELECT query. It does not store any data itself but provides a way to present data from one or more tables in a structured format.</p>
    
    <h2>What is normalization in SQL?</h2>
    <p>Normalization is the process of organizing data in a database to reduce redundancy and dependency by dividing large tables into smaller, related tables and defining relationships between them. It helps maintain data integrity and optimize database performance.</p>
    
    <h2>What is denormalization in SQL?</h2>
    <p>Denormalization is the process of intentionally introducing redundancy into a database design for performance optimization. It involves combining tables and duplicating data to reduce the number of joins needed to retrieve data.</p>
    
    <h2>What is the purpose of the GROUP BY clause in SQL?</h2>
    <p>The GROUP BY clause in SQL is used to group rows that have the same values into summary rows, typically used with aggregate functions like SUM, COUNT, AVG, etc., to perform calculations on each group.</p>
    
    <h2>Explain the difference between INNER JOIN and LEFT JOIN in SQL.</h2>
    <p>INNER JOIN returns only the rows that have matching values in both tables based on the join condition, while LEFT JOIN returns all rows from the left table and matching rows from the right table, with NULL values for non-matching rows.</p>
    
    <h2>What is a subquery in SQL?</h2>
    <p>A subquery, also known as a nested query, is a query nested within another SQL query. It is used to retrieve data from one or more tables based on the results of an inner query.</p>
    
    <h2>Explain the difference between SQL and PL/SQL.</h2>
    <p>SQL (Structured Query Language) is a standard language for accessing and manipulating databases, while PL/SQL (Procedural Language/SQL) is an extension of SQL provided by Oracle for writing procedural code like loops, conditional statements, and exception handling within SQL.</p>
    
    <h2>What is the purpose of the HAVING clause in SQL?</h2>
    <p>The HAVING clause in SQL is used in combination with the GROUP BY clause to filter groups based on specified conditions. It is similar to the WHERE clause but operates on grouped data rather than individual rows.</p>
    
    <h2>What is the difference between a candidate key and a composite key in SQL?</h2>
    <p>A candidate key is a column or set of columns that can uniquely identify each row in a table, while a composite key is a key that consists of multiple columns, each of which alone cannot uniquely identify a row, but the combination of columns does.</p>
    
    <h2>Explain the ACID properties in SQL.</h2>
    <p>ACID (Atomicity, Consistency, Isolation, Durability) properties are a set of properties that ensure database transactions are processed reliably. Atomicity ensures that transactions are either completed in full or not at all, Consistency ensures that the database remains in a consistent state before and after transactions, Isolation ensures that transactions are executed independently of each other, and Durability ensures that committed transactions are permanently saved even in the event of system failure.</p>
    
    <h2>What is a trigger in SQL?</h2>
    <p>A trigger in SQL is a database object that automatically executes in response to certain events (e.g., INSERT, UPDATE, DELETE) on a specified table. Triggers are used to enforce data integrity, perform logging, or automate business logic within the database.</p>
    
    <h2>What is the difference between a clustered index and a non-clustered index in SQL?</h2>
    <p>A clustered index determines the physical order of data rows in a table based on the index key, while a non-clustered index does not affect the physical order of data rows and stores the index key along with pointers to the corresponding rows.</p>
    
    <h2>What is the purpose of the DISTINCT keyword in SQL?</h2>
    <p>The DISTINCT keyword in SQL is used to eliminate duplicate rows from the result set of a SELECT query, returning only unique rows based on the specified columns.</p>
    
    <h2>Explain the concept of a transaction in SQL.</h2>
    <p>A transaction in SQL is a sequence of one or more SQL statements that are treated as a single unit of work. It follows the ACID properties, ensuring that all statements within the transaction are executed successfully or rolled back in case of failure.</p>
    
    <h2>What is the purpose of the ORDER BY clause in SQL?</h2>
    <p>The ORDER BY clause in SQL is used to sort the result set of a SELECT query based on one or more columns, either in ascending (ASC) or descending (DESC) order.</p>
    
    <h2>What is the difference between the LIKE and the IN operators in SQL?</h2>
    <p>The LIKE operator is used to search for a specified pattern in a column's value using wildcard characters, while the IN operator is used to specify multiple values in a WHERE clause to filter the result set.</p>
    
    <h2>Explain the concept of SQL data types.</h2>
    <p>SQL data types define the type of data that can be stored in a column of a table. Common data types include INTEGER, VARCHAR, DATE, BOOLEAN, etc., each with its own range of values and storage requirements.</p>
    
    <h2>What is a constraint in SQL?</h2>
    <p>A constraint in SQL is a rule defined on a column or a table to enforce data integrity and ensure the accuracy and reliability of data. Common constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, etc.</p>
    
    <h2>What is a database index and how does it work?</h2>
    <p>A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional space and slower writes. It works by storing the values of certain columns in a sorted order, allowing the database to quickly locate the rows that match a specific value or range of values.</p>
    
    <h2>What is a SQL query optimization?</h2>
    <p>SQL query optimization is the process of improving the performance of SQL queries by reducing their execution time and resource consumption. It involves techniques such as using indexes, optimizing joins, rewriting queries, and minimizing disk I/O.</p>
    
    <h2>What is the purpose of the BETWEEN operator in SQL?</h2>
    <p>The BETWEEN operator in SQL is used to filter the result set to include rows with values within a specified range, inclusive of the start and end values.</p>
    
    <h2>Explain the concept of a self join in SQL.</h2>
    <p>A self join in SQL is a join operation where a table is joined with itself based on a related column within the same table. It is useful for querying hierarchical data structures or comparing rows within the same table.</p>
    
    <h2>What is the purpose of the CASE statement in SQL?</h2>
    <p>The CASE statement in SQL is used to perform conditional logic within a query, allowing you to specify different actions or values based on one or more conditions.</p>
    
    <h2>What is the difference between the EXISTS and the IN operators in SQL?</h2>
    <p>The EXISTS operator is used to test for the existence of rows returned by a subquery, while the IN operator is used to specify multiple values in a WHERE clause to filter the result set.</p>
    
    <h2>Explain the concept of SQL injection prevention techniques.</h2>
    <p>SQL injection prevention techniques include using parameterized queries, input validation, proper error handling, stored procedures, and escaping special characters to sanitize user inputs and prevent malicious SQL code injection.</p>
    
    <h2>What is a transaction isolation level in SQL?</h2>
    <p>A transaction isolation level in SQL defines the degree to which one transaction must be isolated from the effects of other concurrent transactions. Common isolation levels include READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, and SERIALIZABLE.</p>
    
    <h2>What is the purpose of the COALESCE function in SQL?</h2>
    <p>The COALESCE function in SQL is used to return the first non-null expression in a list of expressions. It is commonly used to replace NULL values with alternative values in the result set.</p>
    
    <h2>Explain the concept of a recursive SQL query.</h2>
    <p>A recursive SQL query is a query that refers to a table multiple times within the same query, typically to traverse hierarchical or tree-like structures. It uses common table expressions (CTEs) and recursive WITH clauses to perform recursive operations.</p>
    
    <h2>What is the purpose of the FETCH and OFFSET clauses in SQL?</h2>
    <p>The FETCH clause in SQL is used to limit the number of rows returned by a SELECT query, while the OFFSET clause specifies the number of rows to skip before starting to return rows. They are commonly used together for pagination.</p>
    
    <h2>What is the difference between a left outer join and a right outer join in SQL?</h2>
    <p>In a left outer join, all rows from the left table are returned, along with matching rows from the right table. In a right outer join, all rows from the right table are returned, along with matching rows from the left table. Non-matching rows are filled with NULL values.</p>
    
        </div>
        </div>);
        break;
      case 'Mock':
        setRightContent(<div className='mockres'>
        <div className="attendance-container">
          <h2>Mock Test Results</h2>
          <div className={`pie-chart ${rotationStarted ? 'rotate' : ''}`}>
            <div className="pie" style={{'--value': currentResult.result * 10}}></div>
            
          </div>
          <div className="pie-text">{currentResult.result}/10</div>
          {currentResult.result < 10 && (
            <div className="old-results">
              <span>Previous Results: </span>
              <span>{calculatePreviousResult()}/10</span>
            </div>
          )}
        </div>
      </div>);
        break;
      case 'Week':
        setRightContent(<div className='mockress'>
        <h1>Weekly Test Results</h1>
        <br/>
        <br/>
        <div className="pie-chart-container-weekly">
          <div className="pie-chart-weekly" style={{ width: `${percentageThisWeek}%` }}>
            <div className="pie-chart-background-weekly">
              <div
                className="pie-chart-progress-weekly this-week"
                style={{ transform: `rotate(${percentageThisWeek * 3.6}deg)` }}
              ></div>
              <div
                className="pie-chart-progress-weekly previous-week"
                style={{ transform: `rotate(${percentagePreviousWeek * 3.6}deg)` }}
              ></div>
            </div>
          </div>
          <div className="pie-text-weekly">
            This Week: {thisWeekScore} ({percentageThisWeek.toFixed(2)}%)<br />
            Previous Week: {previousScore} ({percentagePreviousWeek.toFixed(2)}%)
          </div>
        </div>
      </div>);
        break;
      case 'Att':
        setRightContent(<div className='attencont'>
        <div className="attendance-container">
          <svg viewBox="0 0 100 100" className="pie-chart">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
            <circle
              className="pie-chart-progress"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={pieChartColor}
              strokeWidth="10"
              strokeDasharray={`${presentPercentage}, 100`}
              strokeLinecap="round"
            />
            <text x="50" y="50" textAnchor="middle" fontSize="20" dy="0.35em">
    {Math.round(presentPercentage)}%
  </text>
          </svg>
  
          <br/>
          <br/>
          <div className="legend">
            <div>
              <span className="legend-dot present"></span> Present: {presentClasses}
            </div>
            <div>
              <span className="legend-dot absent"></span> Absent: {absentClasses}
            </div>
            <div>Total Classes: {totalClasses}</div>
          </div>
        </div>
      </div>);
        break;
      default:
        setRightContent(<div><h1>Default</h1><p>Default Content</p></div>);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirmation(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && 
          logoutConfirmationRef.current && !logoutConfirmationRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowLogoutConfirmation(false);
      }
    };

    if (isOpen || showLogoutConfirmation) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, showLogoutConfirmation]);



  const profileData = {
    profileImage: profileImage,
    name: "John Doe",
    mobileNumber: "+1234567890",
    email: "johndoe@example.com",
    courseType: "Web Development",
    batchNo: "WD2024",
    trainerName: "carry",
    coordinatorName: "carry1"
  };




  const [rightContent, setRightContent] = useState(

    <div className="studprof-container">



{/* {formData && formData.map((profileData, index) => (
          <> */}



        <div className="info-section">

          <div className="info-item">
            <span className="info-label">Mobile Number</span>
            <br/>
            <span className="info-value">{profileData. mobileNumber}</span>
          </div>
          <div className="info-item">
            <span  className="info-label">Email</span>
            <br/>
            <span className="info-value">{profileData.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Course Type</span>
            <br/>
            <span className="info-value">{profileData.courseType}</span>
          </div>
          <div className="info-item">
            <span  className="info-label">Batch No</span>
            <br/>
            <span className="info-value">{profileData.batchNo}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Trainer Name</span>
            <br/>
            <span className="info-value">{profileData.trainerName}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Coordinator Name</span>
            <br/>
            <span className="info-value">{profileData.coordinatorName}</span>
          </div>
       
        </div>
        <div className="profile-section">
          <img src={profileData.profileImage} className="profile-image" alt="Profile" />
          <br/>
          <span className="profile-name">{profileData.name}</span>
          <br/>
          <br/>
          <br/>
        </div>
           {/* </>
          ))}; */}
      </div>
  );













/*rec class*/

const [details, setDetails] = useState([
  { text: '15/04/2024', link: 'https://transcripts.gotomeeting.com/#/s/08e131436bcb59492ee5160b937a09ca1daf48c6e122d08cd8b556551874f190', pinned: false },
  { text: '16/04/2024', link: 'https://transcripts.gotomeeting.com/#/s/08e131436bcb59492ee5160b937a09ca1daf48c6e122d08cd8b556551874f190', pinned: false },
]);


const addDetails = (text, link) => {
  setDetails([...details, { text, link, pinned: false }]);
};

// Function to toggle pin state
const togglePin = (index) => {
  const updatedDetails = [...details];
  updatedDetails[index].pinned = !updatedDetails[index].pinned;
  setDetails(updatedDetails);
};


const sortedDetails = [...details].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));


/*rec class*/


const [results, setResults] = useState([
  { date: '2024-03-15', result: 8 },
  { date: '2024-03-16', result: 7 },
  { date: '2024-03-17', result: 9 },
  // Add more results as needed
]);
const [currentResult, setCurrentResult] = useState(results[results.length - 1]);
const [rotationStarted, setRotationStarted] = useState(false);

useEffect(() => {
  setCurrentResult(results[results.length - 1]);
  // Start the rotation animation after the component mounts
  setTimeout(() => {
    setRotationStarted(true);
  }, 100);
  // Stop the rotation after 3 seconds
  setTimeout(() => {
    setRotationStarted(false);
  }, 3000);
}, [results]);

const calculatePreviousResult = () => {
  const lastIndex = results.findIndex(entry => entry.result === currentResult.result) - 1;
  if (lastIndex >= 0) {
    return results[lastIndex].result;
  }
  return 'N/A';
};









  return (
    <div className='wholepage'>
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <div className="sidebar-header">
        {windowWidth <= 768 && (
          <button className="toggle-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
        <div className='topimg'></div>
      </div>
      <div className="sidebar-content">
        <ul>
          <li className={`sidebar-item ${activeItem === 'Profile' ? 'active' : ''}`} onClick={() => handleItemClick('Profile')}>
            <FaUser className="icon" />
            <span className="sidebar-text">Profile</span>
          </li>
          <li className={`sidebar-item ${activeItem === 'Recording' ? 'active' : ''}`} onClick={() => handleItemClick('Recording')}>
            <FaUsers className="icon" />
            <span className="sidebar-text">Recording Classes</span>
          </li>
          <li className={`sidebar-item ${activeItem === 'InterviewQuestions' ? 'active' : ''}`} onClick={() => handleItemClick('InterviewQuestions')}>
            <FaQuestion className="icon" />
            <span className="sidebar-text">Interview Questions</span>
          </li>
          <h3 className="sidebar-textt">Performance</h3>
          <li className={`sidebar-item ${activeItem === 'Mock' ? 'active' : ''}`} onClick={() => handleItemClick('Mock')}>
            <FaFileAlt className="icon" /> 
            <span className="sidebar-text">Mock Interview Results</span>
          </li>
          <li className={`sidebar-item ${activeItem === 'Week' ? 'active' : ''}`} onClick={() => handleItemClick('Week')}>
            <FaChartLine className="icon" /> 
            <span className="sidebar-text">Weekly Exercise Results</span>
          </li>
          <li className={`sidebar-item ${activeItem === 'Att' ? 'active' : ''}`} onClick={() => handleItemClick('Att')}>
            <FaUserCheck className="icon" /> 
            <span className="sidebar-text">Attendance</span>
          </li>
        </ul>
        
        <div className={`logout-container ${isOpen ? 'open' : ''}`}>
          <div className={`profile ${windowWidth > 768 || isOpen ? 'show' : 'hide'}`}>
            <img src={profileImage} alt="Profile" className="profile-images" />
            <br/>
            <span className="profile-names">John Doe</span>
          </div>
          <div className='logside' onClick={handleLogoutClick}>
            <FaSignOutAlt className="icon" />
            {isOpen && <span className="logout-text">Logout</span>}
          </div>
        </div>
      </div>
      {showLogoutConfirmation && (
        <div className="logout-confirmation" ref={logoutConfirmationRef}>
          <div className="logout-message">Are you sure you want to logout?</div>
          <div className="button-container">
            <div className="button cancel-button" onClick={handleCancelLogout}>Cancel</div>
            <div className="button logout-button" onClick={handleConfirmLogout}>Logout</div>
          </div>
        </div>
      )}

      
    </div>
    <div className="right-contentt">
    <div className='titcon'>
    <h1 id='titcont'>VCUBE SOFTWARE SOLUTIONS</h1>
  </div>
    {rightContent}
  </div>
  </div>
  );
}

export default SideBar;
