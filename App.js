  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link, Switch, useLocation } from 'react-router-dom';
import Home from './Home';
import Abt from './Abt';
import Blogs from './Blogs';
import Contactus from './Contactus';
import Services from './Services';
import { FaBars } from 'react-icons/fa';
import Studlogin from './Studlogin';
import SideBar from './SideBar';








function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}



function MainApp() {
  let location = useLocation();
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let [isHomePageActive, setIsHomePageActive] = useState(false);
  let [isBlogPageActive, setIsBlogPageActive] = useState(false);
  let [isAboutPageActive, setIsAboutPageActive] = useState(false);
  let [isReviewsPageActive, setIsReviewsPageActive] = useState(false);
  let [isContactusPageActive, setIscontactusPageActive] = useState(false);
  let [isServicessPageActive, setIsServicessPageActive] = useState(false);
  let [isStudloginPageActive, setIsStudloginPageActive] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status



  let toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsHomePageActive(location.pathname === '/');
    setIsAboutPageActive(location.pathname === '/about');
    setIsServicessPageActive(location.pathname === '/services');
    setIsBlogPageActive(location.pathname === '/blogs');
    setIscontactusPageActive(location.pathname === '/contactus');
    setIsStudloginPageActive(location.pathname === '/login');
    // setIsDashBoardActive(location.pathname === '/dashboard');

    let handleOutsideClick = (event) => {
      if (
        event.target.closest('.nav-links') === null &&
        event.target.closest('.menu-icon') === null
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [location.pathname]);


  

  // let [isVisible, setIsVisible] = useState(false);

  // let onChangeVisibility = (isVisible) => {
  //   setIsVisible(isVisible);
  // };




  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: isVisible, 
  //   autoplaySpeed: 3000,
  //   fade: true,
  //   pauseOnHover: false,
  // };






  let [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <div className='MainApp'>
      {location.pathname !== '/login' && ( // Render navbar only if not on login page
      <header className="sticky-header">
        <nav>
          <div className="logo"><img/></div> 
          <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
            <li className={isHomePageActive ? 'active' : ''}><Link to="/">Home</Link></li>
            <li className={isAboutPageActive ? 'active' : ''}><Link to="/about">About</Link></li>
            <li className={isServicessPageActive ? 'active' : ''}><Link to="/services">Services</Link></li>
            <li className={isReviewsPageActive ? 'active' : ''}><Link to="/">Reviews</Link></li>
            <li className={isBlogPageActive ? 'active' : ''}><Link to="/blogs">Blogs</Link></li>
            <li className={isContactusPageActive ? 'active' : ''}><Link to="/contactus">Contact Us</Link></li>
            <li className={isStudloginPageActive ? 'active' : ''}><Link to="/login">Login</Link></li>
            {/* <li className={isdashboardActive ? 'active' : ''}><Link to="/dashboard">DashBoard</Link></li> */}
          </ul>
          
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </header>
    )}



{location.pathname === '/login' ? ( // Render login page
        <login setIsLoggedIn={setIsLoggedIn} />
      ) : null}
      {isLoggedIn && <SideBar />} {/* Render sidebar if logged in */}

 



      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<Abt />}>About</Route>
        <Route path='/services' element={<Services />}>Services</Route>
        <Route path='/blogs' element={<Blogs />}>Blogs</Route>
        <Route path='/contactus' element={<Contactus />}>Contact us</Route>
        <Route path='/login' element={<Studlogin />}>Login</Route>
        <Route path='/dashboard' element={<SideBar />}>Sidebar</Route>
        


       







      </Routes>


    </div>
  );
};
export default App;  



     

