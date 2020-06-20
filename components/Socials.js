import { SvgYoutube, SvgTwitter, SvgGithub } from "../icons/icons";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Socials = () => {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <SvgGithub size="2x" />
      </Grid>
      <Grid item>
        <SvgYoutube size="2x" />
      </Grid>
      <Grid item>
        <SvgTwitter size="2x" />
      </Grid>
    </Grid>
  );
};

export default Socials;
