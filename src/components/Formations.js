import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import CV from '../assets/CV_MichalPuczek.pdf'

const Formations = ({ setValue, school, title, date, desc, value, formations }) => {

    return (
        <section className="section jobs">
            <Title title="Formation" />
            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {formations.map((item, index) => {
                        return (
                            <button
                                key={item.strapiId}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && "active-btn"}`}
                            >
                                {item.school}
                            </button>
                        )
                    })}
                </div>
                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{school}</h4>
                    <p className="job-date">{date}</p>
                    {desc.map(item => {
                        return (
                            <div key={item.id} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
            <div>
                <a href={CV} target="_blank" download="Michal Puczek_CV" className="btn-CV">Téléchargez CV (.pdf)</a>
            </div>
        </section>
    )
}

export default Formations