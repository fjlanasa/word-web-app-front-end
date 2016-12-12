import React from 'react';

function SavedDefinition(props) {
  return(
    <div className='result'>
      <div className='word'><div>{props.word}</div></div>
      <div className='result-content'>
        <span className='type'>({props.definition.type}) - </span>
        {props.definition.defenition}
      </div>
    </div>
  );
}

export default SavedDefinition;
