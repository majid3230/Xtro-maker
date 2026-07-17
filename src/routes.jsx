import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from "./components/Spinner.jsx";

const Home = lazy(() => import('./Home.jsx'));
const Dashboard = lazy(() => import("./Dashboard.module.jsx"));
const About = lazy(() => import('./About.jsx'));
const Contact = lazy(() => import('./Contact.jsx'));
const NotFound = lazy(() => import('./NotFound.jsx'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner fullScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
