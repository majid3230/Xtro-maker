import React from "react";
import styles from "../styles/Navbar.module.css";


function Navbar(){

return (

<nav className={styles.navbar}>

<div className={styles.logo}>
XTRO NEXUSH
</div>


<div className={styles.links}>

<a href="/">Home</a>

<a href="/dashboard">
Dashboard
</a>

<a href="/about">
About
</a>

<a href="/contact">
Contact
</a>

</div>


</nav>

);

}


export default Navbar;
