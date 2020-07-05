import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Contact from "../components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: "100%",
  },
  gridRoot: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  contactContainer: {
    display: "flex",
  },
  contact: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  underline: {
    textDecoration: "underline",
  },
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridRoot} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="center">
            Need an interactive website or web application?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.contactContainer}>
            <div className={classes.contact}>
              <Contact>
                <Typography className={classes.underline} variant="h3">
                  <b>Contact Me!</b>
                </Typography>
              </Contact>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactMe;
