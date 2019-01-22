import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //use Link instead of href?
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import types from "../../utils/types";
import { SciGymIcon } from "../files/images";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Star from '@material-ui/icons/Star';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import Hidden from '@material-ui/core/Hidden';
import ProfileMenu from './ProfileMenu';
import SearchBar from './SearchBar';

const styles = theme => ({
  root: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
    display:'flex',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  menuButton: {
    position: 'relative',
    marginLeft: -12,
    marginRight: 20,
  },
  toolBarStyle: {
    backgroundColor: '#82B1FF',
  },
});


export class Header extends PureComponent {
  render() {
    const { loading } = this.props;
    const { classes } = this.props
    return (
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.toolBarStyle}>
          <div className={classes.root}>
            <IconButton href="/" color="inherit" style={{backgroundColor: 'transparent', textDecoration: 'none'}}>
              <SciGymIcon/>
              SciGym
            </IconButton>
            <Hidden xsDown>
              <IconButton href="/" color="inherit" style={{backgroundColor: 'transparent', textDecoration: 'none'}}>
                <Star className={classes.leftIcon}/>
                Get Started
              </IconButton>
            </Hidden>
            <Hidden smUp>
              <IconButton href="/" color="inherit" style={{backgroundColor: 'transparent', textDecoration: 'none'}}>
                <Star/>
              </IconButton>
            </Hidden>
          </div>
          <SearchBar />
          <div className={classes.grow} />
          <div className={classes.menuButton}>
            {loading ? <CircularProgress size={30} disableShrink color="secondary"/> : <ProfileMenu />}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: Boolean(
    state.display.loaders.find(l => l === types.LOGIN_USER_GITHUB_OAUTH)
  )
});

export default withRouter(
  compose(
    connect(mapStateToProps),
    withStyles(styles)
  )(Header)
);
