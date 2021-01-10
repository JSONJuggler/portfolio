import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SvgYoutube, SvgTwitter, SvgGithub, SvgLinkedin } from '../icons';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  socialDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  socialMobile: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function Link({ children, href }) {
  const style = {
    color: 'black',
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}

const Socials = () => {
  const classes = useStyles();

  const router = useRouter();

  const [routing, setRouting] = useState({
    url: '',
    starting: true,
    complete: false,
  });

  const handleRouteChangeStart = (url) => {
    console.log('starting nav');
    setRouting((prev) => ({ ...prev, starting: true, complete: false, url }));
    window.scroll(0, 0);
  };

  const handleRouteChangeComplete = (url) => {
    console.log('ending nav');
    setRouting((prev) => ({ ...prev, starting: false, complete: true }));
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <Fragment>
      <Grid item>
        <Link href="https://github.com/jsonjuggler">
          <Tooltip title="My Github">
            <IconButton aria-label="github" color="secondary">
              <SvgGithub size="1x" />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://www.linkedin.com/in/beau-reescano-68704811b/">
          <Tooltip title="My Linkedin Page">
            <IconButton aria-label="Linkedin" color="secondary">
              <SvgLinkedin size="1x" />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://twitter.com/JSONJuggler ">
          <Tooltip title="My Twitter">
            <IconButton aria-label="twitter" color="secondary">
              <SvgTwitter size="1x" />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
    </Fragment>
  );
};

export default Socials;
