import React, { useState, Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import "./portfolioCard.css";
import { useSpring, animated, config } from "react-spring";
import { Spring, Trail, Transition } from "react-spring/renderprops";

const PortfolioCard = (props) => {
  const [cardToggle, setCardToggle] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);

  const toggleCard = () => {
    setCardToggle(!cardToggle);
  };
  const toggleColor = () => {
    setColorToggle(!colorToggle);
  };

  // const riseIn = useSpring({ config: config.molasses, transform: cardToggle? 'translateY(-100)' : 'translateY(0)'})
  const changeButton = useSpring({
    background: colorToggle ? "indianred" : "white",
  });
  const changeIcon = useSpring({ color: colorToggle ? "coral" : "indianred" });
  const changeTitle = useSpring({ color: colorToggle ? "white" : "indianred" });

  let coverClass = cardToggle ? "hide" : null;
  let contentClass = cardToggle ? null : "hide";

  return (
    <Fragment>
      <div className="portfolio-card">
        <animated.div className={`card-cover ${coverClass}`}>
          <animated.span className="project-icon" style={changeIcon}>
            {props.icon}
          </animated.span>
          <animated.p style={changeTitle}>{props.name}</animated.p>
          <animated.button
            onMouseEnter={toggleColor}
            onMouseLeave={toggleColor}
            onClick={toggleCard}
            style={changeButton}
          >
            info
          </animated.button>
        </animated.div>

        <animated.div className={`card-content ${contentClass}`}>
          <span className="close-project" onClick={toggleCard}><IoMdClose /></span>
          <span className="project-name">{props.name}</span>
          <p>{props.description}</p>
          <p className="highlight">skill highlight: {props.skillHighlight}</p>
          <a href={props.website}>website</a> |{" "}
          <a href={props.gitHubLink}>code</a>
        </animated.div>
      </div>
    </Fragment>
  );
};

export default PortfolioCard;
