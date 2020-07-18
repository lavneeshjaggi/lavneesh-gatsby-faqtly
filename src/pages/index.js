import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Index = styled.div`
  align-items: center;
  color: whitesmoke;
  justify-content: center;

  h1 {
    color: #F5D020;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Restaurant Recommendations - Faqtly" />
    <Index>
      <h1>Welcome to restaurant Recommendations</h1>
      <p>This is a one stop website for all your restaurant recommendations.</p>
      <p>Now go and find the restaurant that best suits you.</p>
    </Index>
    <Link to="/restaurants">Go to restaurant recommendations</Link> <br />
  </Layout>
)

export default IndexPage