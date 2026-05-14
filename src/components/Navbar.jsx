import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <nav aria-label="Primary">
          <ul>
              <li className={styles.logo}>
                <a href="#top" className={styles.brand}>Home</a>
              </li>
              <li><a href="#about" className={styles.navLink}>About</a></li>
              <li><a href="#projects" className={styles.navLink}>Projects</a></li>
              <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar