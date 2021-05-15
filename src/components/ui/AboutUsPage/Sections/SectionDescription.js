import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "./aboutUsSections/descriptionStyle";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
          The COVID-19 pandemic may be one of the greatest modern societal challenges that requires widespread collective active and cooperation.
          We at Marquedo introduce Free Deliveries From any Shop any store dealing with Essentials nearby without the Hassle of you standing in Long Queues and maintian the safety and Hygiene.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
