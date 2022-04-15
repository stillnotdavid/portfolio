import * as React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="global-container">
      <Helmet title="David Le's Portfolio" />
      <Header />
      <main>{children}</main>
      <footer className="footer">
        &copy; 2022 David Le, All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
