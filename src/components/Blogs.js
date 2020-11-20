import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {

  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map((blog, index) => {
          return <Blog key={blog.id} {...blog} index={index} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn2 center-btn">
          Plus de projets
        </Link>
      )}
    </section>
  )
}
export default Blogs
