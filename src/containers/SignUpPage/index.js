import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import AppBar from '@material-ui/core/AppBar'
import AuthForm  from 'components/AuthForm'
import { signUpRequest } from 'actions/auth'
import {connect} from 'react-redux'

class SignUpPage extends Component {
  render(){
    return(
      <div>
        <AppBar title='Sign in' >
          Sign Up
        </AppBar>
        <AuthForm 
          handleSubmit={this.props.actions.signUpRequest}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    signUpRequest
  }, dispatch)
})

export default connect(null, mapDispatchToProps)(SignUpPage)