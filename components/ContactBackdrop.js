import { useState, useRef, Fragment } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import {
  openContact,
  closeContact,
  updateContactInfo,
  clearContactInfo,
} from "../src/actions/contact";

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
  underline: {
    textDecoration: "underline",
    color: "white",
  },
  hidden: {
    visibility: "visible",
    position: "absolute",
    top: theme.spacing(-100),
  },
}));

const ContactBackdrop = ({
  contact: { contactOpen, name, contact, message },
  openContact,
  closeContact,
  updateContactInfo,
  clearContactInfo,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const email = useRef(null);

  const handleSubmit = () => {
    window.location.assign(
      "mailto:deleon.reescano@ricealumni.net?subject=Hello Beau!&body=Hey Beau, %0D%0A%0D%0A I am " +
        encodeURIComponent(name) +
        " and I can be reached at " +
        encodeURIComponent(contact) +
        ". %0D%0A%0D%0A " +
        encodeURIComponent(message)
    );
    handleClose();
  };

  const handleChange = (e) => {
    updateContactInfo({
      ...{ name, contact, message },
      [e.target.id]: e.target.value,
    });
  };

  const handleClose = () => {
    clearContactInfo();
    closeContact();
    email.current.type = "hidden";
  };

  const handleCopy = (e) => {
    if (email.current.type === "hidden") {
      email.current.type = "text";
      handleCopy();
    } else {
      email.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <Backdrop className={classes.backdrop} open={contactOpen}>
      <Container maxWidth="sm">
        <form>
          <Grid container justify="center">
            <Grid item className={classes.gridItem} xs={12}>
              <Typography align="center">
                <b>Please enter your information below to send me an email!</b>
              </Typography>
              <Fragment>
                <IconButton onClick={handleCopy}>
                  <Typography className={classes.underline} align="center">
                    Or click here to copy my email address:
                    deleon.reescano@ricealumni.net
                  </Typography>
                </IconButton>
                <input
                  ref={email}
                  type="hidden"
                  readOnly={true}
                  className={classes.hidden}
                  value="deleon.reescano@ricealumni.net"
                />
              </Fragment>
            </Grid>
            <Grid item className={classes.gridItem} xs={6}>
              <TextField
                className={classes.textField}
                required
                id="name"
                label="Name"
                variant="filled"
                fullWidth
                value={name}
                onChange={handleChange}
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
                value={contact}
                onChange={handleChange}
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
                value={message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={6}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleSubmit}
                disabled={!name || !contact || !message}
              >
                Open Mail
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
  updateContactInfo: PropTypes.func.isRequired,
  clearContactInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, {
  openContact,
  closeContact,
  updateContactInfo,
  clearContactInfo,
})(ContactBackdrop);
