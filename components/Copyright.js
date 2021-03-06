import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="caption" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/jsonjuggler">
        Beau Reescano
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
