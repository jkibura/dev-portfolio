import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/globals.css'
import styles from '../styles/Contact.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'

const Contact = () => {
const accent = 'GET IN TOUCH'
const title = 'Contact'
const form = useRef()

function handleSubmit(e) {
  e.preventDefault()

  emailjs
    .sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert('Message sent successfully!')
      form.current.reset()
    })
    .catch(() => {
      alert('Something went wrong. Please try again.')
    })
}

  return (
    <section id="contact" className='container'>
      <SectionHeader accent={accent} title={title}/>

      <div className={styles.contact}>

        <div className={styles.formSide}>
          <form ref={form} className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.row}>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input 
                  id='name'
                  name='from_name'
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
                  name='from_email'
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
                  name='subject'
                  type="text"
                  className={styles.input}
                  placeholder="What's this about?" 
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea 
                  id='message'
                  name='message'
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
          <div className={styles.trustBlock}>
            <h3 className={styles.tagline}>
              Tell me what you are building — I will help you ship it.
            </h3>

            <p className={styles.body}>
              Whether you need a frontend engineer for a product team, a contractor for a
              focused build, or a second pair of eyes on something tricky, you are in the
              right place. Drop a line with your timeline, stack, or job spec; I read every
              message and answer thoughtfully, usually within a day.
            </p>
          </div>

          <div className={styles.socials}>
            <a 
              href="https://github.com/jkibura"
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialRow}
              aria-label="GitHub profile (opens in new tab)"
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
              href="https://www.linkedin.com/in/jk"
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialRow}
              aria-label="LinkedIn profile (opens in new tab)"
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
              className={styles.socialRow}
              aria-label="Send email to jkibura001@gmail.com"
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