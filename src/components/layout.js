
import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

import Header from "./header"

const Layout = ({ children, title }) => {

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
