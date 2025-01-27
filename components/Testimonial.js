import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIAL_DATA = [
  {
    clientLogo: "/assets/images/testimonials/client-logo/google.png",
    clientText:
      "Team Kylo has been highly available, they have low latency with failover policy. Also, they are very responsive and ready to fix any type of application issues. They delivered an amazing application to us.",
    clientImg: "/assets/images/testimonials/t-client-1.png",
    clientName: "Bhanu Pasyavula",
    clientPosition: "Founder",
    company: "Rentout",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/payoneer.png",
    clientText:
      "Understanding the customer requirement with pinpoint accuracy is something that Kylo strives for. The flexibility with which the team operates and cooperates really helps us in banking on the team at ease.They put in great effort to make us understand the complexities and helped us feel comfortable with their customer centric approach and interaction.",
    clientImg: "/assets/images/testimonials/t-client-2.png",
    clientName: "Bharath Aditya",
    clientPosition: "Managing Director",
    company: "Active Solutions",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/instagram.png",
    clientText:
      "Being a start-up, we were looking for a team who can  develop the perfect product from our thoughts and guide us in kickoff. It's really appreciative that the Kylo team was innovative to give us a product better than our expectations. Their biggest strength is their pricing which is unbeatable in the market. Kudos to their flexibility!",
    clientImg: "/assets/images/testimonials/t-client-3.png",
    clientName: "Manideep Mittapeli",
    clientPosition: "Founder",
    company: "Heybuddy",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/instagram.png",
    clientText:
      "Kylo Apps is wonderful for developing applications. They supported as per our requirements and made an innovative app which exceeded our expectations. All their team members were very cooperative and responsive",
    clientImg: "/assets/images/testimonials/t-client-3.png",
    clientName: "Sumeet Jain",
    clientPosition: "Founder",
    company: "Stelo",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/joytshi.png",
    clientText:
      "Kylo Apps fulfilled all our requirements efficiently. They continuously roll out new features that help scale our business. Our customers are very satisfied with the website Kylo Apps made for us.",
    clientImg: "/assets/images/testimonials/jyotishiVP.jpg",
    clientName: "Krishna K. Pidaparthy",
    clientPosition: "Founder",
    company: "Jyotishi",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/corp86Logo.png",
    clientText:
      "It was a pleasure working with Kylo Apps. The passion and professionalism they showcased was exceptional. They worked on our dream project as if it was their own.",
    clientImg: "/assets/images/testimonials/corp86Founder.jpg",
    clientName: "Vineet Jain",
    clientPosition: "Founder",
    company: "Corp86",
  },
  {
    clientLogo: "/assets/images/testimonials/client-logo/ubpLogo.png",
    clientText:
      "Kylo Apps offers one of the best software we have come across. The interface is user friendly, which is very easy to operate. It also provides us with excellent data analysis, which allows us to manage our operations conveniently.",
    clientImg: "/assets/images/testimonials/ubpFounder.png",
    clientName: "Kartik Gabra",
    clientPosition: "Founder",
    company: "UBP",
  },
];

const Testimonial = ({ testimonialArea, paddingTop }) => {
  return (
    <section
      className={`${testimonialArea} fix p-relative ${paddingTop} pb-120`}
    >
      <div className="testimonials__shape">
        <img
          className="t-shape-1 d-none d-sm-block"
          src="/assets/images/shape/testimonials/t-shape-1.png"
          alt=""
        />
        <img
          className="t-shape-2"
          src="/assets/images/shape/testimonials/t-shape-2.png"
          alt=""
        />
        <img
          className="t-shape-3"
          src="/assets/images/shape/testimonials/t-shape-3.png"
          alt=""
        />
        {/* <img className="t-shape-4" src="/assets/images/shape/testimonials/t-shape-4.png" alt=""/> */}
        <img
          className="t-shape-5 d-none d-lg-block"
          src="/assets/images/shape/testimonials/t-shape-5.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-65">
          <Col xl={12}>
            <div className="testimonials__title text-center">
              <SectionTitle
                subTitle="Testimonials"
                titleFirst="What our clients say"
              />
              <p>
                We go above and beyond for customer satisfaction. Happy clients
                inspire us to work harder each time.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={"auto"}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
            >
              {TESTIMONIAL_DATA.map(
                (
                  {
                    clientLogo,
                    clientText,
                    clientImg,
                    clientName,
                    clientPosition,
                    company,
                  },
                  index
                ) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard
                      clientLogo={clientLogo}
                      clientText={clientText}
                      clientImg={clientImg}
                      clientName={clientName}
                      clientPosition={clientPosition}
                      company={company}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div className="swiper-pagination"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
