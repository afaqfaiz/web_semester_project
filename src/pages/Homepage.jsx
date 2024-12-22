import React from "react";
import Navbar from "../components/Navbar";
import Search_bar from "../components/searchbar";
import Categories from "../components/Categories";
import styles from "./Homepage.module.css";
import Listing from "../components/Listing";
import { useState } from "react";
//import Listingcard from "../components/Listingcard";


const Homepage = () => {

  const [location,setLocation] = useState('');
  console.log("in home",location);
  return (
    <>
      <div className={styles.nav_ser}>
          <Navbar />
          <div className={styles.center_container}>
            <Search_bar setLocation={setLocation} />
          </div>
          <Categories />
            <Listing location={location}/>
      </div>
    </>

  )
}

export default Homepage;
