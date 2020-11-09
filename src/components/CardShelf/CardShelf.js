import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import Button from "../CustomButtons/Button.js";

import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "../../assets/jss/material-kit-react.js";

import imgShelf from '../../assets/images/temp/game.jpeg';

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards(props) {

  const { img, title, description } = props;

  const classes = useStyles();
  return (
    <Card style={{width: "100%"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={img}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{title}</h4>
        <p>{description}</p>
        <Button color="danger">Comprar</Button>
      </CardBody>
    </Card>
  );
}