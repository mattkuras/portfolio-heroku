import React from "react";
import "./Home.css";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useSpring, animated, config, useTransition } from "react-spring";
import { Spring, Trail, Transition } from "react-spring/renderprops";

const Home = (props) => {
  const propsMiddle = useSpring({
    config: config.molasses,
    from: { transform: `translate(0, 100%)` },
    to: { transform: "translate(0, 0%)" },
  });
  const propsLeft = useSpring({
    config: config.molasses,
    from: { transform: "translate(-200%, 0%)" },
    to: { transform: "translate(0, 0%)" },
  });
  const propsRight = useSpring({
    config: config.molasses,
    from: { transform: "translate(200%, 0%)" },
    to: { transform: "translate(0, 0%)" },
  });
  const propsTitle = useSpring({
    config: { mass: 1, tension: 280, friction: 300 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  let direction = getRandomInt(400);
  const propsName = useSpring({
    config: config.molasses,
    from: { transform: `translate(${direction}%, 0%)` },
    to: { transform: "translate(0, 0%)" },
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



  return (
    <a name='home-con'>
      <div className="home-container" ref={props.reference}>
        <div className="home-content">
          <Spring
            config={config.molasses}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {(props) => <span style={props}>Matt Kuras</span>}
          </Spring>
          
          <animated.h3 style={propsTitle}>Full Stack Web Developer</animated.h3>
          <ul className="social-list">
            <animated.li style={propsName}>
              <a href="https://github.com/mattkuras">
                <FaGithub />
              </a>
            </animated.li>
            <animated.li style={propsMiddle}>
              <a href="https://www.linkedin.com/in/matthew-kuras-72a7711b5/">
                <AiFillLinkedin />
              </a>
            </animated.li>
            <animated.li style={propsRight}>
              <a href="https://docs.google.com/document/d/1C0SZOLD4BQdhu0hVqywGrrSIKsbuFzAdNm9l2L7fGRE/edit?usp=sharing">
                <CgFileDocument />
              </a>
            </animated.li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Home;
