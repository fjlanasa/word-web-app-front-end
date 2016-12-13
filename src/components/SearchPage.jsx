import React, { Component } from 'react';
import SearchResultsCollection from './SearchResultsCollection';
import $ from 'jquery';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.props.searchTerm === ''){
      this.setState({loading: true});
    }
    let word = this.refs.word.value.toLowerCase().trim();
    let url = `http://word-web-app-backend.herokuapp.com/${word}`
    $.ajax({
      url: url,
      contentType: 'application/json'
    }).done((data) => {
      this.props.search(word, data);
      this.setState({loading: false});
    })
  }

  render() {
    let noResultsText = null;
    let loadingAnimation = null;
    if(this.state.loading === true) {
      loadingAnimation = <div className='loading' />
    }

    if(this.props.searchResults.length === 0 && this.props.searchTerm !== ''){
      noResultsText = <div className="no-results">
                        Sorry, that search produced no results
                      </div>;
    }
    return (
      <div className='search'>
        <form ref='searchForm' id='search-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='word' defaultValue={this.props.searchTerm} placeholder='Search for Word'/>
          <input className='save submit' type='submit'/>
        </form>
        {loadingAnimation}
        {noResultsText}
        <SearchResultsCollection {...this.props} />
      </div>
    );
  }
}

export default SearchPage;
