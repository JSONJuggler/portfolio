import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: theme.spacing(1),
    },
  },
  bounceAnimation: {
    position: "fixed",
    animation: `$bounce 2s infinite`,
    top: "auto",
    bottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      bottom: theme.spacing(6),
    },
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
      opacity: "1",
    },
    "50%": {
      transform: "translateY(30%)",
      opacity: "0",
    },
    "100%": {
      transform: "translateY(0)",
      opacity: "1",
    },
  },
}));

const CustomLink = ({ children, title, ...props }) => {
  const classes = useStyles();

  return (
    <Link {...props}>
      <a className={classes.link}>
        <Tooltip title={title}>{children}</Tooltip>
      </a>
    </Link>
  );
};

export default CustomLink;
