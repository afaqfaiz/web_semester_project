import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../assets/css/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
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
          <div className={styles.profileicon}>
            <FontAwesomeIcon className={styles.faUser} icon={faUser} />
          </div>
        </div>

        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownContent}>
              <button className={styles.login} onClick={navigateToLogin}>
                Log In
              </button>
              <button className={styles.signup} onClick={navigateToSignup}>
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
