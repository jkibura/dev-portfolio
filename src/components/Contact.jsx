import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Contact.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'

const Contact = () => {
const accent = 'GET IN TOUCH'
const title = 'Contact'

function handleSubmit(e) {
  e.preventDefault()
  //EmailJS code here
  console.log('submitted')
}

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/> change to eyebrow?

      <div className={styles.contact}>

        <div className={styles.formSide}>
          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.row}>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input 
                  id='name'
                  type="text"
                  className={styles.input}
                  placeholder="Your name /Organization" 
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input 
                  id='email'
                  type="email"
                  className={styles.input}
                  placeholder="you@email.com" 
                  required
                />
              </div>

            </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <input 
                  id='subject'
                  type="text"
                  className={styles.input}
                  placeholder="What's this about?" 
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea 
                  id='message'
                  type="text"
                  className={styles.textarea}
                  placeholder="Tell me about your project..." 
                  rows={5}
                  required
                />
              </div>

              <Button type='submit' variant='primary'>
                Send Message
              </Button>

          </form>
        </div>

        <div className={styles.infoSide}>
          <h3 className={styles.tagline}>
            Let's build something great together.
          </h3>

          <p className={styles.body}>
            Whether you have a project in mind, a role to fill, or just want to connect - my inbox is always open.
          </p>

          <div className={styles.socials}>
            <a 
              href="https://github.com/jkibura"
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialRow}
            >
              <div className={styles.socialIcon}>
                <FaGithub size={16}/>
              </div>
              <div className={styles.socialText}>
                <span className={styles.socialLabel}>Github</span>
                <span className={styles.socialLink}>github.com/jkibura</span>
              </div>
            </a>

            <a 
              href=""
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialRow}
            >
              <div className={styles.socialIcon}>
                <FaLinkedin size={16}/>
              </div>
              <div className={styles.socialText}>
                <span className={styles.socialLabel}>Linkedin</span>
                <span className={styles.socialLink}>linkedin.com/in/jk</span>
              </div>
            </a>

            <a 
              href="mailto:jkibura001@gmail.com"
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialRow}
            >
              <div className={styles.socialIcon}>
                <FiMail size={16}/>
              </div>
              <div className={styles.socialText}>
                <span className={styles.socialLabel}>Email</span>
                <span className={styles.socialLink}>jkibura001@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact