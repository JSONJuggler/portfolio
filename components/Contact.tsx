import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'black',
    border: 'none',
    background: 'none',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
      borderRadius: theme.spacing(1),
    },
  },
}));

import { openContact, closeContact } from '../redux/actions/contact';

const Contact = ({ children, contact: { contactOpen }, openContact, closeContact, ...props }) => {
  const classes = useStyles();

  return (
    <button className={classes.button} aria-label="contact" onClick={openContact} {...props}>
      <Tooltip title="contact">{children}</Tooltip>
    </button>
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
