import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  appBar: {
    backgroundImage: "linear-gradient(to top, black, purple)",
  }
});
export function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="black"
            >
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
