import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact | Michal Puczek Web développeur fullstack JavaScript et React"
      />
      <section className="contact-page">
        <div className="contact-info">
          <h3>Entrons en contact !</h3>
          <p>
            Vous pouvez m'adresser un message directement depuis ce formulaire,
            ou encore me joindre par mail ou par téléphone.
          </p>
          <p className="mail">michal.puczek@gmail.com</p>
          <p className="telephone">+33 6 80 08 30 03</p>
        </div>

        <article className="contact-form">
          <form action="https://formspree.io/f/xjvprpyk" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="nom"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              ENVOYEZ
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
