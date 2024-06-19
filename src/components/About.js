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
        I am <b>Lalithya Sajja</b>, currently pursuing a Master’s in Computer Science at the <b>University of Georgia, Athens</b> with a specialization in Data Science. Previously, I worked as a <b>Software Engineer</b> at Devpoint Solutions Pvt Ltd, where I gained valuable experience developing web applications, refining my skills in addressing complex technological challenges.
      </p>
    );
    const two = (
      <p>
        Driven by passion for innovation, I aspire to blend my academic knowledge and practical experience to make significant contributions in Web Development and Data science.
      </p>
    );

    const tech_stack = [
      "Python",
      "Javascript",
      "HTML/CSS",
      "SQL",
      "ReactJS",
      "NodeJS",
      "AngularJS",
      "Django",
      "AWS",
      "Github",
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
