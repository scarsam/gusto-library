import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import BookList from '../components/BookList'
import BookRentalLog from '../components/BookRentalLog'

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <BookList/>
        <BookRentalLog/>
      </div>
   )
  }

}

// const mapStateToProps = (state) => ({
// });
//
// const mapDispatchToProps = (dispatch) => ({
// });

export default withRouter(connect(null, null)(LibraryPage))