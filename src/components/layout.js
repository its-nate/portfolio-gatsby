import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const M = typeof window !== `undefined` ? require("materialize-css") : null

class Layout extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      const sideNavElems = document.querySelectorAll(".sidenav")
      const sideNavInstances = M.Sidenav.init(sideNavElems, {
        preventScrolling: true,
        draggable: false,
      })
    }, 500)
  }

  render() {
    return (
      <>
        <Helmet>
          {/* Materialize Icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"></link>
        </Helmet>
        <Header activePage={this.props.children[0].props.title} />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout