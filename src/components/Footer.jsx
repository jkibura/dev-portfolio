import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Footer.module.css'


const Footer = () => {
  const year = new Date().getDate

  return (
    <div className={styles.footer}>
        <p className='body-text'>&copy; {year} All rights reserved. Designed and built with care.</p>
    </div>
  )
}

export default Footer