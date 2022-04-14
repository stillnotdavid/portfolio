import * as React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="global-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>David Le Portfolio</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <footer className="footer">
        &copy; 2022 David Le, All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
