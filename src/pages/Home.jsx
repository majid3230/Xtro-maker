import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Home.module.css";


function Home(){

return (

<>

<Navbar />


<main className={styles.home}>

<h1>
Welcome to XTRO NEXUSH
</h1>


<p>
Smart Tech Solutions for Every Business
</p>


<button>
Get Started
</button>


</main>


<Footer />

</>

);

}


export default Home;
