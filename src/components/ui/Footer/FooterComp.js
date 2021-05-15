import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "./Footer";
import style from "./footerStyle2";

const useStyles = makeStyles(style);

export default function SectionFooter() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <NavLink
                  to="/"
                  style={{ fontSize: "1.3rem" }}
                  className={classes.footerBrand}
                >
                  MARQUEDO
                </NavLink>
              </div>
              <div className={classes.pullCenter}>
                {/* <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>

                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablito"
                      onClick={(e) => e.preventDefault()}
                      className={classes.block}
                    >
                      Payment
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/contact-us"
                      className={classes.block}
                    >
                      Contact us
                    </a>
                  </ListItem>
                </List> */}
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <a href="https://twitter.com/">
                      <i
                        className={
                          "fab fa-twitter" +
                          " " +
                          classes.iconSocial +
                          " " +
                          classes.btnTwitter
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <i
                        className={
                          "fab fa-linkedin-in" +
                          " " +
                          classes.iconSocial +
                          " " +
                          classes.btnDribbble
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i
                        className={
                          "fab fa-instagram" +
                          " " +
                          classes.iconSocial +
                          " " +
                          classes.btnInstagram
                        }
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
