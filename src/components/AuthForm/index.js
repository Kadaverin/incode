import React, { Component } from 'react'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, MuiThemeProvider } from '@material-ui/core';

const styles = theme => ({
  flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '10%',
      height: '100vh',
      boxSizing: 'border-box'

      
    
  },
  formConteiner: {
      padding: theme.spacing.unit,
      width: '50%',
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

  handleSubmit = () => {
    // todo: validation
    this.props.handleSubmit(this.state)
  }

  handleFieldChange = (input) => {
    this.setState({
      [input.name]: input.value
    }, () => { console.log(this.state)})
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.flexCenter}>

      <div className={classes.formConteiner}>

          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField 
                name='login' 
                label="Login" 
                fullWidth autoFocus required 
                onChange = {({target}) => this.handleFieldChange(target)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField 
                name='password' 
                label="Password" 
                type="password" 
                fullWidth required 
                onChange = {({target}) => this.handleFieldChange(target)}
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: '10px' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              style={{ textTransform: "none" }}
              onClick={ (event) => { event.preventDefault(); this.handleSubmit() } }
            >
              Login
            </Button>
          </Grid>
      </div>
      </div>

    )
  }
}

AuthForm.defaultProps = {
  login: '',
  password: ''
}

export default withStyles(styles)(AuthForm)