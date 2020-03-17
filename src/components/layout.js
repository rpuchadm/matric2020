
import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Header from "./header"

const Layout = ({ children, title }) => {

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
      <Container>
        <Row>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
