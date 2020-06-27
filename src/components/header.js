import React from "react"
import { Link } from "gatsby"

const Header = props => {
  let activeNav = props.activePage
  return (
    <header>
      {/* Mobile Nav */}
      <ul id="slide-out" className="sidenav">
        <li>const nav = [</li>
        <li>
          {activeNav === "home" ? (
            <Link to="/" className="nav-item active-nav">
              home,
            </Link>
          ) : (
            <Link to="/" className="nav-item">
              home,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "skills" ? (
            <Link to="/skills" className="nav-item active-nav">
              skills,
            </Link>
          ) : (
            <Link to="/skills" className="nav-item">
              skills,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "code" ? (
            <Link to="/code" className="nav-item active-nav">
              code,
            </Link>
          ) : (
            <Link to="/code" className="nav-item">
              code,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "about" ? (
            <Link to="/about" className="nav-item active-nav">
              about,
            </Link>
          ) : (
            <Link to="/about" className="nav-item">
              about,
            </Link>
          )}
        </li>
        <li>
          {activeNav === "contact" ? (
            <Link to="/contact" className="nav-item active-nav">
              contact
            </Link>
          ) : (
            <Link to="/contact" className="nav-item">
              contact
            </Link>
          )}
        </li>
        <li>]</li>
      </ul>

      {/* Desktop Nav */}
      <nav className="nav-center">
        <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li>const nav = [</li>
            <li>
              {activeNav === "home" ? (
                <Link to="/" className="nav-item active-nav">
                  home,
                </Link>
              ) : (
                <Link to="/" className="nav-item">
                  home,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "skills" ? (
                <Link to="/skills" className="nav-item active-nav">
                  skills,
                </Link>
              ) : (
                <Link to="/skills" className="nav-item">
                  skills,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "code" ? (
                <Link to="/code" className="nav-item active-nav">
                  code,
                </Link>
              ) : (
                <Link to="/code" className="nav-item">
                  code,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "about" ? (
                <Link to="/about" className="nav-item active-nav">
                  about,
                </Link>
              ) : (
                <Link to="/about" className="nav-item">
                  about,
                </Link>
              )}
            </li>
            <li>
              {activeNav === "contact" ? (
                <Link to="/contact" className="nav-item active-nav">
                  contact
                </Link>
              ) : (
                <Link to="/contact" className="nav-item">
                  contact
                </Link>
              )}
            </li>
            <li>]</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
