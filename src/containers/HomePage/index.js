import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class HomePage extends Component {
  render(){
    return(
      <div>
        home
      </div>
    )
  }
}

export default connect()(HomePage)