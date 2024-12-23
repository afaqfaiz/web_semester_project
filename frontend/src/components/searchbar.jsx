import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from "../assets/css/searchbar.module.css";

const Search_bar =({setLocation})=>{
    const [inputValue, setInputValue] = useState("");

    const handleSearch= () => {
        //api fetch code
        setLocation(inputValue)
        console.log(`searching for ${inputValue}`)
    }

    return(
        <div className={styles.searchbar}>
            <input className={styles.input_txt}
             type="text"
             placeholder="Where to"
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)}
             />
            <div onClick={handleSearch} className={styles.sicondiv}>
            <FontAwesomeIcon  className={styles.searchicon}icon={faMagnifyingGlass} />
            </div>

        </div>
    );

};
export default Search_bar;