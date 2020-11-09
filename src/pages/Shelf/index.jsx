import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/HeaderLogged/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/HeaderLogged/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import CardShelf from "../../components/CardShelf/CardShelf.js";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

const useStyles = makeStyles(styles);

export default function ShelfPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={LogoHorizontal}
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../assets/images/bg.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <CardShelf />
              </GridItem>

            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
