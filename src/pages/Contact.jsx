import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Contact.module.css";


function Contact(){

return (

<>

<Navbar />


<main className={styles.contact}>


<h1>
Contact Us
</h1>


<form>


<input 
type="text"
placeholder="Your Name"
/>


<input 
type="email"
placeholder="Your Email"
/>


<textarea
placeholder="Your Message"
/>


<button>
Send Message
</button>


</form>


</main>


<Footer />


</>

);

}


export default Contact;
