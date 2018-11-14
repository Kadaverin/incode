import React, { Component } from 'react'
import { withStyles, Grid, TextField, Button, Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const emailErrorMsg = 'email is incorrect'
const passwordErrorMsg = 'password length cannot be less than 5 characters'

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
      login: this.props.login,
      password: this.props.password,
      errors: {
        login: '',
        password: ''
      }
    }

    this.validators = {
      'login': (str) => emailRegExp.test(str) ? '' : emailErrorMsg,
      'password': (str) => str.length >= 5 ? '' : passwordErrorMsg
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit({
      login: this.state.login,
      password: this.state.password
    });
  }

  handleFieldChange = ({target}) => {
    const errorMsg = this.validators[target.name](target.value) 

    this.setState( 
      prevState => ({
        ...prevState,
        [target.name]: target.value,
        errors: {
          ...prevState.errors,
          [target.name]: errorMsg
        }
      })
    )
  }

  renderServerError = () => {
    if(this.props.errorResponse){
      return(
        <Grid item>
          <Typography color='error'>
            {this.props.errorResponse + '. Try again'}
          </Typography>
        </Grid>
      )
    }
  }

  isSubmitDisabled = () => {
    return !this.state.login || !this.state.password || !!this.state.errors.login || !!this.state.errors.password 
  }

  render(){
    const { classes, btnText } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.flexCenter}>
        <Paper className={classes.formConteiner}>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={24} direction='column'>
              <Grid item >
                <TextField 
                  name='login' 
                  label="Login"
                  type='email' 
                  error={!!errors['login']}
                  helperText={errors['login']}
                  fullWidth autoFocus required 
                  onChange = {this.handleFieldChange}
                />
              </Grid>
        
              <Grid item >
                <TextField 
                  name='password' 
                  label="Password" 
                  type="password" 
                  error={!!errors['password']}
                  helperText={errors['password']}
                  fullWidth required 
                  onChange = {this.handleFieldChange}
                />
              </Grid>

              { this.renderServerError() }
            
              <Grid item >
                <Button 
                  variant="outlined" 
                  color="primary" 
                  style={{ textTransform: "none" }}
                  type='submit'
                  disabled = { this.isSubmitDisabled() }
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
  errorResponse: PropTypes.string,
  login: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(styles)(AuthForm)