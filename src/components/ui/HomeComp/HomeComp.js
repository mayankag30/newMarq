/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "../Header/Header";
// import GridContainer from "../Grid/GridContainer";
// import GridItem from "../Grid/GridItem";
// import Parallax from "../Parallax/Parallax";
// import Footer from "../Footer/";
// sections for this page
// import HeaderLinks from "../Header/HeaderLinks";
// import Navbar from "../Header/Navigation";
// import SectionDescription from "./Sections/SectionDescription.js";
// import SectionTeam from "./Sections/SectionTeam";
// import SectionTeam from "./Sections/SectionTeam2";
// import SectionServices from "./Sections/SectionServices.js";
// import SectionOffice from "./Sections/SectionOffice.js";
// import ResponsivePlayer from "../VideoPlayer/ResponsivePlayer";
import SectionContact from "../AboutUsPage/Sections/SectionContact";

import aboutUsStyle from "../AboutUsPage/aboutUsStyle";

const useStyles = makeStyles(aboutUsStyle);

export default function HomeComp() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionContact />
        </div>
      </div>
    </div>
  );
}
