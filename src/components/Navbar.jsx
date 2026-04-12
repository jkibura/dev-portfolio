import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <nav>
          <ul>
              <li className={styles.logo}><a href="#" className='nav-link'>Home</a></li>
              <li><a href="#" className='nav-link'>About</a></li>
              <li><a href="#" className='nav-link'>Projects</a></li>
              <li><a href="#" className='nav-link'>Contact</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar