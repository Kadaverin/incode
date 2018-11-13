import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import AuthForm  from 'components/AuthForm'
import AuthFormHeader from 'components/AuthFormHeader'
import { signInRequest } from 'actions/auth'
import { connect } from 'react-redux'
import history from '../../history'
import { signUp } from 'constants/routes/ui'

class SignInPage extends Component {
  render(){
    return(
      <div>
        <AuthFormHeader
          headerText={'Sign In'}
          btnText={'I dont have account'}
          onBtnClick={ () => history.push(signUp)}
        />
        <AuthForm 
          handleSubmit={this.props.actions.signInRequest}
          btnText='Sign in'
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