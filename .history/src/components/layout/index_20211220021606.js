import * as React from "react"
import './style.scss'

const Layout = ({children}) => {
  return (
    <div className="container">
      <main>
      {children}
      </main>
    </div>
  )
}

export default Layout
