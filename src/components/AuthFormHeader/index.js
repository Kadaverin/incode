import React from 'react'
import { withStyles, AppBar, Typography, Button, Toolbar} from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  grow: {
    flexGrow: 1,
  },
  linkBtn: {
    color: 'white',
    textDecoration: 'none'
  },
};

const AuthFormHeader = ({ headerText, linkText, classes , linkPath}) => {
  
  return(
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {headerText}
        </Typography> 
        <Link to={linkPath}>
          <Button className={classes.linkBtn}>   
            {linkText} 
          </Button>
        </Link>
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