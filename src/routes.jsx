import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const Home = lazy(() => import("./pages/Home.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));


const routes = (

<BrowserRouter>

<Routes>

<Route 
path="/" 
element={<Home />}
/>


<Route 
path="/dashboard" 
element={<Dashboard />}
/>


<Route 
path="/about" 
element={<About />}
/>


<Route 
path="/contact" 
element={<Contact />}
/>


<Route 
path="*" 
element={<NotFound />}
/>


</Routes>

</BrowserRouter>

);


export default routes;
