import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section id="top" className={styles.hero}>

      <div className='container' id={styles.heroContainer}>

        <div className={styles.heroText}>
          <div className={styles.textMobile}>
            <h1 className='hero-name'>I build high-performance</h1>
            <span className='hero-name-accent'>web experiences</span>
          </div>
          
          <p className='hero-subtitle'>Frontend Engineer | React | TypeScript</p>
          
          <div className={styles.buttons}>
            <a href="#projects" className="button">
              View Projects
            </a>
            <a href="#contact" className={`button ${styles.ctaHire}`}>
              <span className={styles.ctaHireInner}>
                <span className={styles.ctaHireLabel}>Hire me</span>
                {/* <span className={styles.ctaHireHint}>
                  Share your role, timeline, or idea — I will reply thoughtfully.
                </span> */}
              </span>
              <span className={styles.ctaHireArrow} aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3 className={styles.statNo}>2+</h3>
            <p className={styles.statText}>Years of experience</p>
          </div>

          <div className={styles.stat}>
            <h3 className={styles.statNo}>24+</h3>
            <p className={styles.statText}>Projects shipped</p>
          </div>

          <div className={styles.stat}>
            <h3 className={styles.statNo}>12</h3>
            <p className={styles.statText}>Happy clients</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero