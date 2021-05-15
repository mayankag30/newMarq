/*eslint-disable*/ import React from "react";
import {Link as ScrollL} from "react-scroll";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "../ui/Header/Header";
// import Footer from "../ui/Footer/Footer";
import GridContainer from "../ui/Grid/GridContainer";
import GridItem from "../ui/Grid/GridItem";
import Button from "../ui/CustomButtons/Button";
// import HeaderLinks from "../ui/Header/HeaderLinks";
import Parallax from "../ui/Parallax/Parallax";
import SectionContacts from "../ui/ContactUs/ContactUs";

import landingPageStyle from "./landingPageStyle";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct";
import SectionTeam from "./Sections/SectionTeam2";
import SectionWork from "./Sections/SectionWork";

const useStyles = makeStyles(landingPageStyle);
import QR from "../../assets/images/qr.jpeg";

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      {/* <Header
        color="transparent"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
        {...rest}
      /> */}
      
      <Parallax image={require("./bg8.jpg")} filter="dark">
        
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <h1 className={classes.title}>MARQUEDO</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              {/* <ScrollL activeClass="active" to="playersection" spy={true} smooth={true} duration={1000}>scroll</ScrollL> */}
              <Button
                color="danger"
                size="lg"
                // href="/about/:playersection"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
              </GridItem>
              <br />
              <GridItem xs={12} sm={6} md={6} >
              <div style={{textAlign:"center"}}><h7>Scan the QR code and<br></br> WhatsApp us a {"'"}Hi{"'"} today</h7></div>           
              <br /><div style={{textAlign:"center"}}><img src={QR} style={{justifyContent:"center"}}></img></div>
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          {/* <SectionTeam /> */}
          {/* <SectionWork /> */}
          <SectionContacts />
        </div>
      </div>
      {/* <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com/?ref=mkpr-landing"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      /> */}
    </div>
  );
}
