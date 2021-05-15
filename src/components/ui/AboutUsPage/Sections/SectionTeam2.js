import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem.js";
import Card from "../../CardElement/Card/Card";
import CardHeader from "../../CardElement/Card/CardHeader";
import CardBody from "../../CardElement/Card/CardBody.js";
import CardFooter from "../../CardElement/Card/CardFooter.js";
import Muted from "../../Muted/Muted";
import Button from "../../CustomButtons/Button";

import cardProfile1Square from "./images/SAMBHAV_JAIN.jpeg";
import cardProfile2Square from "./images/Mehul_Jain.jpeg";
import cardProfile4Square from "./images/Khush_Chandawat.jpeg";
import cardProfile6Square from "./images/Sakshi_Jain.jpeg";
import cardProfile7Square from "./images/Chetan_H.jpeg";

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
                    <h4 className={classes.cardTitle}>Sambhav Jain</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Building technical infrastructure</h6>
                    </Muted>
                    <p className={classes.description}>
                    In felis turpis, gravida vel vehicula eu, vestibulum id augue. Morbi nec pretium est. 
              Sed vel congue turpis.                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin"
                    href="https://www.linkedin.com/in/sambhav-jain-79a53513a/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    {/* <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button> */}
                    <Button justIcon simple color="facebook"
                    href="https://www.facebook.com/sambhav.jain.96/. " target="_blank">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="instagram"
                    href="https://www.instagram.com/sambhav1004/" target="_blank">
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
                    <h4 className={classes.cardTitle}>Sakshi Jain</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Building supply chain</h6>
                    </Muted>
                    <p className={classes.description}>
                    In felis turpis, gravida vel vehicula eu, vestibulum id augue. Morbi nec pretium est. 
              Sed vel congue turpis. 
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin"
                    href="https://www.linkedin.com/in/sakshi-jain-a9bb271a5" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    {/* <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button> */}
                    <Button justIcon simple color="facebook"
                    href="https://www.facebook.com/profile.php?id=100006202890563" target="_blank">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="instagram"
                    href="https://instagram.com/_sakshi____jain__?igshid=y6t7cdyg6d1b" target="_blank">
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
                    <h4 className={classes.cardTitle}>Khush Chandawat</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Building Business</h6>
                    </Muted>
                    <p className={classes.description}>
                    In felis turpis, gravida vel vehicula eu, vestibulum id augue. Morbi nec pretium est. 
              Sed vel congue turpis.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin"
                    href="https://in.linkedin.com/in/khush-chandawat-6087a2a2" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    {/* <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button> */}
                    <Button justIcon simple color="facebook"
                    href="https://www.facebook.com/khushgc" target="_blank">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="instagram"
                    href="https://instagram.com/k.chandawat?igshid=5lt7xk4da1t2" target="_blank">
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
                    <h4 className={classes.cardTitle}>Mehul Jain</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Building finance infrastructure</h6>
                    </Muted>
                    <p className={classes.description}>
                    In felis turpis, gravida vel vehicula eu, vestibulum id augue. Morbi nec pretium est. 
               Sed vel congue turpis. 
                    </p>
                  </CardBody>
                  {/* <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter> */}
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
                      <img src={cardProfile7Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile7Square})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Chetan H</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Managing operations</h6>
                    </Muted>
                    <p className={classes.description}>
                    In felis turpis, gravida vel vehicula eu, vestibulum id augue. Morbi nec pretium est. 
              Sed vel congue turpis.                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin"
                    href="https://www.linkedin.com/in/chetan-h-8427b173" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    {/* <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button> */}
                    <Button justIcon simple color="facebook"
                    href="https://www.facebook.com/chetan.hiriyanna" target="_blank">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="instagram"
                    href="https://instagram.com/chetanhiriyanna?igshid=uc0n0vv8h84x" target="_blank">
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
