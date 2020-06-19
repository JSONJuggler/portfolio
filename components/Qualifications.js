import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
  SvgReact,
} from "../icons/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFFFF",
  },
  entry: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    margin: "auto",
  },
}));

const Qualifications = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <Container maxWidth="sm">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
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
                <SvgRedux className={classes.icon} height="55px" width="55px" />
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
          </Grid>
        </Container>
      </Hidden>
      <Hidden smUp>
        <Container maxWidth="sm">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Tools of Choice
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  Javascript
                </Typography>
                <SvgJavascript className={classes.icon} size="2x" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  HTML5
                </Typography>
                <SvgHtml5 className={classes.icon} size="2x" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  CSS
                </Typography>
                <SvgCss className={classes.icon} size="2x" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  NodeJS
                </Typography>
                <SvgNodeJs className={classes.icon} size="2x" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  NextJS
                </Typography>
                <SvgNextjs
                  className={classes.icon}
                  height="25px"
                  width="40px"
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  React
                </Typography>
                <SvgReact className={classes.icon} size="2x" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  Redux
                </Typography>
                <SvgRedux className={classes.icon} height="23px" width="23px" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.entry}>
                <Typography variant="subtitle1" align="center">
                  MongoDB
                </Typography>
                <SvgMongodb
                  className={classes.icon}
                  height="20px"
                  width="60px"
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
                  height="23px"
                  width="23px"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Other Technologies
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            Express
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            Heroku
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            FireBase
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            PostgreSQL
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            Command Line
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            Socket.IO
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            Rollbar
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            C#
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            Unity
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Qualifications;
