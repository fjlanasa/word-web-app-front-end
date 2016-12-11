import React from 'react';
import Result from './Result';

const ResultsCollection = props => {
  let results = props.searchResults.map((result, index)=>{
    return (
      <Result result={result} key={index}/>
    )
  })
  return (
    <div className='small-12 columns'>
      <ul className="results">
        {results}
      </ul>
    </div>
  )
}

export default ResultsCollection;
