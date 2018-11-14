import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import AuthForm  from 'components/AuthForm'
import AuthFormHeader from 'components/AuthFormHeader'
import { signInRequest, clearAuthErrors } from 'actions/auth'
import { connect } from 'react-redux'
import { signUp } from 'constants/routes/ui'
import { errorResponse } from 'selectors/auth'
import PropTypes from 'prop-types'

class SignInPage extends Component {
  componentWillUnmount(){
    this.props.actions.clearAuthErrors()
  }

  render(){
    return(
      <div>
        <AuthFormHeader
          headerText={'Sign In'}
          linkText={'I dont have account'}
          linkPath={signUp}
        />
        <AuthForm 
          handleSubmit={this.props.actions.signInRequest}
          btnText='Sign in'
          errorResponse = {this.props.errorResponse}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorResponse: errorResponse(state),
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    signInRequest,
    clearAuthErrors
  }, dispatch)
})

SignInPage.propTypes = {
  errorResponse: PropTypes.string,
  actions: PropTypes.shape({
    signUpRequest: PropTypes.func.isRequired,
    clearAuthErrors: PropTypes.func.isRequired,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)