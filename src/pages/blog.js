import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {

  return (
    <Layout>
      <SEO title="Projets" description="Projets | Michal Puczek Web développeur fullstack JavaScript et React" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="Mes projets" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        content
        desc
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default Blog
