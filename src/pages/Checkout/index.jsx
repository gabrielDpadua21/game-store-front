import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Payment from '@material-ui/icons/Payment';
import Done from '@material-ui/icons/Done';
// core components
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";


// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

// core components
import Header from "../../components/HeaderLogged/Header.js";
import Footer from "../../components/Footer/Footer.js";
import HeaderLinks from "../../components/HeaderLogged/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

const styles = {
  textCenter: {
    textAlign: "center"
  }
};

const useStyles = makeStyles(styles);

export default function Tabs(props){
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
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
      <div>
      <CustomTabs
        headerColor="custom"
        tabs={[
          {
            tabName: "Produtos",
            tabIcon: AddShoppingCart,
            tabContent: (
              <p className={classes.textCenter}>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. So when you get something that has
                the name Kanye West on it, it’s supposed to be pushing
                the furthest possibilities. I will be the leader of a
                company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am
                the nucleus.
              </p>
            )
          },
          {
            tabName: "Pagamento",
            tabIcon: Payment,
            tabContent: (
              <p className={classes.textCenter}>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. I will be the leader of a company
                that ends up being worth billions of dollars, because
                I got the answers. I understand culture. I am the
                nucleus. I think that’s a responsibility that I have,
                to push possibilities, to show people, this is the
                level that things could be at.
              </p>
            )
          },
          {
            tabName: "Finalizacao",
            tabIcon: Done,
            tabContent: (
              <p className={classes.textCenter}>
                think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. So when you get something that has
                the name Kanye West on it, it’s supposed to be pushing
                the furthest possibilities. I will be the leader of a
                company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am
                the nucleus.
              </p>
            )
          }
        ]}
      />
    </div>
      <Footer />
    </div>
  );
};

