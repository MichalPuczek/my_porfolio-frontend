import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Formations from "../components/Formations"
import SEO from '../components/SEO'

const Formation = () => {

  const data = useStaticQuery(query)
  const {
    allStrapiFormations: { nodes: formations },
  } = data
  const [value, setValue] = React.useState(0)
  const { school, title, date, desc } = formations[value]

  return (
    <Layout>
      <SEO title="Formation" description="Formation | Michal Puczek Web développeur fullstack JavaScript et React" />

      <section className="blog-page">
        <Formations formations={formations} school={school} title={title} date={date} desc={desc} value={value} setValue={setValue} />
      </section>
    </Layout>
  )
}

const query = graphql`
  {
    allStrapiFormations(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        school
        date
        title
        desc {
          id
          name
        }
      }
    }
  }
`

export default Formation