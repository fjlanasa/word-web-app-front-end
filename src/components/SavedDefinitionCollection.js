import React from 'react';
import SavedDefinition from './SavedDefinition';

function SavedDefinitionCollection(props) {
  let definitions = props.definitions.map((definition, index)=>{
    return (
      <SavedDefinition key={index} index={index} word={definition.word} definition={definition.definition} {...props}/>
    )
  })
  return (
    <div className="definitions">
      {definitions}
    </div>
  )
}

export default SavedDefinitionCollection;
