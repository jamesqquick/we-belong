import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="header-title">WE BELONG</h1>
    <p>
      <strong>Regardless</strong> of experience. <strong>Regardless</strong> of
      title. <strong>Regardless</strong> of a degree.
    </p>
    <h2 className="header-subtitle">
      Don't let{" "}
      <strong>
        <span className="strike">Imposter Syndrome</span>
      </strong>{" "}
      hold you back!
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
