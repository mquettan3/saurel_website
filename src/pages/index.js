import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Hello World!</h1>
      <p>Welcome to Saurel Quettan Enterprises' new site.</p>
      <p>We are currently under construction.  Please, check back soon for new features!</p>
      <img src="https://via.placeholder.com/1920x1080" alt="Saurel Quettan banner image"/>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      </div>
  </Layout>
)

export default IndexPage
