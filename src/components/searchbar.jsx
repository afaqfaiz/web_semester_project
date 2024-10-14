import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from "./searchbar.module.css";

const Search_bar =()=>{
    const [location,setlocation]=useState('');

    const handleSearch= () => {
        //api fetch code
        console.log(`searching for ${location}`)
    }

    return(
        <div className={styles.searchbar}>
            <input className={styles.input_txt}
             type="text"
             placeholder="Where to"
             value={location}
             onChange={(e)=>setlocation(e.target.value)}
             />
            <div onClick={handleSearch} className={styles.sicondiv}>
            <FontAwesomeIcon  className={styles.searchicon}icon={faMagnifyingGlass} />
            </div>

        </div>
    );

};
export default Search_bar;