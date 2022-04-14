import * as React from "react"

import './style.scss'

const Button = ({children}, props) => {
  return (
    <a className={`button button--${props.name}`}>
      {children}
    </a>
  )
}

export default Button
