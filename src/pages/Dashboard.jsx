import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Dashboard.module.css";


function Dashboard(){

return (

<>

<Navbar />


<main className={styles.dashboard}>


<h1>
Dashboard
</h1>


<div className={styles.card}>

<h2>
Welcome User
</h2>

<p>
Manage your projects and services here.
</p>

</div>


</main>


<Footer />


</>

);

}


export default Dashboard;
