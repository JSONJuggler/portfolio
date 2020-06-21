import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    background: "#FFFFFF",
  },
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4} alignItems="center">
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
  );
};

export default ContactMe;
