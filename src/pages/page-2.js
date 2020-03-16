import React from "react";

import Layout from "../components/layout";

import Button from 'react-bootstrap/Button';

const SecondPage = () => (
  <Layout title="Page two">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button href="/">Go back to the homepage</Button>
  </Layout>
)

export default SecondPage
