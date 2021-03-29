import React, { Fragment } from "react";
import "./Portfolio.css";
import PortfolioCard from "./portfolioCard.jsx";
import { DiReact, DiRuby } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import {GiSoccerBall} from 'react-icons/gi'

const Portfolio = (props) => {
  return (
    <Fragment>
      <a name="port-con">
        <div
          className="portfolio-container"
          id="portfolio-c"
          ref={props.reference}
        >
          <h1>Portfolio</h1>
          <div className="portfolio-cards">
            <PortfolioCard
              name={"Kyle Sullivan Visual"}
              website={"https://www.kylesullivanvisual.com/"}
              gitHubLink={"https://github.com/mattkuras/ksully-portfolio"}
              description={
                "Fullstack website to sell photography prints, display portfolio, and communicate with customers"
              }
              skillHighlight={"Ruby on Rails, React, AWS"}
              icon={<FaShoppingCart />}
              color={"DodgerBlue"}
            />
             <PortfolioCard
              name={"RSVP FC"}
              website={"https://www.rsvpfc.com/"}
              gitHubLink={"https://github.com/mattkuras/RSVP_FC"}
              description={
                "Web Application designed to schedule soccer games and alert members of game news and updates"
              }
              skillHighlight={"OOP, Ruby on Rails, React"}
              icon={<GiSoccerBall />}
              color={"DodgerBlue"}
            />
            <PortfolioCard
              name={"Habit Tracker"}
              website={"https://atomic-habits-app.herokuapp.com/"}
              gitHubLink={"https://github.com/mattkuras/Habit-Helper"}
              description={
                "Web application that helps users achieve goals of setting new habits, based off the book Atomic Habits"
              }
              skillHighlight={"Ruby on Rails, React"}
              icon={<DiReact />}
              color={"DodgerBlue"}
            />
            <PortfolioCard
              name={"Drug Charge Generator"}
              website={"http://drugchargegenerator.herokuapp.com/"}
              gitHubLink={"https://github.com/mattkuras/drug-charge-app"}
              description={
                "Web application that webscrapes law related sites to quickly generate legal penalties for different types of drug related crimes, by US state."
              }
              skillHighlight={"Ruby, React"}
              icon={<DiRuby />}
              color={"crimson"}
            />
            <PortfolioCard
              name={"Ecommerce Store"}
              website={"https://guitar-store-app.herokuapp.com/"}
              gitHubLink={"https://github.com/mattkuras/final-project"}
              description={
                "App that allows users to pseudo purchase items online by selecting and adding to cart using Redux."
              }
              skillHighlight={"Redux, React"}
              icon={<SiRedux />}
              color={"purple"}
            />
          </div>
        </div>
      </a>
    </Fragment>
  );
};

export default Portfolio;
