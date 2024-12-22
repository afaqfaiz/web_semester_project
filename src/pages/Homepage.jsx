import React from "react";
import Navbar from "../components/Navbar";
import Search_bar from "../components/searchbar";
import Categories from "../components/Categories";
import styles from "./Homepage.module.css";
import Listing from "../components/Listing";
//import Listingcard from "../components/Listingcard";


const Homepage = () => {

  return (
    <>
      <div className={styles.nav_ser}>
          <Navbar />
          <div className={styles.center_container}>
            <Search_bar />
          </div>
          <Categories />
            <Listing/>
      </div>
    </>

  )
}

export default Homepage;
