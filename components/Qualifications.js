import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Fade from "@material-ui/core/Fade";
import VisibilitySensor from "react-visibility-sensor";
import {
  SvgJavascript,
  SvgNextjs,
  SvgRedux,
  SvgMaterialui,
  SvgMongodb,
  SvgHtml5,
  SvgCss,
  SvgNodeJs,
  SvgReact,
} from "../icons/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: "100%",
  },
  entry: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    margin: "auto",
  },
}));

const Qualifications = () => {
  const classes = useStyles();

  const [qual, setQual] = useState(false);

  function onChange(isVisible) {
    console.log("Element is now %s", isVisible ? "visible" : "hidden");
    if (isVisible) {
      setQual((prev) => true);
    }
    if (!isVisible) {
      setQual((prev) => false);
    }
  }
  console.log(qual);
  return (
    <VisibilitySensor
      offset={{ top: 400 }}
      minTopValue={300}
      partialVisibility
      onChange={onChange}
    >
      <Fade timeout={1000} in={qual}>
        <div className={classes.root}>
          <Container maxWidth="sm">
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h2" align="center">
                  Tools of Choice
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    Javascript
                  </Typography>
                  <SvgJavascript className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    HTML5
                  </Typography>
                  <SvgHtml5 className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    CSS
                  </Typography>
                  <SvgCss className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    React
                  </Typography>
                  <SvgReact className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    Redux
                  </Typography>
                  <SvgRedux
                    className={classes.icon}
                    height="55px"
                    width="55px"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    Material-UI
                  </Typography>
                  <SvgMaterialui
                    className={classes.icon}
                    height="55px"
                    width="55px"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    NodeJS
                  </Typography>
                  <SvgNodeJs className={classes.icon} size="5x" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    NextJS
                  </Typography>
                  <SvgNextjs
                    className={classes.icon}
                    height="50px"
                    width="80px"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.entry}>
                  <Typography variant="subtitle1" align="center">
                    MongoDB
                  </Typography>
                  <SvgMongodb
                    className={classes.icon}
                    height="40px"
                    width="80px"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    </VisibilitySensor>
  );
};

export default Qualifications;
