import React from "react"
import { Link } from "gatsby"

import Updates from "../components/Update"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Things Are Changing</h1>
        <p>New updates and improvements to Shape</p>
      </div>
      <Updates />
      <Updates />
    </div>
  </Layout>
)

export default IndexPage
