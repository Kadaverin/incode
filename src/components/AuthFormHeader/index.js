import React from 'react'
import { withStyles, AppBar, Typography, Button, Toolbar} from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const AuthFormHeader = ({ headerText, btnText, onBtnClick, classes }) => {

  const handleClick = (e) => {
    e.preventDefault(); 
    onBtnClick();
  }
  
  return(
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {headerText}
        </Typography>
        <Button color="inherit" onClick={ handleClick }> 
          {btnText} 
        </Button>
      </Toolbar>
    </AppBar>
  )
}

AuthFormHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AuthFormHeader)