import React from "react";
// react component for creating beautiful carousel
// import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";
// import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "../ui/Grid/GridContainer";
import GridItem from "../ui/Grid/GridItem.js";
import Card from "../ui/CardElement/Card/Card";
import CardBody from "../ui/CardElement/Card/CardBody.js";
import CardFooter from "../ui/CardElement/Card/CardFooter.js";
import CardAvatar from "../ui/CardElement/Card/CardAvatar.js";
// import Muted from "../ui/Muted/Muted";
// import Warning from "./Warning";

import testimonialsStyle from "./testimonialsStyle";

import dg2 from "./images/dg2.jpg";
import cardProfile1Square from "../ui/AboutUsPage/Sections/images/card-profile1-square.jpg";
import cardProfile2Square from "../ui/AboutUsPage/Sections/images/card-profile2-square.jpg";
import cardProfile4Square from "../ui/AboutUsPage/Sections/images/card-profile4-square.jpg";
import defaultImg from "./images/default.jpg";
// import cardProfile6Square from "../ui/AboutUsPage/Sections/images/card-profile6-square.jpg";
// import kendall from "./images/kendall.jpg";
// import christian from "./images/christian.jpg";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Testimonials 1 START */}
      <div
        className={classes.testimonials + " " + classes.sectionImage}
        style={{ backgroundImage: `url(${dg2})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our Clients Love Us</h2>
              {/* <h5 className={classes.description}>
                You need more information? Check what other persons are saying
                about our product. They are very happy with their purchase.
              </h5> */}
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    Thanks Khush and Team for delivering the phone so fast..
                    Giving 5 stars for your service.
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Rakesh Jain</h4>
                  {/* <h6 className={classes.cardCategory}>@ALECTHOMPSON</h6> */}
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={defaultImg} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    The delivery was Instant Perfect
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Pinky Jain</h4>
                  {/* <h6 className={classes.cardCategory}>@GINAANDREW</h6> */}
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={defaultImg} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    Initially we were hesitating to order as the order was bare
                    minimum in quantity but Team Marquedo didn't hesitate to
                    deliver the smallest of orders.
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Dinesh Chopra</h4>
                  {/* <h6 className={classes.cardCategory}>@GEORGEWEST</h6> */}
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={defaultImg} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 1 END */}
    </div>
  );
}
