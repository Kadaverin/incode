import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from 'selectors/auth'

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

export default connect(mapStateToProps)(HomePage)