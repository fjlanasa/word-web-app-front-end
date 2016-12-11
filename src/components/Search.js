import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import ResultsCollection from './ResultsCollection'

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderSearchResults(result, i){
    return (
      <div key={i}>
        <p>{result.type}</p>
      </div>
    )
  }

  handleSubmit(event){
    event.preventDefault();
    let word = this.refs.word.value;
    fetch(`https://owlbot.info/api/v1/dictionary/${word}?format=json`)
      .then(response => response.json())
      .then(body => {
        this.props.search(word, body);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`)
    );
  }

  render() {
    console.log('search:')
    console.log(this.props.searchResults);
    return (
      <div>
        Search!
        <form ref="searchForm" id="search-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="word" />
          <input type="submit" hidden />
        </form>
        <ResultsCollection searchResults = {this.props.searchResults}/>
      </div>
    );
  }
}

export default Search;
