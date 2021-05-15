import React from "react";
// react components used to create a google map
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
// import PinDrop from "@material-ui/icons/PinDrop";
// import Phone from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import InfoArea from "../InfoArea/InfoArea";
import Card from "../CardElement/Card/Card";
import CardHeader from "../CardElement/Card/CardHeader.js";
import CardBody from "../CardElement/Card/CardBody.js";
import CardFooter from "../CardElement/Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import QR from "../../../assets/images/qr.jpeg";

import contactsStyle from "./contactsStyle";

import city from "./city.jpg";

const useStyles = makeStyles(contactsStyle);

// const RegularMap = withScriptjs(
//   withGoogleMap(() => (
//     <GoogleMap
//       defaultZoom={14}
//       defaultCenter={{ lat: 44.43353, lng: 26.093928 - 0.025 }}
//       defaultOptions={{
//         scrollwheel: false,
//         zoomControl: true,
//         styles: [
//           {
//             featureType: "water",
//             stylers: [
//               { saturation: 43 },
//               { lightness: -11 },
//               { hue: "#0088ff" }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.fill",
//             stylers: [
//               { hue: "#ff0000" },
//               { saturation: -100 },
//               { lightness: 99 }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#808080" }, { lightness: 54 }]
//           },
//           {
//             featureType: "landscape.man_made",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ece2d9" }]
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ccdca1" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#767676" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.stroke",
//             stylers: [{ color: "#ffffff" }]
//           },
//           { featureType: "poi", stylers: [{ visibility: "off" }] },
//           {
//             featureType: "landscape.natural",
//             elementType: "geometry.fill",
//             stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
//           },
//           { featureType: "poi.park", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.sports_complex",
//             stylers: [{ visibility: "on" }]
//           },
//           { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.business",
//             stylers: [{ visibility: "simplified" }]
//           }
//         ]
//       }}
//     >
//       <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
//     </GoogleMap>
//   ))
// );

export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Connect With Us</h2>
              <h5 style={{ textAlign: "left" }} className={classes.description}>
                {" "}
                You need more information?
              </h5>
              {/* <InfoArea
                className={classes.infoArea}
                title="Find us at the office"
                description={
                  <span>
                    Bld Mihail Kogalniceanu, nr. 8,
                    <br /> 7652 Bucharest,
                    <br /> Romania
                  </span>
                }
                icon={PinDrop}
              /> */}
              <InfoArea
                className={classes.infoArea}
                title="WhatsApp us a 'Hi' today on"
                description={
                  <span>
                    +91 7760168711
                    <br /> +91 7760168712
                    <br /> Mon - Sun, 06:00-10:00
                  </span>
                }
                icon={WhatsAppIcon}
              />
              </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div style={{textAlign:"center"}}><img src={QR}></img></div>
              <h5 style={{color:"#ffffff",fontSize:"1.5em", textWeight:"1000", fontFamily:"TimesNewRoman"}}>Scan the QR code</h5>
            </GridItem>
            {/*<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card style={{ marginRight: "30px" }} className={classes.card1}>
                <form>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Contact Us</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="First Name"
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="last"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    {/* <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm not a robot"
                    /> 
                    <Button color="primary" className={classes.pullRight}>
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>*/}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
