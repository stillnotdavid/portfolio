import * as React from "react"
import './style.scss'

const Layout = ({children}) => {
  return (
    <div className="container">
      <main>
        {children}
      </main>
      <footer>
        Footer here
      </footer>
    </div>
  )
}

export default Layout
