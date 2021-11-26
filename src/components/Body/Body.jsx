import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Body.css";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15%",
  },
  titulo: {
  },
  backGround: {
      backgroundImage: "linear-gradient(rgba(255,255,255, 1), rgba(183, 107, 237, 0.7))",
      padding: "10px",
      borderRadius: "4px",
      marginBottom: "2px",
  },
  botaoCadastrar: {
    backgroundImage: "linear-gradient(to bottom right, white, purple)",
    width: "50%",
  },
});

export function Body() {
  const classes = useStyles();
  return (
    <div align="center" className={classes.root}>
      <Typography variant="h3" className="titulo">
        Bem-Vindo à Smart Company
      </Typography>
      <div className={classes.backGround}>
      <TextField variant="filled" fullWidth margin="normal" label="Nome" />
        <TextField
          variant="filled"
          fullWidth
          margin="normal"
          label="email"
          type="email"
        />
        <TextField
          variant="filled"
          fullWidth
          margin="normal"
          label="Senha"
          type="password"
        />
        <TextField
          variant="filled"
          fullWidth
          margin="normal"
          label="Confirmar Senha"
          type="password"
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="default" />}
            label="Receber novidades"
          />
          <FormControlLabel
            control={<Checkbox color="default" />}
            label="Concordo que li e aceito os termos de compromisso"
          />
        </FormGroup>
      </div>
      <div align="center">
        <Button className={classes.botaoCadastrar} variant="contained">
          Cadastrar
        </Button>
      </div>
    </div>
  );
}
