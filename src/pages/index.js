import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Restaurant Recommendations - Faqtly" />
    <h1>Welcome to restaurant Recommendations</h1>
    <p>This is a one stop website for all your restaurent recommendations.</p>
    <p>Now go and find the restaurant that best suits you.</p>
    <Link to="/restaurants">Go to restaurant recommendations</Link> <br />
  </Layout>
)

export default IndexPage