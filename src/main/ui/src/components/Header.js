import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import logo from '../logo.png';
import transparent from '../transparent.png'
import { useLocation } from 'react-router-dom'

const signInOrOut = (route, email, signin, signout) => {
    if((route === "/workouts" || route === "/friends" || route === "/profile" || route === "/") && (email !== "" && email !== null && email !== undefined))
    {
        return <Button variant="outlined" size="small" onClick={signout}>
          Sign out
        </Button>
    }
    else
    {
        return <Button variant="outlined" size="small" onClick={signin}>
          Sign in
        </Button>
    }
}
const secondToolbar = (classes, sections, route, email) =>  { //This should be changed to "if logged in, see this toolbar"
    if ((route === "/workouts" || route === "/friends" || route === "/profile" || route === "/") && (email !== "" && email !== null && email !== undefined)) {
      return <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          className={classes.toolbarLink}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>;
    }
    return ;
  }

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const location = useLocation(); 

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="Sidero logo" width="50" height="50"/>
        <img src={transparent} alt="Sidero logo" width="50" height="50"/>
        {/*Yes I used a transparent image to help space the center text because I couldnt figure out how to move it lol*/}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {signInOrOut(location.pathname, props.email, props.signin, props.signout)}
      </Toolbar>
      {secondToolbar(classes, sections, location.pathname, props.email)}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};