import React from "react";
import Navbar from "../components/Navbar";
import Search_bar from "../components/searchbar";
import Categories from "../components/Categories";
import styles from "./Homepage.module.css";
import Listing from "../components/Listing";
import BookingPage from "./booking";
import { useState } from "react";
//import Listingcard from "../components/Listingcard";


const Homepage = () => {

  const[activeCategory,setsentcatigory]=useState('');
  const [location,setLocation] = useState('');
  console.log("in home",location);
  return (
    <>
      <div className={styles.nav_ser}>
          <Navbar />
          <div className={styles.center_container}>
            <Search_bar setLocation={setLocation} />
          </div>
          <Categories setsentcatigory={setsentcatigory} />
            <Listing location={location} activeCategory={activeCategory}/>
            {/* <BookingPage /> */}
      </div>
    </>

  )
}

export default Homepage;
