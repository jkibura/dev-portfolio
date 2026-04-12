import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Contact.module.css'

import SectionHeader from './ui/SectionHeader'

const Contact = () => {
const accent = 'GET IN TOUCH'
const title = 'Contact'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>

      <div className='container'>
        <form className={styles.form} action=""></form>
      </div>
    </section>
  )
}

export default Contact