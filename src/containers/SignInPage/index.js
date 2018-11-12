import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import AppBar from '@material-ui/core/AppBar'
import AuthForm  from 'components/AuthForm'
import { signInRequest } from 'actions/auth'
import {connect} from 'react-redux'

class SignInPage extends Component {
  render(){
    return(
      <div>
        <AppBar title='Sign in' >
          Sign In
        </AppBar>
        <AuthForm 
          handleSubmit={this.props.actions.signInRequest}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    signInRequest
  }, dispatch)
})

export default connect(null, mapDispatchToProps)(SignInPage)