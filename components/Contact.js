import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { openContact, closeContact } from "../src/actions/contact";
import { Children } from "react";

const Contact = ({
  children,
  contact: { contactOpen },
  openContact,
  closeContact,
  ...props
}) => {
  return (
    <Tooltip title="Contact">
      <IconButton
        aria-label="contact"
        color="inherit"
        onClick={openContact}
        {...props}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  openContact: PropTypes.func.isRequired,
  closeContact: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { openContact, closeContact })(Contact);
