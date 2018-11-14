import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from 'selectors/auth'
import PropTypes from 'prop-types'

class HomePage extends Component {
  render(){
    const { authUser } = this.props
    if(!authUser.login){
      return null
    }
    return(
      <div>
        <h1>
          {`Hello, ${authUser.login}`}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authUser: authUser(state) 
})

HomePage.propTypes = {
  authUser : PropTypes.shape({
    id: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string,
  })
}

export default connect(mapStateToProps)(HomePage)