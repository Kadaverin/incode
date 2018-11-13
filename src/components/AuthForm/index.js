import React, { Component } from 'react'
import { withStyles, Grid, TextField, Button, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  flexCenter: {
      paddingTop: 'calc(56px + 10%)',
      height: '100vh',
      boxSizing: 'border-box'
  },
  formConteiner: {
      padding: theme.spacing.unit * 4,
      width: '50%',
      margin: '0 auto',
      minWidth: 200,
      maxWidth: 500
  }
});



class AuthForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: this.props.name,
      password: this.props.password
    }
  }

  handleSubmit = (event) => {
    // todo: validation
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  handleFieldChange = (input) => {
    this.setState({
      [input.name]: input.value
    })
  }

  render(){
    const { classes, btnText } = this.props;
    const { login } = this.state;
    return (
      <div className={classes.flexCenter}>
        <Paper className={classes.formConteiner}>
          <form onSubmit={(event) =>  this.handleSubmit(event)}>
            <Grid container spacing={24} direction='column'>
              <Grid item >
                <TextField 
                  name='login' 
                  label="Login"
                  type='email' 
                  error={login === ""}
                  helperText={login === "" ? 'Empty field!' : ''}
                  fullWidth autoFocus required 
                  onChange = {({target}) => this.handleFieldChange(target)}
                />
              </Grid>
        
              <Grid item >
                <TextField 
                  name='password' 
                  label="Password" 
                  type="password" 
                  fullWidth required 
                  onChange = {({target}) => this.handleFieldChange(target)}
                />
              </Grid>
            
              <Grid item >
                <Button 
                  variant="outlined" 
                  color="primary" 
                  style={{ textTransform: "none" }}
                  type='submit'
                >
                  {btnText}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    )
  }
}

AuthForm.defaultProps = {
  login: '',
  password: '',
  btnText: 'Submit'
}

AuthForm.propTypes = {
  btnText: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(styles)(AuthForm)