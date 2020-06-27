import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => (
  <Layout>
    <SEO title="skills" />
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="page-header">It's my skills.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p className="page-body">
            I work mostly in JavaScript but have been known to dabble in some
            PHP.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <h3 className="page-body">Current top:</h3>
          <div className="row center-align">
            <div className="col s12 m4">
              <p className="page-body page-top-skills">React</p>
            </div>
            <div className="col s12 m4">
              <p className="page-body page-top-skills">Gatsby</p>
            </div>
            <div className="col s12 m4">
              <p className="page-body page-top-skills">GraphQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <h3 className="page-body mb-0">The full list:</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6 page-body">
          <span className="skills-list-header">Core</span>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="col s12 m6 page-body">
          <span className="skills-list-header">Frameworks</span>
          <ul className="skills-list">
            <li>React</li>
            <li>Gatsby</li>
            <li>Laravel</li>
            <li>Drupal</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6 page-body">
          <span className="skills-list-header">Data</span>
          <ul className="skills-list">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>REST</li>
            <li>JSON</li>
          </ul>
        </div>
        <div className="col s12 m6 page-body">
          <span className="skills-list-header">DevOps</span>
          <ul className="skills-list">
            <li>AWS</li>
            <li>Netlify</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Skills
