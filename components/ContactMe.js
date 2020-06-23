import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    background: "#FFFFFF",
    width: "100%",
  },
  gridRoot: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridRoot} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" align="center">
            Need an interactive website or web application?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" align="center">
            Contact Me!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactMe;
