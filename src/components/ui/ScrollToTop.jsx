import React, { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
// import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'

const ScrollToTop = () => {
    const [visible, setvisible] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setvisible(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll, { passive: true }) //last property tells browser to scroll instantly cuz we aren't trying to stop anything

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }

  return (
    <button 
        className={`scroll ${visible ? 'visible' : ''}`}
        onClick={scrollToTop}>
      <FiArrowUp size={16}/>
    </button>
  )
}

export default ScrollToTop