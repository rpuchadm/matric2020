
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import PropTypes from "prop-types";

import Header from "./header"

const Layout = ({ children, title }) => {

  return (
    <>
      <Header title={title} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
