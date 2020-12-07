import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from '@material-ui/icons/Lock';
import Phone from '@material-ui/icons/Phone';
// core components
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";

import styles from "../../../assets/jss/material-kit-react/views/loginPage.js";

import ImgBg from "../../../assets/images/bg.png";

const useStyles = makeStyles(styles);

export default function ProductPage(props) {
  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const history = useHistory();

  const [id, setId] = React.useState(null);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [imageUri, setUrl] = React.useState('');
  const [categoryId, setCategory] = React.useState('');

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  
  const { ...rest } = props;

  const handleSubmit = () => {
    if(!id) {
      toast.error('Preencha os campos obrigatórios * para efetuar cadastro!!!');
      return;
    }

    Axios.delete(`${process.env.REACT_APP_API_HOST}/product/${id}`)
    .then(response => {
        toast.success('Produto deletado com sucesso!!!');
    })
    .catch(error => {
       toast.error('Erro ao cadastrar produto!!!');
    })
    
  }
  
  return (
    <div>
      <ToastContainer />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + ImgBg + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="custom" className={classes.cardHeader}>
                    <h4>DELETAR PRODUTO</h4>
                  </CardHeader>
                  <p className={classes.divider}>Preencha os campos abaixo:</p>
                  <CardBody>
                  <CustomInput
                        labelText="Id do Produto"
                        id="id"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "number",
                            onChange: (event) => setId(event.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <People className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="customBlue" size="lg" onClick={handleSubmit}>
                      Deletar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
