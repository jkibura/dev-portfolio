import React from 'react'

const Button = ({
  children,
  onClick,
  variant = 'Primary',  // Defaults to 'Primary' if nothing is passed
  type = 'button'       // Defaults to 'button' if nothing is passed to prevent form submission bugs
}) => {

  return (
    <div 
      className={`button button${variant}`}
      type={type}
      onClick={onClick}>
      {children}
    </div>
  )
}

export default Button