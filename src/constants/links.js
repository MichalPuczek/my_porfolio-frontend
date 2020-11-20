import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Accueil",
    url: "/",
  },
  {
    id: 2,
    text: "About me",
    url: "/about/",
  },
  {
    id: 3,
    text: "Expérience",
    url: "/jobs/",
  },
  {
    id: 4,
    text: "formation",
    url: "/formations/",
  },
  {
    id: 5,
    text: "mes projets",
    url: "/blog/",
  },
  {
    id: 6,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
