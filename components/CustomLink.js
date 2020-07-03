import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "black",
    "&:hover": {
      background: "rgba(255, 0, 0, 0.3)",
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

const CustomLink = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Link {...props}>
      <a className={classes.link}>{children}</a>
    </Link>
  );
};

export default CustomLink;
