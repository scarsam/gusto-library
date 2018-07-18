import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import book from '../../../images/svg/books-1.svg';

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
    return (
      <nav className='row navbar bg-white sticky-top'>
        <a className='navbar-brand font-normal'>
          <img src={book} className='w-30px d-inline-block mr-3 align-top' />
          The Library
        </a>
        {location !== '/login' ? <NavLinks logout={this.props.logout}/> : null}
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar))