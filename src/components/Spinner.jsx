import React from "react";
import styles from "../styles/Spinner.module.css";


function Spinner(){

return (

<div className={styles.spinner}>

<div className={styles.circle}></div>

<p>
Loading...
</p>

</div>

);

}


export default Spinner;
