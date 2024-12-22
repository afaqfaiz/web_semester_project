import React, { useState } from "react";
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from "./Login";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Fix: Add this state

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={`home-page ${showLogin ? "blur" : ""}`}>
      <header className={styles.Navbar}>
        <div className={styles.logo}>AIR</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </nav>

        <div className={styles.navicon} onClick={toggleMenu}>
          <div className={styles.hamicon}>
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
              <button className={styles.login} onClick={toggleLoginModal}>
                Log In
              </button>
              <button className={styles.signup}>Sign Up</button>
            </div>
          </div>
        )}
      </header>
      {showLogin && <LoginModal onClose={toggleLoginModal} />}
    </div>
  );
};

export default Navbar;
