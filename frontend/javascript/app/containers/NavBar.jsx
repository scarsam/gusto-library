import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {NavLinks} from '../components/NavLinks'

// actions
import {logoutUser} from '../actions/sessionActions'

class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const location = this.props.location.pathname;
    if (location !== '/login') {
      return <NavLinks logout={this.props.logout}/>
    } else {
      return null
    }
  }

}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar))