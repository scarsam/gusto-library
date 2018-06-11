import React, { Component } from 'react';
import { connect } from 'react-redux';

class Session extends Component{

  render () {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input name='name' type='text'/>
        <input type='submit'/>
      </form>
    );
  }

}


export default connect(null, null)(Session)