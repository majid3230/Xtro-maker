import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/About.module.css";


function About(){

return (

<>

<Navbar />


<main className={styles.about}>


<h1>
About XTRO NEXUSH
</h1>


<p>

We provide modern web development,
AI solutions and digital services.

</p>


</main>


<Footer />


</>

);

}


export default About;
