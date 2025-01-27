import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import PortfolioItem from "./PortfolioItem";
import PORTFOLIO_ALL from "../utils/portfolioData.json";
// const PORTFOLIO_ALL = [
//   {
//     portfolioImg: "/assets/images/portfolio/p-1.png",
//     portfolioLink: "/single-portfolio",
//     portfolioTitle: "Zeta",
//     portfolioText:
//       "No more concerns about gas mileage, gasoline prices, insurance, or vehicle breakdowns! Zeta has made driving around cities more convenient for commuters, and it is rapidly increasing its reach to multiple places. Customers enjoy greater control, privacy, and freedom thanks to Zeta's self-driving automobiles. With the Zeta app on your phone, you can book a self-drive automobile in whatever city you visit and feel right at home.",
//   },
//   {
//     portfolioImg: "/assets/images/portfolio/Xpay.png",
//     portfolioLink: "/single-portfolio",
//     portfolioTitle: "xpay+",
//     portfolioText:
//       "xPay+ is a Fintech SAAS Platform offering Payment Solutions for Commercial Transport Industry & Corporates through prepaid loadable Rupay cards. Companies can manage fleet expenses, toll expenses, fuel expenses and lending to transport companies.",
//   },
//   {
//     portfolioImg: "/assets/images/portfolio/p-3.png",
//     portfolioLink: "/single-portfolio",
//     portfolioTitle: "HealthDBI",
//     portfolioText:
//       "HealthDBI is a Leads Management Platform for healthcare industry in the United States. Companies can onboard and create teams and meticulously find leads from a database of more than 1 million records.",
//   },
//   {
//     portfolioImg: "/assets/images/portfolio/p-4.png",
//     portfolioLink: "/single-portfolio",
//     portfolioTitle: "Joya",
//     portfolioText:
//       "Joya is one of the top companies in baby food products in Thailand selling D2C through their website and getting the customers onboarded for their subscriptions.",
//   },
//   {
//     portfolioImg: "/assets/images/portfolio/p-5.png",
//     portfolioLink: "/single-portfolio",
//     portfolioTitle: "Flicksbuddy",
//     portfolioText:
//       "It is a social networking platform for Movies, TV shows and Web Series fans to connect with each other. Not only can you rate and review all that you watch, but you also get to share and discuss with your friends and the Flicksbuddy community.",
//   },
//   {
//     portfolioImg: "/assets/images/portfolio/Hiloramart.png",
//     portfolioLink: "/single-portfolio",
//     portfolioTitle: "Hilorke",
//     portfolioText:
//       "It is an e-commerce application that allows vendors to sell and advertise their items using short films/videos. Users can post their favourite short videos and purchase items through the same app. Whereas sellers can sell and show their product advertisements in between the short videos.",
//   },
// ];

const Services = () => {
  return (
    <>
      <section className="portfolio__area fix p-relative pb-20">
        <div className="portfolio__shape">
          <img
            className="portfolio-s-1"
            src="/assets/images/shape/portfolio/portfolio-s-1.png"
            alt=""
          />
          <img
            className="portfolio-s-2"
            src="/assets/images/shape/portfolio/portfolio-s-2.png"
            alt=""
          />
          <img
            className="portfolio-s-3 d-none d-sm-block"
            src="/assets/images/shape/portfolio/portfolio-s-3.png"
            alt=""
          />
          <img
            className="portfolio-s-4"
            src="/assets/images/shape/portfolio/portfolio-s-4.png"
            alt=""
          />
        </div>
        <Container>
          <Row>
            <Col xl={9}>
              <div className="portfolio__wrapper">
                <div className="portfolio__content">
                  <div className="portfolio__title">
                    <SectionTitle
                      subTitle="Portfolio"
                      titleFirst="Some of our amazing works"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="portfolio">
            {/* <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu"
                        >
                          <Tab eventKey="all" title="Show All"> */}
            <Row className="portfolio_margin">
              {PORTFOLIO_ALL?.slice(0, 6).map(
                (
                  { portfolioImg, portfolioCat, portfolioTitle, portfolioLink },
                  index
                ) => (
                  <PortfolioItem
                    key={index}
                    portfolioImg={portfolioImg}
                    portfolioCat={portfolioCat}
                    portfolioTitle={portfolioTitle}
                    portfolioLink={portfolioLink}
                  />
                )
              )}
            </Row>
            {/* </Tab>
                          <Tab eventKey="ui" title="UI/UX Design">
                            <Row className="mt-150">
                            {PORTFOLIO_UI.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="marketing" title="Marketing">
                            <Row className="mt-150">
                            {PORTFOLIO_MARKETING.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="development" title="Development">
                            <Row className="mt-150">
                            {PORTFOLIO_DEVELOPMENT.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="content" title="Content Writing">
                            <Row className="mt-150">
                            {PORTFOLIO_CONTENT.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                      </Tabs>   */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
