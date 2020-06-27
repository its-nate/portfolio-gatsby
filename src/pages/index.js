import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's me, Nate.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <h2 className="page-subhead">I make cool websites.</h2>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body">
            The things I build focus on their essence. I believe a site works
            best when it does what it’s supposed to in a simple, uncluttered
            way.
          </p>
          <p className="page-body">
            I currently do contract and subcontract work through my company,&nbsp; 
            <a href="https://www.holisticwebsolutions.com" target="_blank" rel="noreferrer" class="page-link">Holistic Web Solutions</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
