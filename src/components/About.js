import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I recently completed my master’s in computer science from the University of Georgia, where I deepened my knowledge of advanced data science techniques, and machine learning algorithms. During my time at UGA, I worked on various projects involving predictive analytics. Previously, I worked as a Data Analyst at Devpoint Solutions Pvt Ltd, where I gained valuable experience in delivering valuable insights to drive business growth.
      </p>
    );
    const two = (
      <p>
        Driven by passion for innovation, I aspire to blend my academic knowledge and practical experience to make significant contributions in Data Analytics.
      </p>
    );

    const tech_stack = [
      "Python",
      "R",
      "SQL",
      "Scala",
      "PowerBI",
      "Javascript",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Lalithya Sajja" src={"/assets/me3.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
