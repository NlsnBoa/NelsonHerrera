import React, { ReactNode } from 'react';
import styles from "./Nav.module.css";
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"

interface props {
  orientation: string
  handleNavClick: (page: string) => void
  togglePage: string
  children: ReactNode

}

const Nav = ({children, togglePage, orientation, handleNavClick} : props) => {

  if (togglePage === orientation) {
    return (
      <div  className={[styles.container, styles.orientation, styles["open-" + orientation]].join(' ')}>
        <p className={[styles["open-" + orientation + "-Name-Plate"]].join(' ')}>{children}</p>
        <div className={styles[orientation + "-content-on"]}>
        {
          togglePage === "left" ?  (<About></About>)
          : togglePage === "right"? (<Contact></Contact>)
          : togglePage === "bottom"? (<Projects></Projects>) 
          : ""
        }
        </div>
      </div>
    )
  } else if (togglePage.length !== 0 ) {
    return (
      <div onClick={() => handleNavClick(orientation)} className={[styles.container, styles[orientation]].join(' ')}> 
        <p className={styles[orientation + "-Name-Plate"]}>{children}</p>
        <div className={styles[orientation + "-content-off"]}>
        {
          togglePage === "left" ?  (<About></About>)
          : togglePage === "right"? (<Contact></Contact>)
          : togglePage === "bottom"? (<Projects></Projects>) 
          : ""
        }
        </div>
      </div>
    )
  } else {
    return (
      <div onClick={() => handleNavClick(orientation)} className={[styles.container, styles[orientation]].join(' ')}>
        <p className={styles[orientation + "-Name-Plate"]}>{children}</p>
        <div className={styles[orientation + "-content-off"]}>
        {
          togglePage === "left" ?  (<About></About>)
          : togglePage === "right"? (<Contact></Contact>)
          : togglePage === "bottom"? (<Projects></Projects>) 
          : ""
        }
        </div>
      </div>
    )
  }

}

export default Nav