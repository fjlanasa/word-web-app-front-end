import React, { Component } from 'react';
import SearchResultsCollection from './SearchResultsCollection'

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let word = this.refs.word.value.toLowerCase();
    fetch(`https://owlbot.info/api/v1/dictionary/${word}?format=json`)
      .then(response => response.json())
      .then(body => {
        this.props.search(word, body);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`)
    );
  }

  render() {
    return (
      <div className='search'>
        <form ref='searchForm' id='search-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='word' defaultValue={this.props.searchTerm} placeholder='Search for Word'/>
          <input className='save submit' type='submit'/>
        </form>
        <SearchResultsCollection {...this.props}/>
      </div>
    );
  }
}

export default SearchPage;
