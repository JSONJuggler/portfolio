import { fade, makeStyles } from "@material-ui/core/styles";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TranslateIcon from "@material-ui/icons/Translate";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import isAlpha from "validator/lib/isAlpha";

import {
  updateInput,
  addHit,
  getData,
  selectLang,
  clearData
} from "../src/actions/translations";

const useStyles = makeStyles(theme => ({
  hidden: {
    visibility: "hidden"
  },
  spacing: {
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2)
    }
  },
  input: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(13),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5)
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85)
    },
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
  button: {
    position: "absolute",
    right: theme.spacing(0.5),
    top: theme.spacing(0.5)
  },
  titleDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  titleMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const getLocale = data => {
  switch (data) {
    case "ar":
      return "ar";
    case "zh":
      return "";
    case "zh-TW":
      return "";
    case "en":
      return "en-US";
    case "fi":
      return "";
    case "fr":
      return "fr-FR";
    case "de":
      return "de-DE";
    case "it":
      return "it-IT";
    case "ja":
      return "";
    case "ko":
      return "";
    case "pt":
      return "pt-BR";
    case "ro":
      return "";
    case "ru":
      return "ru-RU";
    case "sk":
      return "sk-SK";
    case "es":
      return "es-ES";
    case "sv":
      return "sv-SE";
    case "th":
      return "";
    case "tr":
      return "tr-TR";
    case "vi":
      return "";
  }
};

const Navbar = ({
  translations: {
    userInput,
    from,
    fromCode,
    toCode,
    chartData,
    preTrans,
    postTrans
  },
  selectLang,
  updateInput,
  addHit,
  getData,
  clearData
}) => {
  const classes = useStyles();

  const router = useRouter();

  const [routing, setRouting] = useState({
    url: "",
    starting: true,
    complete: false
  });

  const [locale, setLocale] = useState("");

  const handleRouteChangeStart = url => {
    console.log("starting nav");
    clearData();
    setRouting(prev => ({ ...prev, starting: true, complete: false, url }));
  };

  const handleRouteChangeComplete = url => {
    console.log("ending nav");
    setRouting(prev => ({ ...prev, starting: false, complete: true }));
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      updateInput("");
      selectLang({
        from: "en",
        to: ""
      });
    }
    if (router.pathname !== "/") {
      updateInput("");
      selectLang({
        from: router.asPath.split("/")[1],
        to: router.asPath.split("/")[2]
      });
      if (
        userInput ||
        (router.pathname !== "/" && router.pathname !== "/404")
      ) {
        if (!router.isFallback) {
          addHit({
            preTrans: router.asPath.split("/")[3],
            fromCode: router.asPath.split("/")[1],
            toCode: router.asPath.split("/")[2]
          });
        }
      }
    }
  }, [routing]);

  const [helperText, setHelperText] = useState({
    inputError: "",
    isInputError: false
  });

  const handleSub = e => {
    e.preventDefault();
    if (!userInput) {
      setHelperText(prev => ({
        inputError: "Please enter a word to translate",
        isInputError: true
      }));
      return;
    }
    if (!fromCode) {
      setHelperText(prev => ({
        inputError: "Please select a language to translate from",
        isInputError: true
      }));
      return;
    }
    if (!toCode) {
      setHelperText(prev => ({
        inputError: "Please select a language to translate to",
        isInputError: true
      }));
      return;
    }
    if (locale) {
      if (!isAlpha(userInput, locale)) {
        setHelperText(prev => ({
          inputError:
            "Looks like this is not a translatable " +
            from +
            " word. Please only include " +
            from +
            " letters only, no punctuations or numbers",
          isInputError: true
        }));
        return;
      }
    }
    router.push(
      "/" + fromCode + "/" + toCode + "/[translation]",
      "/" + fromCode + "/" + toCode + "/" + userInput.toLowerCase()
    );
  };

  const goHome = () => {
    if (router.pathname !== "/") {
      router.push("/");
    }
  };

  const onChange = e => {
    updateInput(e.target.value);
  };

  useEffect(() => {
    setLocale(prev => getLocale(fromCode));
    if (userInput) {
      if (!locale) {
        setHelperText(prev => ({
          inputError:
            from +
            " validation not supported, please double check your input before attempting translation"
        }));
      } else {
        setHelperText(prev => ({ inputError: "", isInputError: false }));
      }
    }
    if (fromCode && toCode && userInput) {
      setHelperText(prev => ({ inputError: "", isInputError: false }));
    }
    if (!userInput) {
      setHelperText(prev => ({ inputError: "", isInputError: false }));
    }
  }, [userInput, fromCode, toCode, locale]);

  return (
    <Fragment>
      <AppBar position="fixed">
        <Container maxWidth="lg" disableGutters={true}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Grid container className={classes.titleDesktop}>
                  <Tooltip title="Home">
                    <IconButton
                      aria-label="home"
                      color="inherit"
                      onClick={goHome}
                    >
                      <Typography variant="h4">Translator</Typography>
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid container className={classes.titleMobile}>
                  <Tooltip title="Home">
                    <IconButton
                      aria-label="home"
                      color="inherit"
                      onClick={e => goHome(e)}
                    >
                      <TranslateIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid item xs className={classes.spacing}>
                <form onSubmit={e => handleSub(e)}>
                  <div className={classes.search}>
                    <TextField
                      name="input"
                      className={classes.input}
                      autoFocus
                      fullWidth
                      id="translate"
                      size="small"
                      value={userInput}
                      placeholder="Translate something..."
                      helperText={helperText.inputError}
                      error={helperText.isInputError}
                      onChange={e => onChange(e)}
                    />
                    <Tooltip title="Translate">
                      <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Translate
                      </Button>
                    </Tooltip>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar className={classes.hidden}></Toolbar>
    </Fragment>
  );
};

// Navbar.propTypes = {
//   rollbar: PropTypes.object.isRequired
// };

Navbar.propTypes = {
  translations: PropTypes.object.isRequired,
  selectLang: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  addHit: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  translations: state.translations
});

export default connect(mapStateToProps, {
  updateInput,
  addHit,
  getData,
  selectLang,
  clearData
})(Navbar);
