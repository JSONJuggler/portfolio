import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  about: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  bodyDetails: {
    lineHeight: theme.spacing(0.3),
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <Fade timeout={1000} in={true}>
      <Container maxWidth="md">
        <div className={classes.root}>
          <div className={classes.about}>
            <Typography variant="h4" gutterBottom>
              <b>Hey! Looking for my blog?</b>
            </Typography>
            <Typography
              className={classes.bodyDetails}
              variant="h5"
              paragraph
              gutterBottom
            >
              Check back later, it isn't avaible yet!
            </Typography>
          </div>
        </div>
      </Container>
    </Fade>
  );
};

export default Blog;
