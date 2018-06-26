import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import {searchInput} from '../actions/searchActions'
import {updateSearchInput} from '../actions/searchActions'

// component
import {Search} from '../components/search'

class BookSearch extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate(prevProps) {
    const {searchQuery} = prevProps;
    if (searchQuery !== this.props.searchQuery) {
      this.props.searchInput(this.props.searchQuery)
    }
  }

  render() {
    return (
      <Search
        handleChange={this.props.updateSearchInput}
        searchQuery={this.props.searchQuery}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.searchReducer.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  searchInput: (formData) => dispatch(searchInput(formData)),
  updateSearchInput: (formData) => dispatch(updateSearchInput(formData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearch))