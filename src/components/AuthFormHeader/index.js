import React from 'react'
import { AppBar, Typography, Button, Toolbar} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

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
  return(
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {headerText}
        </Typography>
        <Button color="inherit" onClick={ (e) => {e.preventDefault(); onBtnClick()} }> {btnText} </Button>
      </Toolbar>
     </AppBar>
  )
}

export default  withStyles(styles)(AuthFormHeader)