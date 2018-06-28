import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class ProfilePage extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <h1>Profile Page</h1>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(ProfilePage))