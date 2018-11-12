import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authUser } from 'selectors/auth'

class HomePage extends Component {
  render(){
    return(
      <div>
        <h1>
          {`Hello, ${this.props.authUser.login}`}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authUser: authUser(state) 
})

export default connect(mapStateToProps)(HomePage)