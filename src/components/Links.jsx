import React from "react";
import styles from '../navbar.module.css';

export const Links = () =>{
  const LinksArr =["Services", "Projects", "About"]
    return(
      <>
      <ul className={styles.links}>
        {LinksArr.map((link)=>(
          <li key={link}>{link}</li>
        ))}
          </ul>
          </>
      
    )
}