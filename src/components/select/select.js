import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { BemPrefix } from "../../utils/bem";

import "./select.scss";

const bem = BemPrefix("select");

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
  },
}));

export function ControlledOpenSelect({ setPokemonPerPage }) {
  const classes = useStyles();
  const [item, setItem] = React.useState("10");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setItem(event.target.value);
    setPokemonPerPage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={bem()}>
      <FormControl className={classes.formControl}>
        Pokemons per page
        <InputLabel id="demo-controlled-open-select-label"></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={item}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
