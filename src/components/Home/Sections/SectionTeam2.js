import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../../ui/Grid/GridContainer";
import GridItem from "../../ui/Grid/GridItem.js";
import Card from "../../ui/CardElement/Card/Card";
import CardHeader from "../../ui/CardElement/Card/CardHeader.js";
import CardBody from "../../ui/CardElement/Card/CardBody.js";
import CardFooter from "../../ui/CardElement/Card/CardFooter.js";
import Muted from "../../ui/Muted/Muted";
import Button from "../../ui/CustomButtons/Button";

import cardProfile1Square from "../../ui/AboutUsPage/Sections/images/card-profile1-square.jpg";
import cardProfile2Square from "../../ui/AboutUsPage/Sections/images/card-profile2-square.jpg";
import cardProfile4Square from "../../ui/AboutUsPage/Sections/images/card-profile4-square.jpg";
import cardProfile6Square from "../../ui/AboutUsPage/Sections/images/card-profile6-square.jpg";

import teamsStyle from "./teamsStyle";
import teamStyle from "./teamStyle";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center",
  },
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile1Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile1Square})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>FOUNDER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile6Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile6Square})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>GRAPHIC DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile4Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile4Square})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Gina Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of
                      the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile2Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile2Square})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>George West</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of
                      the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
