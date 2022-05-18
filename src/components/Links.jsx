import React from "react";
import styles from '../navbar.module.css';

export const Links = () =>{
    return(
      <>
      <ul className={styles.links}>
           <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          </ul>
          </>
      
    )
}