/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AccountCircle, AddCircle } from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Ola, Gabriel
        </Button>
        <Button
          href="/profile"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AccountCircle className={classes.icons} /> Perfil
        </Button>
      </ListItem>
    </List>
  );
}
