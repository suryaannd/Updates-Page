import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <section className="GridSection">
        <div className="Update">
          <h4>Released July 2, 2019</h4>
          <h1> Version 1.0</h1>
          <p>We're so excited to announce animated illustrations to Shape.so</p>
        </div>
        <div className="Fixes">
          <h2>Improvements</h2>
          <ul class="checklist">
            <li>
              Holding Shift and dragging the Smart Distribute handles for a
              selection of layers on the Canvas will now snap based on your
              Nudging settings
            </li>
            <li>
              The aspect ratio lock now accurately displays as an open grey lock
              when inactive.
            </li>
            <li>
              You’ll now receive fewer disruptive warning notifications when
              saving large documents.
            </li>
          </ul>
          <h2>Fixed</h2>
          <ul className="checklist">
            <li>
              You can now export a scroll component without missing any content
            </li>
            <li>Search in Playground dark mode now works as expected.</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
