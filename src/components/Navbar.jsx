import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from "../hooks/useTheme.js";
import { Menu, X, Sun, Moon } from 'lucide-react';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand} onClick={closeMenu}>
        XTRO Maker
      </NavLink>
      
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          onClick={closeMenu}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>

      <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
