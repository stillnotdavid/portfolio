import * as React from "react"

import './style.scss'

const Button = ({children, props}) => {
  return (
    <a className={`button button--${props.type}`}>
      {children}
    </a>
  )
}

export default Button
