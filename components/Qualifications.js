import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import {
  SvgJavascript,
  SvgNextjs,
  SvgRedux,
  SvgMaterialui,
  SvgMongodb,
  SvgHtml5,
  SvgCss,
  SvgNodeJs,
  SvgReact
} from "../icons/icons";

const useStyles = makeStyles(theme => ({
  root: {
    background: "black"
  },
  entry: {
    display: "flex",
    flexDirection: "column"
  },
  icon: {
    margin: "auto"
  }
}));

const Qualifications = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden xsDown>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography align="center">Tools of Choice</Typography>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">Javascript</Typography>
              <SvgJavascript className={classes.icon} size="5x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">HTML5</Typography>
              <SvgHtml5 className={classes.icon} size="5x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">CSS</Typography>
              <SvgCss className={classes.icon} size="5x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">NodeJS</Typography>
              <SvgNodeJs className={classes.icon} size="5x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">NextJS</Typography>
              <SvgNextjs className={classes.icon} height="55px" width="55px" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">React</Typography>
              <SvgReact className={classes.icon} size="5x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">Redux</Typography>
              <SvgRedux className={classes.icon} height="55px" width="55px" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">MongoDB</Typography>
              <SvgMongodb className={classes.icon} height="55px" width="55px" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">Material-UI</Typography>
              <SvgMaterialui
                className={classes.icon}
                height="55px"
                width="55px"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">Other Technologies</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">FireBase</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">PostgreSQL</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Command Line</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">C#</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Unity</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Socket.IO</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Rollbar</Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography align="center">Tools of Choice</Typography>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">Javascript</Typography>
              <SvgJavascript className={classes.icon} size="2x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">HTML5</Typography>
              <SvgHtml5 className={classes.icon} size="2x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">CSS</Typography>
              <SvgCss className={classes.icon} size="2x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">NodeJS</Typography>
              <SvgNodeJs className={classes.icon} size="2x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">NextJS</Typography>
              <SvgNextjs className={classes.icon} height="23px" width="23px" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">React</Typography>
              <SvgReact className={classes.icon} size="2x" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">Redux</Typography>
              <SvgRedux className={classes.icon} height="23px" width="23px" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">MongoDB</Typography>
              <SvgMongodb className={classes.icon} height="23px" width="23px" />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.entry}>
              <Typography align="center">Material-UI</Typography>
              <SvgMaterialui
                className={classes.icon}
                height="23px"
                width="23px"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">Other Technologies</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">FireBase</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">PostgreSQL</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Command Line</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">C#</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Unity</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Socket.IO</Typography>
          </Grid>
          <Grid item>
            <Typography align="center">Rollbar</Typography>
          </Grid>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default Qualifications;
