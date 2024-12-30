import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../assets/css/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {useAuthStore} from '../store/useAuthStore';


const Navbar = () => {
  const {logout} =  useAuthStore();
  const user = useAuthStore();
  const client =user.user;
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigateToLogin = () => {
  
    navigate("/login");
  };

  const navigateToSignup = () => {

    navigate("/signup");
  };
  const handlelogout = ()=>{
    logout();
    navigate("/login");
  }
  const handleprofile = () =>{
    navigate("/account");
  }
  return (
    <div className={styles.homepage }>
      <header className={styles.Navbar}>
        <div className={styles.logo}>AIR</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </nav>

        <div className={styles.navicon} >
          <div className={styles.hamicon} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <div className={styles.profileicon} onClick={handleprofile}>
            <FontAwesomeIcon className={styles.faUser} icon={faUser} />
          </div>
        </div>

        {isMenuOpen &&(
    
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownContent}>
              <button className={styles.login} onClick={navigateToLogin}>
                Log In
              </button>
              <button className={styles.signup} onClick={navigateToSignup}>
                Sign Up
              </button>
                <button className={styles.signup} onClick={handlelogout}>
                  Logout
                </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
