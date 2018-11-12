import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import AppBar from '@material-ui/core/AppBar'
import AuthForm  from 'components/AuthForm'
import AuthFormHeader from 'components/AuthFormHeader'
import { signUpRequest } from 'actions/auth'
import {connect} from 'react-redux'
import { signIn } from 'constants/routes/ui'
import history from '../../history'


class SignUpPage extends Component {
  render(){
    return(
      <div>
        <AuthFormHeader
          headerText={'Sign Up'}
          btnText={'I have an account'}
          onBtnClick={ () => history.push(signIn)}
        />
        <AuthForm 
          handleSubmit={this.props.actions.signUpRequest}
          btnText='Sign up'
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