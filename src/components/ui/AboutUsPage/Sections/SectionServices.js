import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import EditIcon from "@material-ui/icons/Edit";
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
          <h2 className={classes.title}>We build awesome products</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Design"
            description={
              <span>
                <p style={{ textAlign: "left" }}>
                  The moment you use Material Kit, you know you’ve never felt
                  anything like it. With a single use, this powerfull UI Kit
                  lets you do more than ever before.{" "}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Develop"
            description={
              <span>
                <p style={{ textAlign: "left" }}>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.{" "}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Make Edits"
            description={
              <span>
                <p style={{ textAlign: "left" }}>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.{" "}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
            }
            icon={EditIcon}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
