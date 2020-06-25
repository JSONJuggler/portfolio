import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { openContact, closeContact } from "../src/actions/contact";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  textField: {
    background: "white",
  },
}));

const ContactBackdrop = ({
  contact: { contactOpen },
  openContact,
  closeContact,
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    closeContact();
  };

  return (
    <Backdrop className={classes.backdrop} open={contactOpen}>
      <Container maxWidth="sm">
        <form>
          <Grid container justify="center">
            <Grid item className={classes.gridItem} xs={6}>
              <TextField
                className={classes.textField}
                required
                id="name"
                label="Name"
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={6}>
              <TextField
                className={classes.textField}
                required
                id="contact"
                label="Contact/Email"
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                required
                id="message"
                label="Message"
                variant="filled"
                fullWidth
                multiline
                rows={14}
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={6}>
              <Button variant="contained" fullWidth color="primary">
                Submit
              </Button>
            </Grid>
            <Grid item className={classes.gridItem} xs={6}>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Backdrop>
  );
};

ContactBackdrop.propTypes = {
  contact: PropTypes.object.isRequired,
  openContact: PropTypes.func.isRequired,
  closeContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { openContact, closeContact })(
  ContactBackdrop
);
