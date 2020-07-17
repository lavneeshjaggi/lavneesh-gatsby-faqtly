import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';

const Restaurent = styled.div`
  color: #F5D020;
`

class SecondPage extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurents: []
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Page two" />
        <Restaurent>
          <h1>Hi, Welcome to restaurant recommendations</h1>
          <p>We hope you find what you are looking for!</p>
        </Restaurent>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage