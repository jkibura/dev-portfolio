import React, { useEffect, useRef, useState } from 'react'
import '../../styles/globals.css'

const SectionHeader = (props) => {
  const rootRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.12,
        rootMargin: '-11% 0px -20% 0px',
      }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={rootRef}
      className={`sectionHeader${inView ? ' sectionHeader--inView' : ''}`}
    >
      <p className='eyebrow'>{props.accent}</p>
      <div className='sectionHeaderTitleRow'>
        <h2 className='section-title'>{props.title}</h2>
        <div className='accentLine' aria-hidden />
      </div>
    </div>
  )
}

export default SectionHeader