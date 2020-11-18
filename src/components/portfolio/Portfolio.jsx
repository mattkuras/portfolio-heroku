import React, { Fragment } from "react";
import "./Portfolio.css";
import PortfolioCard from "./portfolioCard.jsx";
import { DiReact, DiRuby } from "react-icons/di";
import { SiRedux } from "react-icons/si";

const Portfolio = (props) => {
  return (
    <Fragment>
      <a name='port-con'>
        <div
          className="portfolio-container"
          id="portfolio-c"
          ref={props.reference}
        >
          <h1>Portfolio</h1>
          <div className="portfolio-cards">
            <PortfolioCard
              name={"Habit Tracker"}
              website={"https://atomic-habits-app.herokuapp.com/"}
              gitHubLink={"https://github.com/mattkuras/Habit-Helper"}
              description={
                "App that uses a Rails API and React frontend framework that allows users to create identities and to keep daily progress stored on the app"
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
                "App that utilizes custom Ruby class methods to webscrape online sites to quickly generate legal penalties for different types of drug related crimes, by US state."
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
