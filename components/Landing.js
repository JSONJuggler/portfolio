import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh"
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      My name is Beau and I love building interesting things for the web and
      beyond!
    </div>
  );
};

export default Landing;
