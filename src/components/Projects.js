import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Online Bookstore": {
        title: "Online Bookstore",
        desc:
          "Developed a full-stack e-commerce website using Django for the backend, HTML, CSS, and JavaScript for the frontend, and SQLite for the database, showcasing a comprehensive application of web development skills, including user authentication, product management, shopping cart functionality, and search functionality.",
        techStack: "Python, Javascript, HTML/CSS",
        link: "https://github.com/lalithyasajja/Online_bookstore",
        // open: "https://gazijarin.itch.io/no-mans-land",   //UPDATE
        image: "/assets/online-bookstore-shelves.png"
      },
      "Airport Management System": {
        title: "Airport Management System",
        desc:
          "Built an interactive web-based application using NodeJS for backend and ReactJS for frontend and MySQL, to view the data with the help of pagination to display huge data. Strategically engineered the database by comparing UML Class Diagrams, 3NF/BCNF Normalization techniques.",
        techStack: "NodeJS, ReactJS, MySQL",
        // link: "https://github.com/gazijarin/truth",
        // open: "https://gazijarin.github.io/Truth/",
        image: "/assets/airport-2.png"
      },
      "Text to SQL generator": {
        title: "Text to SQL generator",
        desc:
          "Developed a Text to SQL chatbot leveraging advanced natural language processing (NLP) techniques to translate user queries into SQL commands. Utilized Langchain for NLP workflow and Large Language Models (LLMs). Deployed an interactive and user-friendly web interface using streamlit, ensuring seamless user interaction and efficient query processing. Applied advanced Prompt Engineering, Chain of Thought, and Zero-shot Learning techniques to improve the chatbot's interpretative capabilities.",
        techStack: "LangChain, Streamlit, Python",
        // link: "https://github.com/gazijarin/TallTales",
        // open: "https://talltales.herokuapp.com/",
        image: "/assets/text2sql.png"
      },
      "House Price Predictions": {
        title: "House Price Predictions",
        desc:
          "Led comprehensive Exploratory Data Analysis (EDA) to unveil patterns and outliers on 79 feature variables.Performed meticulous data preprocessing to handle missing values, categorical variables by employing data imputation, normalization, and one-hot encoding, ensuring an optimized dataset for advanced regression analysis using NumPy and Pandas.",
        techStack: "Python, Numpy, Pandas",
        link: "https://github.com/lalithyasajja/House-Price-Prediction---Kaggle",
        // open: "https://afternoon-ocean-92382.herokuapp.com/",
        image: "/assets/house.png"
      }
    };
    const projects = {
      "Online Bookstore": {
        desc:
          "Developed a full-stack e-commerce website using Django for the backend, HTML, CSS, and JavaScript for the frontend, and SQLite for the database, showcasing a comprehensive application of web development skills, including user authentication, product management, shopping cart functionality, and search functionality.",
        techStack: "Python, Javascript, HTML/CSS",
        link: "https://github.com/lalithyasajja/Online_bookstore",
        // open: "https://tdsb-app.herokuapp.com/"
      },
      "Airport Management System": {
        desc:
          "Built an interactive web-based application using NodeJS for backend and ReactJS for frontend and MySQL, to view the data with the help of pagination to display huge data. Strategically engineered the database by comparing UML Class Diagrams, 3NF/BCNF Normalization techniques.",
        techStack: "NodeJS, ReactJS, MySQL",
        // link: "https://github.com/gazijarin/adamai",
        // open: "https://gazijarin.github.io/AdamAI/"
      },
      "Text to SQL generator": {
        desc:
          "Developed a Text to SQL chatbot leveraging advanced natural language processing (NLP) techniques to translate user queries into SQL commands. Utilized Langchain for NLP workflow and Large Language Models (LLMs).",
        techStack: "LangChain, Streamlit, Python",
        // link:
        //   "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
      },
      "House Price Predictions": {
        desc:
          "Led comprehensive Exploratory Data Analysis (EDA) to unveil patterns and outliers on 79 feature variables.Performed meticulous data preprocessing to handle missing values, categorical variables by employing data imputation, normalization, and one-hot encoding, ensuring an optimized dataset for advanced regression analysis using NumPy and Pandas.",
        techStack: "Python, Numpy, Pandas",
        link: "https://github.com/lalithyasajja/House-Price-Prediction---Kaggle",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
