import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isAuth  } from 'selectors/auth'
import { currentPath } from 'selectors/router'
import { signIn, signUp, home } from 'constants/routes/ui'
  
const AuthCheck = ({Component, isAuth , currentPath}) => {

  if (!isAuth  && [signIn, signUp].every( path => path !== currentPath ) ) {
    return <Redirect to={signIn}/>
  }

  if(isAuth  && [signIn, signUp].some( path => path === currentPath) ) {
    return <Redirect to={home} />
  }

  return <Component/>
}

const mapStateToProps = state => {
  return {
    isAuth : isAuth (state),
    currentPath: currentPath(state)
  }
}

AuthCheck.propTypes = {
  Component: PropTypes.func.isRequired,
  isAuth : PropTypes.bool.isRequired,
  currentPath: PropTypes.string.isRequired
}

export default connect(mapStateToProps, null)(AuthCheck)