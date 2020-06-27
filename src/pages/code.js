import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Code = () => (
  <Layout>
    <SEO title="code" />
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's my code.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body mb-0">
            Feel free to check out my{" "}
            <a
              href="https://github.com/DearLorditsNate"
              target="_blank"
              rel="noreferrer"
              class="page-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body">
            I also profile some projects I’ve completed through my
            company,&nbsp;
            <a
              href="https://www.holisticwebsolutions.com"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              Holistic Web Solutions
            </a>
            , on their site.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Code