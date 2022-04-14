import * as React from "react"

import './style.scss'

const Button = ({children}) => {
  return (
    <a className={`button ${props.primary && "button--primary"}`}>
      {children}
    </a>
  )
}

export default Button
