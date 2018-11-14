import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import AuthForm  from 'components/AuthForm'
import AuthFormHeader from 'components/AuthFormHeader'
import { signUpRequest, clearAuthErrors } from 'actions/auth'
import { connect } from 'react-redux'
import { signIn } from 'constants/routes/ui'
import { errorResponse } from 'selectors/auth'
import PropTypes from 'prop-types'

class SignUpPage extends Component {
  componentWillUnmount(){
    this.props.actions.clearAuthErrors()
  }

  render(){
    return(
      <div>
        <AuthFormHeader
          headerText={'Sign Up'}
          linkText={'I have an account'}
          linkPath={signIn}
        />
        <AuthForm 
          handleSubmit={this.props.actions.signUpRequest}
          btnText='Sign up'
          errorResponse = {this.props.errorResponse}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorResponse: errorResponse(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    signUpRequest, clearAuthErrors
  }, dispatch)
})

SignUpPage.propTypes = {
  errorResponse: PropTypes.string,
  actions: PropTypes.shape({
    signUpRequest: PropTypes.func.isRequired,
    clearAuthErrors: PropTypes.func.isRequired,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)