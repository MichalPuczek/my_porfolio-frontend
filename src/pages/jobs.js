import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Jobs from "../components/Jobs"
import SEO from '../components/SEO'

const Job = () => {

  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log('jobs', jobs)
  return (
    <Layout>
      <SEO title="Expérience" description="Expérience | Michal Puczek Web développeur fullstack JavaScript et React" />

      <section className="blog-page">
        <Jobs jobs={jobs} title="Expérience" company={company} position={position} date={date} desc={desc} value={value} setValue={setValue} />
      </section>
    </Layout>
  )
}

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

export default Job