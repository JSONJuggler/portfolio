import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import Grow from "@material-ui/core/Grow";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Copyright from "./Copyright";
import { numOfTranslations } from "../src/actions/translations";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "auto",
    marginBottom: theme.spacing(2)
  }
}));

const Footer = ({ numOfTranslations, translations: { numTrans } }) => {
  const classes = useStyles();

  const router = useRouter();

  const [routeChange, setRouteChange] = useState(true);
  const [grow, setGrow] = useState(false);

  const handleRouteChangeComplete = url => {
    setRouteChange(prev => true);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  useEffect(() => {
    if (routeChange) {
      numOfTranslations();
      setRouteChange(prev => false);
    }
  }, [routeChange]);

  useEffect(() => {
    if (numTrans) {
      setGrow(prev => true);
    }
  }, [numTrans]);

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <Grow in={grow} timeout={2000}>
              <Typography color="textSecondary">
                Total number of translations available: {numTrans}
              </Typography>
            </Grow>
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

// Footer.propTypes = {
//   rollbar: PropTypes.object.isRequired
// };

Footer.propTypes = {
  numOfTranslations: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  translations: state.translations
});

export default connect(mapStateToProps, { numOfTranslations })(Footer);
