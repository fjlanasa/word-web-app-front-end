import React, { Component } from 'react';
import SearchResultsCollection from './SearchResultsCollection';
import $ from 'jquery';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.props.searchTerm === '') {
      this.setState({loading: true});
    }
    let word = this.word.value.toLowerCase().trim();
    // This url should be something that can be generated dynamically on
    // starting up the app.  Maybe via an env variable.  B/C I ran the local
    // backend and it's not even using it.  Wouldn't want to be hitting heroku
    // when developing.
    let url = `http://word-web-app-backend.herokuapp.com/${word}`
    // I'm guessing you guys were just taught to use JQuery for ajax but I
    // definitely wouldn't pull in such a large library just to make 1 ajax
    // call.
    //
    // Instead, I'd look for something like axios or fetch with a polyfill.
    $.ajax({
      url: url,
      contentType: 'application/json'
    }).done((data) => {
      this.props.search(word, data);
      this.setState({loading: false});
    })
  }

  render() {
    const { searchResults, searchTerm } = this.props;
    const noResultsProduced = searchResults.length === 0 && searchTerm !== '';

    return (
      <div className='search'>
        <form ref='searchForm' id='search-form' onSubmit={this.handleSubmit}>
          {/* can use call back refs to clean this up */}
          <input type='text' ref={i => this.word = i} defaultValue={searchTerm} placeholder='Search for Word'/>
          <input className='save submit' type='submit'/>
        </form>
        {this.state.loading && <div className='loading' />}
        {noResultsProduced && 
          <div className="no-results">
            Sorry, that serach produced no results
          </div>}
        <SearchResultsCollection {...this.props} />
      </div>
    );
  }
}

export default SearchPage;
