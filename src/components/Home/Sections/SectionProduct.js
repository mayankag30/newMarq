import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AllInboxIcon from "@material-ui/icons/AllInbox";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../ui/Grid/GridContainer";
import GridItem from "../../ui/Grid/GridItem.js";
import InfoArea from "../../ui/InfoArea/InfoArea";

import productStyle from "./productStyle";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            We deliver you all the essentials nearby your place be it anything we hunt it and get it delivered to you at NO COST.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Free Chat"
              description="No more standing in Long Queues in this time of pandemic, Leave the task to us by placing your orders online and we collect required products for you"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="DoorStep Sanitization"
              description="The Strand is spreading through air, the virus does not differntiate between you and us. Hence we make it a duty to sanitize the deliverables on doorstep to ensure maximum safety"
              icon={MeetingRoomIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Quick Delivery"
              description="We make sure the items reaches immediately to you after the moment you place your order"
              icon={AllInboxIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
