import * as React from "react"

import './style.scss'

const Button = (props) => {
  return (
    <a className={`button button--${props.name}`} href={props.to}>
      {props.text}
    </a>
  )
}

export default Button
