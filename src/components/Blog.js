import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Blog = ({ id, title, image, slug, desc, stack, index, url, github }) => {
  console.log('image', image)
  return (
    <div className="blog">
      <Link to={`/blogs/${slug}`} key={id}>
        <article>
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
          <div className="blog-card">
            <span className="project-number">0{index + 1}.</span>
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className="blog-footer"></div>
            <div className="project-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </div>
        </article>
      </Link>
      <div className="project-links">
        <a href={github} target="_blank">
          <FaGithubSquare className="project-icon" />
        </a>
        {url && (
          <a href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        )}
      </div>
    </div>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog

/* return (
  <Link to={`/blogs/${slug}`} className="blog" key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid} className="blog-img" />
      <div className="blog-card">
        <span className="project-number">0{index + 1}.</span>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
        </div>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          {
            url && (
              <a href={url}>
                <FaShareSquare className="project-icon" />
              </a>
            )
          }
        </div>
      </div>
    </article>
  </Link>
) */
