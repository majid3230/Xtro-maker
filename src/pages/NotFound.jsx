import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/NotFound.module.css";


function NotFound(){

return (

<>

<Navbar />


<div className={styles.error}>


<h1>
404
</h1>


<p>
Page Not Found
</p>


<a href="/">
Go Home
</a>


</div>


<Footer />


</>

);

}


export default NotFound;
