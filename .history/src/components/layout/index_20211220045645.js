import * as React from "react"

import { Header } from '../../components'
import './style.scss'

const Layout = ({children}) => {
  return (
    <div className="global-container">
      <Header />
      <main>
        {children}
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout
