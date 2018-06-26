import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>Library</h1>
      </div>
   )
  }

}

export default withRouter(connect(null, null)(LibraryPage))