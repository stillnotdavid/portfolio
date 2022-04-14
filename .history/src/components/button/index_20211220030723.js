import * as React from "react"

import './style.scss'

const Button = ({children}) => {
  return (
    <a className="button">
      {children}
    </a>
  )
}

export default Button
