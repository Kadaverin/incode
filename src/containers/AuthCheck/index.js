import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isLoggedIn } from 'selectors/auth'
import { currentPath } from 'selectors/router'
import { signIn, signUp, appRoot } from 'constants/routes/ui'

const AuthCheck = (props) => {
  const {Component, isLoggedIn, currentPath} = props
  console.log(props)

  if (!isLoggedIn && currentPath !== signIn && currentPath !== signUp ) {
    console.log('not auth')
    return <Redirect to={signIn}/>
  }

  if(isLoggedIn && [signIn, signUp].some( (path) => path === currentPath) ) {
    console.log('already auth')
    return <Redirect to={appRoot} />
  }

  return <Component/>
}

const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state),
    currentPath: currentPath(state)
  }
}

AuthCheck.propTypes = {
  Component: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(AuthCheck)