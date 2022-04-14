import * as React from "react"
import './style.scss'

const Layout = ({children}) => {
  return (
    <div className="container">
      Hello
      {children}
    </div>
  )
}

export default Layout
