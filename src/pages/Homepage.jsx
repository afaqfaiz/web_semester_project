import React from "react";
import Navbar from "../components/Navbar";
import Search_bar from "../components/searchbar";
import Categories from "../components/Categories";
import styles from "./Homepage.module.css"


const Homepage = () => {

  return (
    <>
      <div className={styles.nav_ser}>
          <Navbar />
          <div className={styles.center_container}>
            <Search_bar />
          </div>
          <Categories />
      </div>
    </>

  )
}

export default Homepage;
