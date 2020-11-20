import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
/* import Projects from "../components/Projects" */
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'

export default ({ data }) => {

  const {
    /* allStrapiProjects: { nodes: projects }, */
    allStrapiBlogs: { nodes: blogs }
  } = data

  return (
    <Layout>
      <SEO title="Accueil" description="Accueil | Michal Puczek Web développeur fullstack JavaScript et React" />
      <Hero />
      <Services />
      {/* <Projects projects={projects} title="Mes projets" showLink /> */}
      <Blogs blogs={blogs} title="Mes projets" showLink />
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiBlogs (filter: { featured: { eq: true}
  }) {
    nodes {
      slug
      content
      desc
      id
      url
      github
      title
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
/* allStrapiProjects(filter: { featured: { eq: true}
}) {
  nodes {
    github
    id
    description
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
} */

/* (sort: {fields :date, order: DESC}, limit: 3) */