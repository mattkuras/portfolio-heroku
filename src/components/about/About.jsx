import React from "react";
import "./About.css";
import { DiReact, DiRuby, DiJavascript1, DiCss3Full } from "react-icons/di";
import { SiRails, SiRedux, SiRedhat } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import sophiaheadshot from "./sophiaheadshot.JPG";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const About = (props) => {
  return (
    <a name="about-con">
      <div className="about-container" ref={props.reference}>
        <VisibilitySensor partialVisibility={true}>
          {({ isVisible }) => (
            <Spring
              delay={100}
              to={{
                opacity: isVisible ? 1 : 0,
                // transform: isVisible ? "translateY(0)" : "translateY(-100px)",
              }}
            >
              {(props) => <h1 style={{ ...props }}>About Me</h1>}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="split-container">
          <div className="headshot-container">
            <img alt="sophiaheadshot.JPG" src={sophiaheadshot} />
          </div>
          <div className="about-me">
            <p>
            Experienced in Ruby on Rails and JavaScript programming with a background in education and customer service 
            in a startup environment. Strong passion for Object Oriented Programming and building scalable full stack 
            applications as quality solutions that improve the lives of clients.
            </p>
          </div>
        </div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
              {(opacity) => (
                <h2 id="skills-header" style={opacity}>
                  Skills
                </h2>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} minTopValue={1}>
          {({ isVisible }) => (
            <Spring
              delay={100}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
              }}
            >
              {(props) => (
                <div className="skills-container" style={{ ...props }}>
                  <div className="skill left">
                    <a href="https://reactjs.org/">
                      <DiRuby />
                    </a>
                    <h2>Ruby</h2>
                  </div>
                  <div className="skill left">
                    <a href="https://reactjs.org/">
                      <SiRails />
                    </a>
                    <h2>Rails</h2>
                  </div>
                  <div className="skill left">
                    <a href="https://reactjs.org/">
                      <DiJavascript1 />
                    </a>
                    <h2>Javascript</h2>
                  </div>
                  <div className="skill left">
                    <a href="https://reactjs.org/">
                      <DiReact />
                    </a>
                    <h2>React</h2>
                  </div>
                  <div className="skill right">
                    <a href="https://reactjs.org/">
                      <SiRedux />
                    </a>
                    <h2>Redux</h2>
                  </div>
                  <div className="skill right">
                    <a href="https://reactjs.org/">
                      <SiRedhat />
                    </a>
                    <h2>Sinatra</h2>
                  </div>
                  <div className="skill right">
                    <a href="https://reactjs.org/">
                      <AiOutlineHtml5 />
                    </a>
                    <h2>HTML5</h2>
                  </div>
                  <div className="skill right ">
                    <a href="https://reactjs.org/">
                      <DiCss3Full />
                    </a>
                    <h2>CSS3</h2>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </a>
  );
};

export default About;
