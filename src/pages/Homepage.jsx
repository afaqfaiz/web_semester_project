import React from "react";
import Navbar from "../components/Navbar";
import Search_bar from "../components/searchbar";
import styles from "./Homepage.module.css"

const Homepage = () => {

  return (
    <>
      <div className={styles.nav_ser}>
          <Navbar />
          <div className={styles.center_container}>
            <Search_bar />
          </div>
      </div>
    </>

  )
}

export default Homepage;
