import * as React from "react"

import Header from '../../components/header'
import './style.scss'

const Layout = ({children}) => {
  return (
    <div className="container">
      <Header />
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
