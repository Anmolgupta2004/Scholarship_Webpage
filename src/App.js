

import React from 'react';
import { useState } from 'react';
import './App.css'; // Create your own stylesheet for styling if necessary
import LoginForm from './components/LoginForm'; 

function App() {

  const[isDropdownVisible,setDropdownVisible]=useState(false);
  const handleDropdownToggle=()=>{
    setDropdownVisible(!isDropdownVisible)
  }


  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior (e.g., page jump)
    setShowLogin(!showLogin); // Toggle form visibility
  }
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img
            src="/india.png"
            alt="India Government Logo"
            className="gov-logo"
          />
          
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <a href="#home">Home</a>
          <div className='dropdown'>
            <a onClick={handleDropdownToggle} className='dropdown-btn'>Student</a> 
            {isDropdownVisible && (
              <div className='dropdown-content'>
                <a href='#Resistasiton'>Resistasiton</a>
                <a href="./components/LoginForm.js" onClick={handleLoginClick} style={styles.loginLink}>
        Login
      </a>


      {showLogin && (
        <div style={styles.modalBackground}>
          <div style={styles.modalContent}>
            <LoginForm />
            {/* Close button to hide the form */}
            <button onClick={handleLoginClick} style={styles.closeButton}>X</button>
          </div>
        </div>
      )}
                <a href='#status'>Status Tracking</a>


              </div>
            )}
          </div>
          <a href="#contact">Contact Us</a>
          <a href="#help">Help</a>
        </nav>

        <div className="header-right">
          <img
            src="new.png"
            alt="G20 Logo"
            className="g20-logo"
          />
          <img
            src="/bharat.jpeg"
            alt="Swachh Bharat Logo"
            className="swachh-logo"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className='main'>
      <div className="main-content">
        <h1>Prime Minister's Special Scholarship Scheme</h1>
        <button className="explore-btn">Explore More --></button>
      </div>

      {/* Prime Minister Image */}
      <div className="pm-image">
        <img
          src="/pm.png"
          alt="Prime Minister"
          className="pm-img"
        />
      </div>
    </div>
    </div>
  );
}


const styles = {
  loginLink: {
    fontSize: '18px',
    color: '#007BFF',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  modalBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    width: '400px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#333',
  },
};


export default App;
