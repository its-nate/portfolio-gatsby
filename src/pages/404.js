import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's a 404.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body mb-0">Sorry, there's nothing here!</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
