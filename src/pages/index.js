import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Constantly Evolving</h1>
          <p>
            Did you know that we update Scrumpy 13 times a day on average? We're
            continuously improving your experience. Learn more about our latest
            additions.
          </p>
        </div>
        <div className="Updates">
          <div className="UpdateGroup">
            <h2>#Version 1.1</h2>
            <h4>Released 12 June, 2019</h4>
            <h3>Animated Illustrations</h3>
            <p>
              Framer makes it incredibly easy to add complex user interactions
              inside your prototype, taking your design and code components to
              the next level. Playground allows you to quickly test new concepts
              within the all - new in -app code editor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
