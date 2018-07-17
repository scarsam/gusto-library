import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {LibraryBookResults} from '../components/LibraryBookResults'
import {RentedBookResults} from '../components/RentedBookResults'

// actions
import {removeBook} from '../actions/bookActions';
import {rentBook} from '../actions/bookActions'
import {returnBook} from '../actions/bookActions'
import {loadLibraryBooks} from '../actions/libraryActions';
import {getCurrentUser} from '../actions/userActions';

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const {getCurrentUser, loadLibraryBooks} = this.props;
    const userObject = sessionStorage.getItem('user');
    getCurrentUser(userObject);
    loadLibraryBooks();
  }

  render() {
    const {libraryBooks, rentedBooks, pending, message} = this.props;
    if (pending === true) {
      return <p>Loading..</p>
    } else {
      return (
        <div className='row'>
          {message ? <div className='alert alert-success success-banner' role='alert'>{message}</div> : null}
          <div className='col-sm-12'>
            <div className='row'>
              <h4 className='mb-4 mt-4'>Library</h4>
              <LibraryBookResults {...this.props} results={libraryBooks} />
            </div>
          </div>
          <div className='col-sm-12'>
            <div className='row'>
              <h4 className='mb-4 mt-4'>Rented Books</h4>
              <RentedBookResults {...this.props} results={rentedBooks}/>
            </div>
          </div>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => ({
  libraryBooks: state.libraryReducer.availableBooks,
  rentedBooks: state.libraryReducer.rentedBooks,
  pending: state.libraryReducer.pending,
  current_user: state.userReducer.current_user,
  message: state.notificationReducer.notification,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  rentBook: (book) => dispatch(rentBook(book)),
  returnBook: (book) => dispatch(returnBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  getCurrentUser: (userObject) => dispatch(getCurrentUser(userObject)),
});

LibraryPage.propTypes = {
  current_user: PropTypes.object,
  pending: PropTypes.bool,
  libraryBooks: PropTypes.arrayOf(PropTypes.object),
  rentedBooks: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))