import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Gesture from "@material-ui/icons/Gesture";
// import Build from "@material-ui/icons/Build";
// import EditIcon from "@material-ui/icons/Edit";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
// core components
import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import InfoArea from "../../InfoArea/InfoArea";

import servicesStyle from "./aboutUsSections/servicesStyle";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>HOW IT WORKS</h2>
          {/* <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5> */}
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. ORDER"
            description={
              <span>
                <p style={{ textAlign: "left" }}>
                  You send us your Order Type, Quantity and Preferred
                  Store(optional) on WhatsApp.{" "}
                </p>
                {/* <a href="#pablo">Find more...</a> */}
              </span>
            }
            icon={PhoneIphoneIcon}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. COLLECT"
            description={
              <span>
                <p style={{ textAlign: "left" }}>
                  We enquire the availability nearby and price and confirm the
                  availability and prices with you.{" "}
                </p>
                {/* <a href="#pablo">Find more...</a> */}
              </span>
            }
            icon={DirectionsWalkIcon}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. DELIVER"
            description={
              <span>
                <p style={{ textAlign: "left" }}>
                  Our Delivery Partner picks up your and quickly tries to reach
                  your preferred location dressed in his safety kit and
                  sanitizes the deliverable on doorstep to ensure the maximum
                  protection.{" "}
                </p>
                {/* <a href="#pablo">Find more...</a> */}
              </span>
            }
            icon={MarkunreadMailboxIcon}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
