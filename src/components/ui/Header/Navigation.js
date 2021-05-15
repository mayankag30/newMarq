import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Search from "@material-ui/icons/Search";
// import Email from "@material-ui/icons/Email";
// import Face from "@material-ui/icons/Face";
// import Settings from "@material-ui/icons/Settings";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Explore from "@material-ui/icons/Explore";
// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import Header from "./Header.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button";

import navbarsStyle from "./navbarsStyle.js";

// import image from "assets/img/bg.jpg";
// import profileImage from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(navbarsStyle);

const Navbar = () => {
  const classes = useStyles();
  return (
    <Header
      brand="MARQUEDO"
      color="dark"
      links={
        <List className={classes.list + " " + classes.mlAuto}>
          <ListItem className={classes.listItem}>
            <Link
              to="/about"
              className={classes.navLink}
              // onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              ABOUT US
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              to="/home"
              className={classes.navLink}
              // onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              SIGN IN
            </Link>
          </ListItem>
        </List>
      }
      fixed
      color="transparent"
      changeColorOnScroll={{
        height: 300,
        color: "dark",
      }}
    />
  );
};

export default Navbar;
