import * as React from "react";

import { Header } from "../../components";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="global-container">
      <Header />
      <main>{children}</main>
      <footer className="footer">
        &copy; 2022 David Le, All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
