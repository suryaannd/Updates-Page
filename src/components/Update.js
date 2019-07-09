import React from "react"
import styled from "styled-components"

class Update extends React.Component {
  render() {
    return (
      <section className="GridSection">
        <IllustrationImage src="../images/Updates.svg" alt="" />
        <div className="Update">
          <h4>Released July 2, 2019</h4>
          <h1> Version 32.5</h1>
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
    )
  }
}

export default Update

const IllustrationImage = styled.img`
  height: 260px;
  left: 691px;
  top: 128px;
  position: relative;
  z-index: 2;
`