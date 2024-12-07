import React, { useState, useRef, useEffect } from "react";
import styles from "./Searchbar.module.css";

const Searchbar = ({handleSearch}) => {

  const [localSearchInput, setLocalSearchInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () =>{
    handleSearch(localSearchInput);
  }

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        className={styles.fontClass}
        value={localSearchInput}
        onChange={(e)=>setLocalSearchInput(e.target.value)}
        type="text"
        placeholder="Enter city name"
      />
      <button className={styles.fontClass} onClick={handleClick}>Search</button>
    </div>
  );
};
export default Searchbar;
