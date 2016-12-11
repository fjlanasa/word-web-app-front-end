import React from 'react';
import SearchResult from './SearchResult';

const SearchResultsCollection = props => {
  let results = props.searchResults.map((result, index)=>{
    return (
      <SearchResult key={index} index={index} result={result} {...props}/>
    )
  })
  return (
    <div className="results">      
      {results}
    </div>
  )
}

export default SearchResultsCollection;
